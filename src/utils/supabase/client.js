import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY) {
    throw new Error("Supabase environment variables are not defined.");
  }

  return createBrowserClient(process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY);
};
