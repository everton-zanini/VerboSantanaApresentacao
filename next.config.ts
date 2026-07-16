import path from "path";
import type { NextConfig } from "next";

// TODO: troque pelo nome EXATO do repositório no GitHub (ex.: "apresentacao-igreja").
// Só é usado no build do GitHub Actions (GITHUB_ACTIONS=true); em dev/local não afeta nada.
const repoName = "VerboSantanaApresentacao";
const isGithubActionsBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGithubActionsBuild ? `/${repoName}` : "",
  assetPrefix: isGithubActionsBuild ? `/${repoName}/` : "",
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
