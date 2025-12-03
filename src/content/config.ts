import { defineCollection, z } from 'astro:content';

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().email(),
    image: z.string().optional(),
    order: z.number(),
    bio: z.string().optional(),
    website: z.string().url().optional(),
    twitter: z.string().optional(),
    github: z.string().optional(),
    scholar: z.string().url().optional(),
    locations: z.array(z.enum(['at', 'uk', 'de'])), // Can have multiple locations
    researchInterests: z.array(z.string()).optional(),
    researchAreas: z.array(z.string()).optional(), // Slugs of research areas
    education: z.array(z.object({
      degree: z.string(),
      institution: z.string(),
      year: z.union([z.string(), z.number()])
    })).optional()
  })
});

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    article: z.string().optional(),
    doi: z.string().optional(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    dataset: z.string().url().optional(),
    demo: z.string().url().optional(),
    date: z.date()
  })
});

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    image: z.string().optional()
  })
});

const softwareCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    github: z.string().url().optional(),
    documentation: z.string().url().optional(),
    demo: z.string().url().optional(),
    pypi: z.string().url().optional(),
    npm: z.string().url().optional(),
    language: z.string().optional(),
    stars: z.number().optional(),
    order: z.number()
  })
});

const opportunitiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['phd', 'postdoc', 'engineer', 'intern', 'visiting']),
    location: z.enum(['at', 'uk', 'de']),
    deadline: z.date().optional(),
    open: z.boolean(),
    order: z.number()
  })
});

const thesesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    title: z.string(),
    year: z.number(),
    month: z.string(),
    university: z.string(),
    supervisor: z.string(),
    link: z.string().url().optional(),
    order: z.number()
  })
});

export const collections = {
  'team': teamCollection,
  'publications': publicationsCollection,
  'research': researchCollection,
  'software': softwareCollection,
  'opportunities': opportunitiesCollection,
  'theses': thesesCollection
};