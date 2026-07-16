import type { ScheduleItem } from "@/types";
import { siteConfig } from "@/lib/site-config";

const WEEKDAY_TO_ICS: Record<string, string> = {
  domingo: "SU",
  "segunda-feira": "MO",
  "terça-feira": "TU",
  "quarta-feira": "WE",
  "quinta-feira": "TH",
  "sexta-feira": "FR",
  sábado: "SA",
};

const WEEKDAY_INDEX: Record<string, number> = {
  domingo: 0,
  "segunda-feira": 1,
  "terça-feira": 2,
  "quarta-feira": 3,
  "quinta-feira": 4,
  "sexta-feira": 5,
  sábado: 6,
};

function nextOccurrence(weekday: number, hours: number, minutes: number) {
  const now = new Date();
  const result = new Date(now);
  const diff = (weekday - now.getDay() + 7) % 7;
  result.setDate(now.getDate() + diff);
  result.setHours(hours, minutes, 0, 0);
  if (diff === 0 && result < now) {
    result.setDate(result.getDate() + 7);
  }
  return result;
}

function formatICSDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildEvent(item: ScheduleItem) {
  const weekdayKey = item.day.toLowerCase();
  const weekdayIndex = WEEKDAY_INDEX[weekdayKey] ?? 0;
  const [hours, minutes] = item.time.split(":").map(Number);
  const start = nextOccurrence(weekdayIndex, hours, minutes);
  const end = new Date(start.getTime() + 90 * 60 * 1000);
  const byDay = WEEKDAY_TO_ICS[weekdayKey] ?? "SU";

  return [
    "BEGIN:VEVENT",
    `UID:${item.day}-${item.time}@verbodavidasantana`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `RRULE:FREQ=WEEKLY;BYDAY=${byDay}`,
    `SUMMARY:${item.label} - ${siteConfig.shortName}`,
    `LOCATION:${siteConfig.address.full}`,
    "END:VEVENT",
  ].join("\r\n");
}

export function buildScheduleICS(items: ScheduleItem[]) {
  const events = items.map(buildEvent).join("\r\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Verbo da Vida Santana//Cultos//PT",
    "CALSCALE:GREGORIAN",
    events,
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadScheduleICS(items: ScheduleItem[]) {
  const ics = buildScheduleICS(items);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cultos-verbo-da-vida-santana.ics";
  link.click();
  URL.revokeObjectURL(url);
}
