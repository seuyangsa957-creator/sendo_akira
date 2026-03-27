import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const charts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/charts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    file: z.string(),
  }),
});

const companies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/companies' }),
  schema: z.object({
    title: z.string(),
    ticker: z.string(),
    exchange: z.string(),
    sector: z.string().optional(),
    date: z.coerce.date(),
    description: z.string().optional(),
    chartFile: z.string().optional(),
  }),
});

export const collections = { notes, charts, companies };
