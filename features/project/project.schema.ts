import { z } from 'zod';

export const projectSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(100, 'Title cannot exceed 100 characters'),

  description: z
    .string()
    .trim()
    .min(1, 'Description is required'),

  imageUrl: z
    .string()
    .trim()
    .url('Invalid image URL format')
    .or(z.literal(''))
    .optional(),

  githubUrl: z
    .string()
    .trim()
    .url('Invalid GitHub URL format')
    .or(z.literal(''))
    .optional(),

  demoUrl: z
    .string()
    .trim()
    .url('Invalid live demo URL format')
    .or(z.literal(''))
    .optional(),

  technologies: z
    .string()
    .trim()
    .min(1, 'Technologies are required (e.g. Next.js, React, Prisma)'),

  featured: z
    .boolean()
    .default(false),
});

export type ProjectInput = z.infer<typeof projectSchema>;