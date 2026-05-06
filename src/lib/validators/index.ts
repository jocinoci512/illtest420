import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().default(""),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const applicationSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  country: z.string().min(2, "Country is required"),
  occupation: z.string().min(2, "Occupation is required"),
  preferred_tier: z.string().min(1, "Please select a membership tier"),
  message: z.string().min(20, "Please provide a more detailed message"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});
