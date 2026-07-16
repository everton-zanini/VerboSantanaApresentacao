import Image from "next/image";
import { ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  label?: string;
  icon?: LucideIcon;
  priority?: boolean;
  className?: string;
}

/**
 * Preenche o container pai (que deve ser `relative` com altura definida).
 * Sem `src`, mostra um placeholder elegante — troque por uma foto real
 * assim que disponível, passando a prop `src`.
 */
export function PlaceholderImage({
  src,
  alt,
  label,
  icon: Icon = ImageIcon,
  priority = false,
  className,
}: PlaceholderImageProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-foreground via-foreground/90 to-primary text-background/70",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <Icon className="h-10 w-10 opacity-70" strokeWidth={1.5} />
      {label && (
        <span className="px-4 text-center text-sm font-medium opacity-70">{label}</span>
      )}
    </div>
  );
}
