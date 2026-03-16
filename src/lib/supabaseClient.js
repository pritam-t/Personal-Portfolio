import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vmsmvkdcmknuzxmzkqag.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtc212a2RjbWtudXp4bXprcWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2ODk5OTcsImV4cCI6MjA4OTI2NTk5N30.i2hXxoeGLLRg5OV3O7ZQuDVfYICbuK9B7eqd-PVdv7I"

export const supabase = createClient(supabaseUrl, supabaseKey)