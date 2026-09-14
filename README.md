# xin-zhao-site

Source for Xin Zhao's personal research website: an index of public work, including papers, code, benchmarks, demos, and notes.

Built with [Astro](https://astro.build) and TypeScript as a fully static site. No CMS, database, or backend.

## Develop

Requires Node 22.12 or later.

```sh
npm install
npm run dev      # http://localhost:4321
npm run verify   # formatting check, type check, production build
npm run format   # apply Prettier
```

## Add content

| What                       | Where                                  |
| -------------------------- | -------------------------------------- |
| Identity, contact, CV link | `src/site.config.ts`                   |
| Project                    | `src/content/projects/<slug>.md`       |
| Publication                | `src/content/publications/<slug>.md`   |
| Note (Markdown or MDX)     | `src/content/notes/<slug>.md` / `.mdx` |

Each folder has a `_template` file to copy. Projects follow **question → what was built → key result → links**; leave `result` out until there is a real one. A project with a Markdown body also gets its own page under `/work/`.

- `draft: true` shows an entry in `npm run dev` only; drafts never reach a production build.
- Sections without published entries are hidden from the navigation.
- For a CV, add `public/cv.pdf` and set `cv: '/cv.pdf'` in `src/site.config.ts`.

While `publications` or `notes` are empty, the build logs "collection is empty" warnings. They are harmless and disappear once the first entry is added.

## Deploy

The build writes static files to `dist/`. Two optional environment variables control URLs:

- `SITE_URL`: public origin, such as `https://example.com`. Enables canonical URLs, the sitemap, and the sitemap line in `robots.txt`.
- `BASE_PATH`: only needed when the site is served under a sub-path, such as a GitHub Pages project site at `/xin-zhao-site`.

**Vercel:** import the repository, keep the Astro framework preset, and set `SITE_URL` in the project's environment variables.

**GitHub Pages:** build with the official [`withastro/action`](https://github.com/withastro/action) in a workflow and set `SITE_URL=https://<user>.github.io` and `BASE_PATH=/xin-zhao-site`. With a custom domain, set `SITE_URL` to that domain and leave `BASE_PATH` unset.
