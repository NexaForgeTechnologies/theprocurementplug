import { z } from "zod";

const imageSchema = z.union([
  z.string().url(),
  z.object({ url: z.string().url(), name: z.string().optional() }),
  z.null(),
  z.undefined(),
]);

export const hostRoundTableSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  name: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  website: z
    .string()
    .optional()
    .or(z.literal("")),
  package: z.string().min(1, "Package is required"),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  targetAudience: z.string().min(1, "Target audience is required"),
  date: z.preprocess((val) => {
    if (typeof val === "string" && val.trim() !== "") return new Date(val);
    if (val instanceof Date) return val;
    return val;
  }, z.date({ invalid_type_error: "Invalid date" })),
  bannerImage: imageSchema,
  logoImage: imageSchema,
  already_partner: z.coerce.number().default(0)
});


