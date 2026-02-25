import { z } from "zod";

export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  export const validatePassword = (password: string) => {
    return password.length >= 8;
  };

export const userSchema = z.object({
    firstName: z.string().min(3, "First Name is required"),
    lastName: z.string().min(3, "Last Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  
  export type User = z.infer<typeof userSchema>;

  export const userLoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  
  export type userLogin = z.infer<typeof userLoginSchema>;

  export const companyUserSchema = z.object({
    companyName: z.string().min(3, "Company Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  
  export type companyUser = z.infer<typeof companyUserSchema>;