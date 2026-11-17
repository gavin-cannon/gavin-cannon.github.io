# Portfolio

My personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # production build into dist/, drafts hidden
npm run preview  # serve the production build
```

Requires Node 22.23 or newer.

## Where things live

```
.github/workflows/deploy.yml   build + deploy to Pages on push to main
astro.config.mjs               site URL (swap USERNAME, or your custom domain)
public/                        copied as-is: favicon, resume.pdf, CNAME later
src/
  site.ts                      name, pitch, links, experience, stack (edit this first)
  content.config.ts            schema for project write-ups
  content/projects/*.md        one file per project; `draft: true` hides it in production
  components/                  ProjectCard, Footer
  layouts/Base.astro           shared <head>, header, footer
  pages/
    index.astro                homepage
    projects/[slug].astro      one write-up page per project
    404.astro
  styles/global.css            color and font tokens
```

## Adding a project

Create `src/content/projects/my-project.md` with the frontmatter fields defined in `src/content.config.ts`, write the body in Markdown, and set `draft: false` when it's ready.

## Custom domain (later)

1. Buy the domain and add GitHub Pages DNS records at your registrar.
2. Add a `public/CNAME` file containing just the domain.
3. Set `site` in `astro.config.mjs` to `https://yourdomain.dev`.
4. Turn on "Enforce HTTPS" under Settings → Pages.
