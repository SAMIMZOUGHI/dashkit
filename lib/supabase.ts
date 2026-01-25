// =============================================================================
// FICHIER : lib/supabase.ts
// RÔLE : Configuration du client Supabase
// =============================================================================

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

// Client pour le navigateur (avec anon key)
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Client pour le serveur (avec service role key - accès complet)
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);