import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const href = buildWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    "Olá! Vi o site da igreja e gostaria de saber mais.",
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
      <MessageCircle className="h-7 w-7" strokeWidth={2} fill="currentColor" />
    </a>
  );
}
