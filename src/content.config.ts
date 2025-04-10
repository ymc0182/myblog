import { z, defineCollection} from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        author: z.string().optional(),
        date: z.coerce.date(),
        updateDate: z.coerce.date().optional(),
        draft: z.boolean().default(false),
        img: z.array(z.object({
            url: z.string(),
            alt: z.string(),
        })).optional(),
        mood: z.number().optional(),
    }),
});

const friendCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{yaml,yml,json}', base: "./src/content/friend" }),
    schema: z.object({
        name: z.string(),
        desc: z.string(),
        avatar: z.string().url(),
        social: z.object({
            blog: z.string().optional(),
            twitter: z.string().optional(),
            github: z.string().optional()
        })
    })
});

export const collections = {
    blog: blogCollection,
    friend: friendCollection,
};