import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type Icon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export interface ScheduleItem {
  day: string;
  time: string;
  label: string;
}

export interface VisionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HighlightItem {
  icon: LucideIcon;
  label: string;
}

export interface MinistryItem {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: Icon;
}
