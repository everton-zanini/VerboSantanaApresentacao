import {
  Baby,
  Heart,
  BookOpen,
  Globe2,
  Users,
  Sparkles,
  Music4,
  PersonStanding,
  UsersRound,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/icons/social-icons";
import type {
  ScheduleItem,
  VisionItem,
  HighlightItem,
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
  url: "https://verbodavidasantana.com.br",
  verse: {
    text: "Porque para mim o viver é Cristo, e o morrer é lucro.",
    reference: "Filipenses 1:21",
  },
  contact: {
    whatsappNumber: "5511999999999",
    email: "contato@verbodavidasantana.com.br",
    phoneDisplay: "(11) 99999-9999",
  },
  address: {
    street: "Rua Exemplo, 123 - Santana",
    cityState: "São Paulo - SP",
    zip: "02000-000",
    full: "Rua Exemplo, 123 - Santana, São Paulo - SP, 02000-000",
    mapsQuery: "Igreja Verbo da Vida Santana, São Paulo",
  },
};

export const scheduleItems: ScheduleItem[] = [
  { day: "Domingo", time: "10:00", label: "Culto de Celebração" },
  { day: "Terça-feira", time: "20:00", label: "Culto de Oração" },
];

export const visionItems: VisionItem[] = [
  {
    icon: Heart,
    title: "Amar Pessoas",
    description: "Acolher cada pessoa com o amor de Cristo, sem julgamentos.",
  },
  {
    icon: BookOpen,
    title: "Ensinar a Palavra",
    description: "Uma Palavra prática e relevante para o dia a dia.",
  },
  {
    icon: Globe2,
    title: "Alcançar Vidas",
    description: "Levar esperança e transformação para além dos nossos muros.",
  },
  {
    icon: Users,
    title: "Formar Discípulos",
    description: "Ajudar cada um a crescer em fé, caráter e propósito.",
  },
];

export const highlightItems: HighlightItem[] = [
  { icon: Sparkles, label: "Ambiente acolhedor" },
  { icon: BookOpen, label: "Palavra prática" },
  { icon: Music4, label: "Louvor inspirador" },
  { icon: Baby, label: "Ministério infantil" },
  { icon: PersonStanding, label: "Jovens" },
  { icon: HeartHandshake, label: "Casais" },
  { icon: UsersRound, label: "Mulheres" },
  { icon: Users, label: "Homens" },
];

export const ministryItems: MinistryItem[] = [
  {
    slug: "braves",
    name: "Braves",
    description: "Ministério de jovens: comunidade, propósito e adrenalina de fé.",
    icon: Sparkles,
  },
  {
    slug: "di",
    name: "DI - Discipulado Infantil",
    description: "Um espaço divertido e seguro para as crianças conhecerem Jesus.",
    icon: Baby,
  },
  {
    slug: "mulheres",
    name: "Mulheres",
    description: "Encontros para fortalecer a fé e a amizade entre mulheres.",
    icon: UsersRound,
  },
  {
    slug: "homens",
    name: "Homens",
    description: "Comunidade para crescer em caráter, fé e liderança.",
    icon: Users,
  },
  {
    slug: "casais",
    name: "Casais",
    description: "Cuidando e fortalecendo famílias através da Palavra.",
    icon: HeartHandshake,
  },
];

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com/verbodavidasantana", icon: InstagramIcon },
  { name: "Facebook", href: "https://facebook.com/verbodavidasantana", icon: FacebookIcon },
  { name: "YouTube", href: "https://youtube.com/@verbodavidasantana", icon: YoutubeIcon },
  {
    name: "WhatsApp",
    href: `https://wa.me/${siteConfig.contact.whatsappNumber}`,
    icon: MessageCircle,
  },
];
