import type { ImageMetadata } from 'astro';

import hallExterior from '../assets/venues/sports-hall-exterior.jpg';
import hallInterior from '../assets/venues/sports-hall-interior.jpg';
import clayCourt from '../assets/venues/clay-court.jpg';
import footballField from '../assets/venues/football-field.jpg';

import chronicle1919 from '../assets/history/chronicle-1919-1949.png';
import chronicle1949 from '../assets/history/chronicle-1949-1969.png';
import chronicle1969 from '../assets/history/chronicle-1969-1989.png';
import chronicle1989 from '../assets/history/chronicle-1989-2009.png';
import photo1935 from '../assets/history/photo-1935.png';
import photo1936 from '../assets/history/photo-1936.png';
import photo1937 from '../assets/history/photo-1937.png';
import photoChildren1931 from '../assets/history/photo-children-1931.png';
import photoArchive12 from '../assets/history/photo-archive-12.png';
import photoPavilion from '../assets/history/photo-pavilion.png';
import photoExercise from '../assets/history/photo-exercise.png';
import photoArchive23 from '../assets/history/photo-archive-23.png';

export type ClubSection = {
  slug: string;
  number: string;
  name: string;
  shortName?: string;
  summary: string;
  audience: string;
  activity: string;
  venue: string;
  externalUrl?: string;
};

export const clubSections: ClubSection[] = [
  {
    slug: 'fotbal',
    number: '01',
    name: 'Fotbal',
    shortName: 'Kopaná',
    summary: 'Oddíl kopané je součástí klubu od roku 1952.',
    audience: 'Aktuální věkové skupiny zatím nejsou potvrzené.',
    activity: 'Původní web aktuální termíny neuvádí.',
    venue: 'Aktuální místo potvrďte s TJ.',
  },
  {
    slug: 'volejbal',
    number: '02',
    name: 'Volejbal',
    summary: 'Volejbal patří mezi oddíly uvedené na původním klubovém webu.',
    audience: 'Aktuální skupiny zatím nejsou potvrzené.',
    activity: 'Původní web aktuální termíny neuvádí.',
    venue: 'Aktuální místo potvrďte s TJ.',
  },
  {
    slug: 'florbal',
    number: '03',
    name: 'Florbal',
    summary: '„Bernatští Bobři“ na původním webu sdružovali děti a mládež školního věku.',
    audience: 'Aktuální věkové skupiny zatím nejsou potvrzené.',
    activity: 'Původní web aktuální termíny neuvádí.',
    venue: 'Aktuální místo potvrďte s TJ.',
  },
  {
    slug: 'nohejbal',
    number: '04',
    name: 'Nohejbal',
    summary: 'Původní web TJ odkazuje na samostatný web oddílu.',
    audience: 'Aktuální skupiny zatím nejsou potvrzené.',
    activity: 'Původní web TJ aktuální termíny neuvádí.',
    venue: 'Aktuální místo potvrďte s oddílem.',
    externalUrl: 'https://bernartice-nohejbal.webnode.cz/',
  },
  {
    slug: 'turistika',
    number: '05',
    name: 'Turistika',
    summary: 'Turistika patří mezi oddíly uvedené na původním klubovém webu.',
    audience: 'Aktuální skupina zatím není potvrzená.',
    activity: 'Původní web aktuální termíny neuvádí.',
    venue: 'Aktuální místo potvrďte s TJ.',
  },
  {
    slug: 'aspv',
    number: '06',
    name: 'Sport pro všechny',
    shortName: 'ASPV',
    summary: 'Na původním webu zastřešoval cvičení dětí, power jógu a volejbal dospělých.',
    audience: 'Aktuální skupiny a jejich věk zatím nejsou potvrzené.',
    activity: 'Původní web aktuální termíny neuvádí.',
    venue: 'Aktuální místo potvrďte s TJ.',
  },
];

export type Venue = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  coordinates: string;
  mapUrl: string;
  image: ImageMetadata;
  imageAlt: string;
  secondaryImage?: ImageMetadata;
  secondaryImageAlt?: string;
};

export const venues: Venue[] = [
  {
    slug: 'telocvicna',
    name: 'Tělocvična a asfaltové hřiště',
    summary: 'Tělocvična a navazující venkovní asfaltová plocha.',
    detail: 'Původní klubový web u tohoto sportoviště uvádí souřadnice, ne však spolehlivé historické roky ani aktuální rozvrh.',
    coordinates: `49°36'31.292\"N, 17°56'50.962\"E`,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=49.608692,17.947489',
    image: hallExterior,
    imageAlt: 'Budova tělocvičny TJ Sokol Bernartice nad Odrou',
    secondaryImage: hallInterior,
    secondaryImageAlt: 'Interiér tělocvičny s hrací plochou',
  },
  {
    slug: 'antukove-hriste',
    name: 'Antukové hřiště',
    summary: 'Antukové hřiště uvedené mezi sportovišti TJ.',
    detail: 'Původní klubový web u hřiště uvádí souřadnice; aktuální způsob využití zatím není potvrzený.',
    coordinates: `49°36'30.044\"N, 17°56'47.274\"E`,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=49.608346,17.946465',
    image: clayCourt,
    imageAlt: 'Antukové hřiště TJ Sokol Bernartice nad Odrou',
  },
  {
    slug: 'fotbalove-hriste',
    name: 'Fotbalové hřiště u Odry',
    summary: 'Fotbalové hřiště umístěné u řeky Odry.',
    detail: 'Původní klubový web u hřiště uvádí souřadnice; aktuální provozní informace zatím nejsou potvrzené.',
    coordinates: `49°37'13.402\"N, 17°56'20.825\"E`,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=49.620389,17.939118',
    image: footballField,
    imageAlt: 'Fotbalové hřiště TJ Sokol v zeleni u řeky Odry',
  },
];

export const historyPeriods = [
  {
    years: '1919–1949',
    title: 'Začátky tělovýchovné jednoty',
    image: chronicle1919,
    imageAlt: 'Obrazový přehled historie TJ Sokol v letech 1919 až 1949',
  },
  {
    years: '1949–1969',
    title: 'Poválečná desetiletí',
    image: chronicle1949,
    imageAlt: 'Obrazový přehled historie TJ Sokol v letech 1949 až 1969',
  },
  {
    years: '1969–1989',
    title: 'Dvacet let klubového života',
    image: chronicle1969,
    imageAlt: 'Obrazový přehled historie TJ Sokol v letech 1969 až 1989',
  },
  {
    years: '1989–2009',
    title: 'Novodobá etapa Sokola',
    image: chronicle1989,
    imageAlt: 'Obrazový přehled historie TJ Sokol v letech 1989 až 2009',
  },
];

export const historyMilestones = [
  {
    year: '2. 11. 1919',
    title: 'Ustavující valná hromada',
    text: 'Začíná organizovaná činnost tělovýchovné jednoty v Bernarticích nad Odrou.',
  },
  {
    year: '1930–1933',
    title: 'Koupaliště a pavilon u Odry',
    text: 'V roce 1930 bylo zřízeno přírodní koupaliště; roku 1933 bylo otevřeno koupaliště a dřevěný pavilon u Odry.',
  },
  {
    year: '1938–1945',
    title: 'Přerušení a obnova',
    text: 'V roce 1938 byl spolek zrušen a jeho majetek převeden německému vedení obce. Roku 1945 byla činnost obnovena a majetek vrácen.',
  },
  {
    year: '1948–1952',
    title: 'Spojení jednot a vznik kopané',
    text: 'Po sloučení Sokola a Orla byl v roce 1952 založen oddíl kopané.',
  },
  {
    year: '1972–1974',
    title: 'Výstavba tělocvičny',
    text: 'V roce 1972 začala výstavba tělocvičny; v lednu 1974 byla uzavřena smlouva mezi školou a TJ o jejím užívání.',
  },
  {
    year: '1993–1994',
    title: 'Obnova areálu u Odry',
    text: 'V roce 1993 byl navýšen terén fotbalového hřiště; roku 1994 prošel sportovní areál rozsáhlou rekonstrukcí.',
  },
  {
    year: 'Od 1996',
    title: 'Volejbal v krajském přeboru',
    text: 'Ženské volejbalové družstvo postoupilo do krajského přeboru.',
  },
  {
    year: '2003',
    title: 'Nohejbal a florbal',
    text: 'Klub rozšířil svou činnost o oddíly nohejbalu a florbalu.',
  },
  {
    year: '2007',
    title: 'Péče o antukové hřiště',
    text: 'Tělovýchovná jednota převzala péči o antukové hřiště.',
  },
];

export const historyPhotos = [
  { image: photo1935, label: 'Rok 1935', alt: 'Historická klubová fotografie z roku 1935' },
  { image: photo1936, label: 'Rok 1936', alt: 'Historická klubová fotografie z roku 1936' },
  { image: photo1937, label: 'Rok 1937', alt: 'Historická klubová fotografie z roku 1937' },
  {
    image: photoChildren1931,
    label: 'Děti na koupališti, 1931–1932',
    alt: 'Děti na koupališti v letech 1931 až 1932',
  },
  { image: photoArchive12, label: 'Dřevěný most přes vodní plochu', alt: 'Dřevěný most přes vodní plochu' },
  { image: photoPavilion, label: 'Dřevěný pavilon', alt: 'Historický snímek dřevěného pavilonu v areálu' },
  { image: photoExercise, label: 'Společné cvičení', alt: 'Skupinové cvičení na venkovním hřišti' },
  { image: photoArchive23, label: 'Volejbalové utkání', alt: 'Historické volejbalové utkání na venkovním hřišti' },
];

export const supportYears = [
  {
    year: 2025,
    published: '17. 3. 2026 13:17',
  },
  {
    year: 2024,
    published: '7. 11. 2024 07:28',
  },
  {
    year: 2023,
    published: '7. 2. 2024 07:31',
  },
  {
    year: 2022,
    published: '12. 12. 2022 12:48',
  },
  {
    year: 2021,
    published: '14. 12. 2021 15:24',
  },
];
