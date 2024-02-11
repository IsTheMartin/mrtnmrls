import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string().max(50),
        date: z.date(),
        slug: z.string(),
        lang: z.string().max(2)
    })
})

export const collections = { posts }