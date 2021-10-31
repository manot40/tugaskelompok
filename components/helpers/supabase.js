import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://atoqncctmypjeqhobpsq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTU5MzQyNiwiZXhwIjoxOTUxMTY5NDI2fQ.6ggjxikJ1uV2uKLAVvjtyo5qQWOuanLM9rI7lBckHFo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
