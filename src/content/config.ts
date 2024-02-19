import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string().max(50),
        date: z.date(),
        lang: z.string().max(2),
        description: z.string()
    })
})

export const collections = { posts }