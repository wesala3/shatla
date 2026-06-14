import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://laehgpfbeifzrqkutvyz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZWhncGZiZWlmenJxa3V0dnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNTc1ODcsImV4cCI6MjA5NTkzMzU4N30.4DPpaUhkanP5-T-sDanjKfvjRKzQzi6y71zfFhOXgKo'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Store = {
  id: string
  name: string
  location: string
  phone: string
  area: string
  active: boolean
}

export type Plant = {
  id: string
  name_ar: string
  name_en: string
  emoji: string
  description: string
  tags: string[]
  price_min: number
  price_max: number
  currency: string
  care_water: string
  care_sun: string
  care_soil: string
  care_temp: string
}

export type PlantStoreLink = {
  id: string
  plant_id: string
  store_id: string
  price: number
  available: boolean
  note: string
}
