export default function Loading() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center gap-4 bg-background">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-muted border-t-primary" />
      <p className="font-heading text-sm font-medium tracking-wide text-muted-foreground">
        Carregando...
      </p>
    </div>
  );
}
