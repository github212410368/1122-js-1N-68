const SUPABESE_URL = "https://onwhffkfeohylrqmvlpk.supabase.co";

const SUPABESE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ud2hmZmtmZW9oeWxycW12bHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNDEyMDEsImV4cCI6MjAyOTYxNzIwMX0.B00z1rIuG9WPpQo6yakc4H3fKTip2ms8RdM9f_F9v5s";

export const _supabase = supabase.createClient(SUPABESE_URL, SUPABESE_ANON_KEY);
