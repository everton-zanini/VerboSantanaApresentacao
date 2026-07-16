import { HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function PrayerRequest() {
  const href = buildWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    "Olá! Gostaria de compartilhar um pedido de oração.",
  );

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="items-center rounded-3xl border-0 px-6 py-12 text-center shadow-lg ring-1 ring-foreground/5 sm:px-12">
            <CardContent className="flex flex-col items-center px-0">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <HandHeart className="h-8 w-8" strokeWidth={1.75} />
              </span>
              <h2 className="mt-6 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Pedidos de oração
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                Estamos aqui para orar com você. Compartilhe seu pedido e nossa equipe de
                intercessão vai levá-lo diante de Deus.
              </p>
              <Button
                size="lg"
                nativeButton={false}
                className="mt-8 h-12 rounded-full px-6 text-sm font-semibold"
                render={<a href={href} target="_blank" rel="noopener noreferrer" />}
              >
                Enviar pedido
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
