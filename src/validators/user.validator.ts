import  z from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.coerce.number().int().min(18, "Must be at least 18"),
});
