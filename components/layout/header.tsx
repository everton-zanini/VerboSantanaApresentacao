"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className={cn(
            "flex items-center gap-2 font-heading text-lg font-bold tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
          <Image
            src={withBasePath("/Igreja-Verbo-da-Vida-e1691084772346.webp")}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover"
          />
          {siteConfig.shortName}
        </a>
        <Button
          size="lg"
          nativeButton={false}
          className={cn(
            "h-11 rounded-full px-5 text-sm font-semibold",
            !scrolled && "bg-white text-foreground hover:bg-white/90",
          )}
          render={<a href="#horarios" />}
        >
          Horários
        </Button>
      </div>
    </header>
  );
}
