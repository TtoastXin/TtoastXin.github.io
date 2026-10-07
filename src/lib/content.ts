import { getCollection } from 'astro:content';
import { site } from '../site.config';

// Drafts show up in `astro dev` (with a draft label) and are never part of a production build.
const include = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getProjects() {
  const entries = await getCollection('projects', include);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublications() {
  const entries = await getCollection('publications', include);
  // Newest first; within a year, papers where my name comes earlier first.
  const position = (authors: string[]) => {
    const i = authors.findIndex((author) => site.authorAliases.includes(author));
    return i === -1 ? authors.length : i;
  };
  return entries.sort(
    (a, b) => b.data.year - a.data.year || position(a.data.authors) - position(b.data.authors),
  );
}

export async function getNotes() {
  const entries = await getCollection('notes', include);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Entries with a Markdown body get their own page. */
export const hasBody = (entry: { body?: string }) => Boolean(entry.body?.trim());
