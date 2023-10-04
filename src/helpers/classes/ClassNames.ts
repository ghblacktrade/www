type Mods = Record<string, boolean | string>;

export function classNames(
  gcls: string,
  mods: Mods,
  additional: string[] = [],
): string {
  return [
    gcls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(' ');
}
