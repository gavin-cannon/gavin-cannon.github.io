import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each Markdown file in src/content/projects/ becomes a project card on the
// homepage and its own "spec" page at /projects/<filename>/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one or two sentences for the card
    year: z.number(),
    stack: z.array(z.string()),
    status: z.enum(['shipped', 'live', 'in progress', 'case study']),
    order: z.number().default(99), // lower shows first
    live: z.string().url().optional(),
    code: z.string().url().optional(),
    stat: z.string().optional(), // one headline number, e.g. "0 rows lost"
    draft: z.boolean().default(false), // drafts show in `npm run dev` but never on the live site
  }),
});

export const collections = { projects };
