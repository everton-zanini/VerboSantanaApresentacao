import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-bold">{siteConfig.shortName}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              &ldquo;{siteConfig.verse.text}&rdquo;
              <br />
              <span className="text-background/50">{siteConfig.verse.reference}</span>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-background/50">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-background/50">
              Redes sociais
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
