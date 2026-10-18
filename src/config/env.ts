import "dotenv/config";
import * as z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(5000),
    NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
})


const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("Invalid environment variables:",  z.treeifyError(result.error));
  process.exit(1);
}

export const env = result.data;