import { getCollection } from 'astro:content';

// Drafts show up in `astro dev` (with a draft label) and are never part of a production build.
const include = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getProjects() {
  const entries = await getCollection('projects', include);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublications() {
  const entries = await getCollection('publications', include);
  return entries.sort((a, b) => b.data.year - a.data.year);
}

export async function getNotes() {
  const entries = await getCollection('notes', include);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Entries with a Markdown body get their own page. */
export const hasBody = (entry: { body?: string }) => Boolean(entry.body?.trim());
