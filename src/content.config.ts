import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { iconKeys } from './data/icons';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['app', 'web', 'web3', 'game', 'level']),
    icon: z.enum(iconKeys),
    order: z.number(),
    /** Текст подсказки при наведении на пиктограмму. */
    summary: z.string(),
    /** Первое предложение описания (чёрным) и продолжение (серым). */
    lead: z.string(),
    leadMuted: z.string().optional(),
    role: z.string(),
    stack: z.array(z.string()),
    status: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    readTime: z.number(),
    topic: z.enum(['product', 'dev', 'web3', 'gamedesign']),
    lead: z.string(),
  }),
});

export const collections = { projects, posts };
