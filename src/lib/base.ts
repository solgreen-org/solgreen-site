const raw = import.meta.env.BASE_URL;
const BASE = raw.endsWith("/") ? raw : raw + "/";

export function url(path: string): string {
  if (path.startsWith("http")) return path;
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
