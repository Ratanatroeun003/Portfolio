// lib/validations/auth.ts
import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" }) 
    .email({ message: "Invalid email address format" }),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }) 
    .max(10, { message: "Password must not exceed 10 characters" }), 
});
export type signinInput = z.infer<typeof signinSchema>;