import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ministryItems } from "@/lib/site-config";

export function Ministries() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comunidade"
          title="Conheça nossos ministérios"
          subtitle="Um lugar para cada fase da sua vida."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {ministryItems.map((ministry, index) => (
            <Reveal key={ministry.slug} delay={index * 0.06}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-mist px-4 py-8 text-center transition-colors hover:bg-primary/5 dark:bg-white/5">
                <ministry.icon className="h-8 w-8 text-primary" strokeWidth={1.75} />
                <span className="text-sm font-medium text-foreground">{ministry.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
