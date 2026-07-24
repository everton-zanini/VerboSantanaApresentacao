import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type Icon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export interface ScheduleItem {
  day: string;
  time: string;
  label: string;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
}

export interface MinistryItem {
  slug: string;
  name: string;
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: Icon;
}
