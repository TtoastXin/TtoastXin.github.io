// Identity, contact details and links used across the site.
// Everything here is public. Keep unpublished research and private plans out of this repository.

interface SiteConfig {
  name: string;
  /** Short identity used in the home page <title>. */
  tagline: string;
  /** Default meta description. */
  description: string;
  /** Current, evidence-backed positioning. */
  headline: string;
  /** Broader research interest, stated as interest rather than expertise. */
  interest: string;
  role: string;
  affiliation: { name: string; department: string; url: string; city: string };
  email: string;
  github?: string;
  scholar?: string;
  /** Path under public/, e.g. '/cv.pdf'. The CV link appears once this is set. */
  cv?: string;
  /** Author strings to highlight in publication lists. */
  authorAliases: string[];
}

export const site: SiteConfig = {
  name: 'Xin Zhao',
  tagline: 'Reliable and adaptive probabilistic inference',
  description:
    'Xin Zhao is a PhD candidate at the Max Planck Institute for Human Cognitive and Brain Sciences, working on reliable and adaptive probabilistic inference with pretrained generative models.',
  headline:
    'I work on reliable and adaptive probabilistic inference, with a focus on how pretrained generative models can be reused when priors or observations change.',
  interest:
    'More broadly, I am interested in how learning systems infer hidden mechanisms, detect when their models fail, and revise the way they represent the world.',
  role: 'PhD candidate',
  affiliation: {
    name: 'Max Planck Institute for Human Cognitive and Brain Sciences',
    department: 'Department of Neurophysics',
    url: 'https://www.cbs.mpg.de',
    city: 'Leipzig, Germany',
  },
  email: 'zhaox@cbs.mpg.de',
  github: 'https://github.com/TtoastXin',
  // scholar: 'https://scholar.google.com/citations?user=...',
  // cv: '/cv.pdf',
  authorAliases: ['Xin Zhao', 'X. Zhao'],
};
