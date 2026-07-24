const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prepende o basePath (ex.: "/VerboSantanaApresentacao" no GitHub Pages) a um
 * caminho local começando com "/". Necessário porque next/image com
 * `images.unoptimized: true` não faz isso automaticamente. URLs externas
 * (http/https) passam intactas.
 */
export function withBasePath(src: string) {
  if (!basePath || src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return `${basePath}${src}`;
}
