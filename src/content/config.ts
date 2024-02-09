import { defineCollection, z } from 'astro:content';

const magazine = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const learningTopics = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    trailerVideo: z.string(),
    thumbnail: z.string(),
    backgroundColor: z.string(),
    description: z.string()
  })
});

export const collections = { magazine, learningTopics };
