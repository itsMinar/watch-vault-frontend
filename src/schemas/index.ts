import { z } from 'zod';

export const RegisterUserSchema = z.object({
  name: z.string({ message: 'Name is required!' }),
  email: z
    .string({ message: 'Email is required!' })
    .email({ message: 'Must be a valid mail.' }),
  password: z
    .string({ message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' }),
});

export const LoginUserSchema = RegisterUserSchema.omit({ name: true });

export type RegistrationFormData = z.infer<typeof RegisterUserSchema>;
export type LoginFormData = z.infer<typeof LoginUserSchema>;
