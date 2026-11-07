// Stands in for next/cache outside Next: there is no Data Cache, so cached
// functions run directly. The arguments are kept so tests can check them.
export const cacheCalls: { keys: string[] | undefined; options: { revalidate?: number | false } | undefined }[] = [];

export function unstable_cache<T>(
  fn: T,
  keys?: string[],
  options?: { revalidate?: number | false },
): T {
  cacheCalls.push({ keys, options });
  return fn;
}
