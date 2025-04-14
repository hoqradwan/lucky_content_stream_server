import { z } from "zod";

export const contentValidationSchema = z.object({
    title: z.string().min(1, "Title is required"),
    genre: z.array(z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid Genre ID")), // Assuming ObjectId is a 24-character hex string
    release_date: z.date().optional().default(new Date()),
    description: z.string().optional(),
    rating: z.number().min(0).optional().default(0),
    category: z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid Category ID"), // Changed to a single ObjectId
    thumbnail: z.string().optional().default(""),
    content_url: z.string().optional().default(""),
    language: z.string().optional().default(""),
    status: z.enum(["Active", "Inactive"]).optional().default("Active"),
});
