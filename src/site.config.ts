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
  linkedin?: string;
  /** Path under public/. */
  photo?: string;
  /** Path under public/, e.g. '/cv.pdf'. The CV link appears once this is set. */
  cv?: string;
  /** Author strings to highlight in publication lists. */
  authorAliases: string[];
}

export const site: SiteConfig = {
  name: 'Xin Zhao',
  tagline: 'Getting more out of pretrained models',
  description:
    'Xin Zhao is a PhD candidate at the Max Planck Institute for Human Cognitive and Brain Sciences, working on test-time adaptation of pretrained models.',
  bio: [
    'I am interested in getting more out of pretrained models after training: test-time adaptation, inference-time computation and reasoning, and continual adaptation. My current work develops these ideas for frozen diffusion models, with simulation-based inference and inverse problems as testbeds.',
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
  linkedin: 'https://www.linkedin.com/in/xin-zhao-b3999a352',
  photo: '/photo.jpg',
  // cv: '/cv.pdf',
  authorAliases: ['Xin Zhao', 'X. Zhao'],
};
