const SUPABESE_URL = 'https://fgmlzknvhbqriwfhvfuf.supabase.co';

const SUPABESE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbWx6a252aGJxcml3Zmh2ZnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNDEyNjAsImV4cCI6MjAyOTYxNzI2MH0.N5QJVVL48JE8nqjKdaNxCYj5kB5mFGvlaz9r9h6N5RU';

export const _supabase = supabase.createClient(SUPABESE_URL, SUPABESE_ANON_KEY);
