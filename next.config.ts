import path from "path";
import type { NextConfig } from "next";

// TODO: troque pelo nome EXATO do repositório no GitHub (ex.: "apresentacao-igreja").
// Só é usado no build do GitHub Actions (GITHUB_ACTIONS=true); em dev/local não afeta nada.
const repoName = "VerboSantanaApresentacao";
const isGithubActionsBuild = process.env.GITHUB_ACTIONS === "true";

const basePath = isGithubActionsBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubActionsBuild ? `/${repoName}/` : "",
  outputFileTracingRoot: path.join(__dirname),
  // next/image não aplica o basePath a src absolutos quando unoptimized (necessário
  // para `output: export`), então expomos o valor para prependar manualmente.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
