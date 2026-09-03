export const navigation = [
  { id: 'program', label: 'Program', path: 'program/' },
  { id: 'sections', label: 'Oddíly', path: 'oddily/' },
  { id: 'history', label: 'Historie', path: 'historie/' },
  { id: 'venues', label: 'Sportoviště', path: 'sportoviste/' },
] as const;

export type NavigationId = (typeof navigation)[number]['id'];

export const site = {
  name: 'TJ Sokol Bernartice nad Odrou',
  legalName: 'TJ Sokol Bernartice nad Odrou,spolek',
  shortName: 'TJ Sokol',
  locationName: 'Bernartice nad Odrou',
  description: 'Sport a setkávání pro všechny generace.',
  founded: 1919,
  registrationNumber: '43961096',
  registeredOffice: {
    street: 'Bernartice nad Odrou 80',
    city: '741 01 Bernartice nad Odrou',
  },
  chair: {
    name: 'Ing. Dušan Glogar',
    phone: '+420 604 610 507',
    phoneHref: 'tel:+420604610507',
  },
  logoPath: 'images/sokol-symbol.png',
  supportPath: 'podpora/',
  navigation,
} as const;
