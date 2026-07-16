import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { visionItems } from "@/lib/site-config";

export function Vision() {
  return (
    <section className="bg-mist py-20 sm:py-28 dark:bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Nossa visão" title="O que nos move todos os dias" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visionItems.map((visionItem, index) => (
            <Reveal key={visionItem.title} delay={index * 0.1}>
              <Card className="h-full rounded-2xl border-0 py-8 text-center shadow-sm ring-1 ring-foreground/5 transition-shadow hover:shadow-lg">
                <CardHeader className="items-center px-6">
                  <span className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <visionItem.icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <CardTitle className="text-lg">{visionItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {visionItem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
