// Short dated updates for the home page, newest first. Public facts only.

export interface NewsItem {
  /** YYYY-MM */
  date: string;
  text: string;
  link?: { label: string; url: string };
}

export const news: NewsItem[] = [
  {
    date: '2026-10',
    text: 'Spectra, on test-time prior adaptation for simulation-based inference, is on arXiv.',
    link: { label: 'arXiv', url: 'https://arxiv.org/abs/2610.08021' },
  },
  {
    date: '2026-09',
    text: 'Presented a poster at the Machine Learning Summer School (MLSS) 2026, Tübingen.',
  },
  {
    date: '2026-06',
    text: 'Presented a poster on deep learning MRI reconstruction at OHBM 2026, Bordeaux.',
  },
  { date: '2026-05', text: 'Gave a talk at the 1st SFB MR-DYNAMO Workshop, TU Graz.' },
];
