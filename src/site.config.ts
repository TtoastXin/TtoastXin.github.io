// Identity, contact details and links used across the site.
// Everything here is public. Keep unpublished research and private plans out of this repository.

interface SiteConfig {
  name: string;
  /** Short identity used in the home page <title>. */
  tagline: string;
  /** Default meta description. */
  description: string;
  /** Short introduction on the home page, one string per paragraph. */
  bio: string[];
  role: string;
  affiliation: { name: string; department: string; url: string; city: string };
  email: string;
  github?: string;
  scholar?: string;
  /** Path under public/. */
  photo?: string;
  /** Path under public/, e.g. '/cv.pdf'. The CV link appears once this is set. */
  cv?: string;
  /** Author strings to highlight in publication lists. */
  authorAliases: string[];
}

export const site: SiteConfig = {
  name: 'Xin Zhao',
  tagline: 'Generative models for inverse problems and probabilistic inference',
  description:
    'Xin Zhao is a PhD candidate at the Max Planck Institute for Human Cognitive and Brain Sciences, working on generative models for inverse problems and probabilistic inference.',
  bio: [
    'I work on generative models for inverse problems and probabilistic inference: how learned priors can be combined with physical measurement models and scientific simulators to give accurate and reliable answers.',
    'My PhD project is on deep learning reconstruction for fast, ultra-high-resolution MRI. Before that, I worked on medical image analysis, including cardiac MRI segmentation and CT-based assessment of pulmonary hypertension.',
  ],
  role: 'PhD candidate',
  affiliation: {
    name: 'Max Planck Institute for Human Cognitive and Brain Sciences',
    department: 'Department of Neurophysics',
    url: 'https://www.cbs.mpg.de',
    city: 'Leipzig, Germany',
  },
  email: 'zhaox@cbs.mpg.de',
  github: 'https://github.com/TtoastXin',
  scholar: 'https://scholar.google.com/citations?user=58Qfq38AAAAJ',
  photo: '/photo.jpg',
  // cv: '/cv.pdf',
  authorAliases: ['Xin Zhao', 'X. Zhao'],
};
