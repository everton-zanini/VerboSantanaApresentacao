"use client";

import { CalendarPlus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { scheduleItems } from "@/lib/site-config";
import { downloadScheduleICS } from "@/lib/calendar";

export function Schedule() {
  return (
    <section id="horarios" className="scroll-mt-20 bg-mist py-20 sm:py-28 dark:bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Horários" title="Venha nos visitar" />

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-foreground text-background shadow-xl">
            <div className="grid divide-y divide-background/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {scheduleItems.map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2 px-8 py-10 text-center">
                  <Clock className="h-6 w-6 text-brand-gold" />
                  <p className="text-sm font-medium uppercase tracking-wide text-background/60">
                    {item.day}
                  </p>
                  <p className="font-heading text-4xl font-bold">{item.time}</p>
                  <p className="text-sm text-background/70">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center border-t border-background/10 px-8 py-6">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 rounded-full px-6 text-sm font-semibold"
                onClick={() => downloadScheduleICS(scheduleItems)}
              >
                <CalendarPlus className="h-5 w-5" />
                Adicionar à agenda
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
