// Base path for static hosting under a sub-directory (e.g. GitHub Pages project
// site at /<repo>/). Next prefixes its own assets (_next, Image, Link) with
// basePath automatically, but raw string asset URLs (audio, favicon) must be
// prefixed manually. Empty on root deploys (Vercel) so behavior is unchanged.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!BASE_PATH) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
