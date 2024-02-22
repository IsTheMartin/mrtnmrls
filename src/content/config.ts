import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string().max(50),
        author: z.string().max(20),
        pubDate: z.date(),
        lang: z.string().max(2),
        description: z.string()
    })
})

export const collections = { posts }