import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { highlightItems } from "@/lib/site-config";

export function Highlights() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Para você"
          title="O que você encontrará aqui"
          subtitle="Preparamos um ambiente completo para toda a família crescer junto."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {highlightItems.map((highlight, index) => (
            <Reveal key={highlight.label} delay={index * 0.06}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-mist px-4 py-8 text-center transition-colors hover:bg-primary/5 dark:bg-white/5">
                <highlight.icon className="h-8 w-8 text-primary" strokeWidth={1.75} />
                <span className="text-sm font-medium text-foreground">{highlight.label}</span>
                <CheckCircle2 className="h-4 w-4 text-brand-gold" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
