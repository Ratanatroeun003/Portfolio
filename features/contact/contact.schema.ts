import { z } from 'zod';
export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .max(50, { message: 'Name cannot exceed 50 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address.' }),
  subject: z
    .string()
    .trim()
    .min(3, { message: 'Subject must be at least 3 characters long.' })
    .max(100, { message: 'Subject cannot exceed 100 characters.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(1000, { message: 'Message cannot exceed 1000 characters.' }),
});
 export type ContactType = z.infer<typeof ContactFormSchema>