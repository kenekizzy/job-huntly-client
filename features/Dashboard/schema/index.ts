import { z } from "zod";


export const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .regex(/^\+?[0-9\s-]+$/, "Invalid phone number"),
  bio: z.string().optional(),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  location: z.string().optional(),
  profilePicture: z.string().optional(),
});

export const resetPasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(1, "New password is required"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;