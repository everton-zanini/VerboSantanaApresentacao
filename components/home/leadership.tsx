import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function Leadership() {
  return (
    <section className="bg-mist py-20 sm:py-28 dark:bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-foreground/10">
            <PlaceholderImage alt="Foto do pastor da igreja" label="Foto do pastor" />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Nossa liderança"
            title="Pr. Nome do Pastor"
            align="left"
            className="mx-0 text-left"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Com dedicação à Palavra e um cuidado genuíno pelas pessoas, nossa liderança
              caminha ao lado de cada família da igreja, incentivando fé, propósito e
              crescimento espiritual em cada etapa da vida.
            </p>
            <Button size="lg" variant="outline" className="mt-8 h-12 rounded-full px-6 text-sm font-semibold">
              Conheça nossa história
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
