import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function FirstVisit() {
  const href = buildWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    "Olá! Esta é minha primeira vez na igreja e gostaria de ser recebido(a).",
  );

  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <HeartHandshake className="mx-auto h-10 w-10 text-brand-gold" strokeWidth={1.75} />
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            É sua primeira vez aqui?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Ficaremos muito felizes em te receber pessoalmente. Fale com a gente e alguém
            da nossa equipe vai te esperar na entrada com todo carinho.
          </p>
          <Button
            size="lg"
            nativeButton={false}
            className="mt-8 h-14 rounded-full bg-white px-8 text-base font-semibold text-primary hover:bg-white/90"
            render={<a href={href} target="_blank" rel="noopener noreferrer" />}
          >
            Quero ser recebido
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
