import {
  Baby,
  BookOpen,
  Users,
  Sparkles,
  UsersRound,
  HeartHandshake,
  MessageCircle,
  Flame,
  ShieldCheck,
  Smile,
  HandHeart,
  Building2,
  DoorOpen,
  HandCoins,
  Megaphone,
  Link2,
  HandHelping,
  CalendarDays,
  Globe2,
  Music4,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/social-icons";
import type {
  ScheduleItem,
  ValueItem,
  MinistryItem,
  SocialLink,
} from "@/types";

// TODO: substituir pelos dados reais da igreja antes de publicar.
export const siteConfig = {
  name: "Igreja Verbo da Vida Santana",
  shortName: "Verbo da Vida Santana",
  tagline: "Seja muito bem-vindo!",
  description:
    "Uma igreja acolhedora e moderna, baseada na Palavra de Deus. Conheça nossos horários, ministérios e venha nos visitar.",
  contact: {
    whatsappNumber: "5511988897593",
    phoneDisplay: "(11) 98889-7593",
  },
  address: {
    street: "Rua Dr Zuquim, 1228 - Santana",
    cityState: "São Paulo - SP",
    zip: "02035-021",
    full: "Rua Dr Zuquim, 1228 - Santana, São Paulo - SP, 02035-021",
    mapsQuery: "Rua Dr Zuquim, 1228 - Santana, São Paulo - SP, 02035-021",
  },
};

export const scheduleItems: ScheduleItem[] = [
  { day: "Domingo", time: "10:00", label: "Culto de Celebração" },
  { day: "Terça-feira", time: "20:00", label: "Culto de Oração" },
];

export const mission = {
  statement: "Levar a Palavra da Fé para libertar o Meu povo.",
};

export const vision = {
  statement: "Alcançar o Brasil e as nações com a Palavra da fé e o amor.",
};

export const valueItems: ValueItem[] = [
  { icon: Flame, title: "Vida de fé" },
  { icon: HeartHandshake, title: "Unidade e Amor" },
  { icon: ShieldCheck, title: "Integridade" },
  { icon: Smile, title: "Alegria e Paz" },
  { icon: BookOpen, title: "Firmeza doutrinária" },
  { icon: Sparkles, title: "Fervor de espírito" },
  { icon: HandHeart, title: "Coração para servir" },
  { icon: Building2, title: "Edificação de pessoas" },
];

export const ministryItems: MinistryItem[] = [
  { slug: "acolhimento", name: "Acolhimento", icon: DoorOpen },
  { slug: "assistencia-social", name: "Assistência Social", icon: HandCoins },
  { slug: "comunicacao", name: "Comunicação", icon: Megaphone },
  { slug: "conexoes", name: "Conexões", icon: Link2 },
  { slug: "diaconato", name: "Diaconato", icon: HandHelping },
  { slug: "eventos", name: "Eventos", icon: CalendarDays },
  { slug: "homens", name: "Homens", icon: Users },
  { slug: "infantil", name: "Infantil", icon: Baby },
  { slug: "jovens", name: "Jovens", icon: Sparkles },
  { slug: "missoes", name: "Missões", icon: Globe2 },
  { slug: "mulheres", name: "Mulheres", icon: UsersRound },
  { slug: "musica", name: "Música", icon: Music4 },
];

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/verbosantana/", icon: InstagramIcon },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Igrejaverbodavidasantana",
    icon: YoutubeIcon,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${siteConfig.contact.whatsappNumber}`,
    icon: MessageCircle,
  },
];
