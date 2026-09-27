import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const clave = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !clave) {
  throw new Error("Faltan las variables de entorno de Supabase.");
}

export const supabase = createClient(url, clave, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
    },
});
