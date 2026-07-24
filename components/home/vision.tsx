import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { mission, vision, valueItems } from "@/lib/site-config";

export function Vision() {
  return (
    <section className="bg-mist py-20 sm:py-28 dark:bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Missão, visão e valores" title="O que nos move todos os dias" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <Card className="h-full rounded-2xl border-0 py-8 shadow-sm ring-1 ring-foreground/5">
              <CardHeader className="px-6 text-center">
                <CardTitle className="text-sm font-semibold tracking-wide text-primary uppercase">
                  Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed font-medium text-foreground">
                  &ldquo;{mission.statement}&rdquo;
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="h-full rounded-2xl border-0 py-8 shadow-sm ring-1 ring-foreground/5">
              <CardHeader className="px-6 text-center">
                <CardTitle className="text-sm font-semibold tracking-wide text-primary uppercase">
                  Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed font-medium text-foreground">
                  &ldquo;{vision.statement}&rdquo;
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <h3 className="mt-16 text-center text-sm font-semibold tracking-wide text-primary uppercase">
          Valores
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((valueItem, index) => (
            <Reveal key={valueItem.title} delay={index * 0.1}>
              <Card className="h-full rounded-2xl border-0 py-8 text-center shadow-sm ring-1 ring-foreground/5 transition-shadow hover:shadow-lg">
                <CardHeader className="items-center px-6">
                  <span className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <valueItem.icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-semibold text-primary/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <CardTitle className="text-lg">{valueItem.title}</CardTitle>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
