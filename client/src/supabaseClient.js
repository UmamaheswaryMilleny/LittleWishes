import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rlgjixyamumkgzmjxfos.supabase.co";
const supabaseAnonKey = "sb_publishable_qRfe6pPwQyGdL9M8al8I-Q_lyQ2S4NZ";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey

);
