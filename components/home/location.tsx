import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

export function Location() {
  const query = encodeURIComponent(siteConfig.address.mapsQuery);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Localização" title="Venha nos visitar pessoalmente" />

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl shadow-lg ring-1 ring-foreground/10">
            <div className="aspect-video w-full">
              <iframe
                src={embedSrc}
                title="Mapa de localização da igreja"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>

            <div className="flex flex-col items-center gap-4 bg-mist px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left dark:bg-white/5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground sm:text-base">
                  {siteConfig.address.full}
                </span>
              </div>
              <Button
                size="lg"
                nativeButton={false}
                className="h-12 w-full rounded-full px-6 text-sm font-semibold sm:w-auto"
                render={<a href={mapsHref} target="_blank" rel="noopener noreferrer" />}
              >
                <Navigation className="h-4 w-4" />
                Abrir no Google Maps
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
