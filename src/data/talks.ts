// Talks and posters, newest first. Public events only.

export interface Talk {
  title: string;
  kind: 'Talk' | 'Poster';
  event: string;
  place: string;
  /** YYYY-MM */
  date: string;
  link?: { label: string; url: string };
}

export const talks: Talk[] = [
  {
    title: 'Evidence Response: What a Probability Law Must Do When the Evidence Moves',
    kind: 'Poster',
    event: 'Machine Learning Summer School (MLSS) 2026',
    place: 'Tübingen, Germany',
    date: '2026-09',
  },
  {
    title:
      'Deep Learning Reconstruction of 8× Accelerated Ultra-High-Resolution Ex Vivo Chimpanzee Brain MRI',
    kind: 'Poster',
    event: 'OHBM Annual Meeting',
    place: 'Bordeaux, France',
    date: '2026-06',
  },
  {
    title: 'Physical Correctness of Data Consistency in State-Space-Model-Based MRI Reconstruction',
    kind: 'Talk',
    event: '1st SFB MR-DYNAMO Workshop (Mathematical Methods in MRI)',
    place: 'TU Graz, Austria',
    date: '2026-05',
  },
];
