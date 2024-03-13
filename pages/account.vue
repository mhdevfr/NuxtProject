<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://ytjnhumbxslmzwucvdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0am5odW1ieHNsbXp3dWN2ZHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3Mzk5NDIsImV4cCI6MjAyNTMxNTk0Mn0.O08VhxUStahbtufYTHegH2zUKyOTQgv2cIPZ1wTzQHo')
const { data, error } = await supabase
  .from('countries')
  .select()
</script>

<template>
<h1>Hello</h1>
</template>