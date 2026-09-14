import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files whose name starts with "_" (such as _template.md) are ignored.
const pattern = '**/[^_]*.{md,mdx}';

const link = z.object({ label: z.string(), url: z.string() });

// A project follows: question → what was built or tested → key result → links.
const projects = defineCollection({
  loader: glob({ pattern, base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    question: z.string(),
    built: z.string(),
    /** Omit until there is a real, checkable result. */
    result: z.string().optional(),
    kind: z
      .array(z.enum(['paper', 'code', 'benchmark', 'demo', 'write-up', 'tool', 'talk']))
      .default([]),
    links: z.array(link).default([]),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern, base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    status: z.enum(['published', 'accepted', 'preprint']).default('published'),
    /** e.g. "co-first author" */
    note: z.string().optional(),
    links: z.array(link).default([]),
    selected: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern, base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, publications, notes };
