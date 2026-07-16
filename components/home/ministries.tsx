import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { ministryItems } from "@/lib/site-config";

export function Ministries() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comunidade"
          title="Conheça nossos ministérios"
          subtitle="Um lugar para cada fase da sua vida. Em breve, cada ministério terá sua própria página."
        />
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8 [&::-webkit-scrollbar]:hidden">
          {ministryItems.map((ministry) => (
            <div
              key={ministry.slug}
              className="group relative flex h-72 w-64 shrink-0 snap-start flex-col justify-end overflow-hidden rounded-3xl shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0">
                <PlaceholderImage
                  alt={`Ministério ${ministry.name}`}
                  icon={ministry.icon}
                  label={ministry.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="relative z-10 p-6 text-white">
                <p className="font-heading text-xl font-bold">{ministry.name}</p>
                <p className="mt-1 text-sm text-white/80">{ministry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
