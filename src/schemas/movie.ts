import { z } from 'zod';

export const MovieSchema = z.object({
  title: z.string({ message: 'Title is required' }),
  poster: z
    .string()
    .url('Invalid URL for poster')
    .optional()
    .default('https://placehold.co/200x300'),
  language: z.string({ message: 'Language is required' }),
  releaseYear: z.coerce
    .number({ message: 'Release year is required' })
    .min(1888, 'Release year must be 1888 or later')
    .max(new Date().getFullYear(), "Release year can't be in the future"),
});

export type MovieFormData = z.infer<typeof MovieSchema>;
