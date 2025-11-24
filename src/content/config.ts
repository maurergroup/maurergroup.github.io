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
    order: z.number()
  })
});

const softwareCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
    location: z.enum(['usa', 'uk', 'germany', 'remote', 'any']),
    deadline: z.date().optional(),
    open: z.boolean(),
    order: z.number()
  })
});

export const collections = {
  'team': teamCollection,
  'publications': publicationsCollection,
  'research': researchCollection,
  'software': softwareCollection,
  'opportunities': opportunitiesCollection
};