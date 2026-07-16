import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { socialLinks } from "@/lib/site-config";

export function SocialMedia() {
  return (
    <section className="bg-mist py-20 sm:py-28 dark:bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Fique por dentro" title="Nos siga nas redes sociais" />

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background text-foreground shadow-sm ring-1 ring-foreground/10 transition-all group-hover:-translate-y-1 group-hover:text-primary group-hover:shadow-md">
                  <social.icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
