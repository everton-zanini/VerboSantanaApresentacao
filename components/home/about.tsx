import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Reveal } from "@/components/shared/reveal";

const points = [
  "Uma igreja cristã de portas abertas para todos",
  "Baseada e fundamentada na Palavra de Deus",
  "Comprometida em ensinar a fé de forma prática",
  "Um lugar para viver em família",
  "Um ambiente de amor genuíno",
  "Focada no seu crescimento espiritual",
];

export function About() {
  return (
    <section id="quem-somos" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Quem somos"
            title="Uma igreja para chamar de sua"
            align="left"
            className="mx-0 text-left"
          />
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-brand-gold" />
                  <span className="text-base leading-relaxed text-muted-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-foreground/10">
            <PlaceholderImage
              alt="Membros da igreja reunidos em comunhão"
              label="Foto da comunidade da igreja"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
