const SUPABASE_URL = 'https://jzdqofyjikkyupsahipb.supabase.co' ;
const SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6ZHFvZnlqaWtreXVwc2FoaXBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyODExMTEsImV4cCI6MjAyOTg1NzExMX0.xeaWAXzcR6bMc0ijoGD2ZNXWDu_KHzkcaYywSHEEVuw';

export const _supabase = supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
