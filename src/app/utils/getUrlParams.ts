export function getUrlParams(url: string): string | null {
  if (!url) {
    return null;
  }
  const urlObject = new URL(url);

  return urlObject.search;
}
