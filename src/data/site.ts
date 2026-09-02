export const navigation = [
  { id: 'program', label: 'Program', path: 'program/' },
  { id: 'sections', label: 'Oddíly', path: 'oddily/' },
  { id: 'history', label: 'Historie', path: 'historie/' },
  { id: 'venues', label: 'Sportoviště', path: 'sportoviste/' },
] as const;

export type NavigationId = (typeof navigation)[number]['id'];

export const site = {
  name: 'TJ Sokol Bernartice nad Odrou',
  shortName: 'TJ Sokol',
  locationName: 'Bernartice nad Odrou',
  description: 'Sport a setkávání pro všechny generace.',
  founded: 1919,
  logoPath: 'images/sokol-symbol.png',
  supportPath: 'podpora/',
  navigation,
} as const;
