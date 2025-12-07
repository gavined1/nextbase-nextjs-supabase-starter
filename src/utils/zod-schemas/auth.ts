import { z } from 'zod';

// ============================================
// Base Schemas
// ============================================

export const emailSchema = z
  .string()
  .email('Please enter a valid email address');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters');

// ============================================
// Auth Schemas
// ============================================

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

export const signInWithMagicLinkSchema = z.object({
  email: emailSchema,
  next: z.string().optional(),
});

export const signInWithProviderSchema = z.object({
  provider: z.enum(['google', 'github', 'twitter']),
  next: z.string().optional(),
});

// ============================================
// Derived Types
// ============================================

export type SignInInput = z.infer<typeof signInSchema>;
export type SignInWithMagicLinkInput = z.infer<
  typeof signInWithMagicLinkSchema
>;
export type SignInWithProviderInput = z.infer<typeof signInWithProviderSchema>;
