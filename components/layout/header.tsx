"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
            "font-heading text-lg font-bold tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
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
