<template>
  <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
    <navbar class="absolute l-0"/>
    <div class="min-w-full min-h-screen  flex items-center justify-center ">
      <div class="h-1/2 min-w-full flex items-center justify-center">
        <form @submit.prevent="submitForm" class="flex flex-col  w-3/12 justify-around h-96 bg-black items-center border rounded-xl">
          <h1 class="text-3xl mt-2 text-white">S'enregistrer</h1>
          <input type="email" v-model="email" class="h-8 my-4 text-black text-center">
          <input type="password" v-model="password" class="h-8 my-4 text-black text-center">
          <input type="password" v-model="passwordConf" class="h-8 my-4 text-black text-center">
          <input type="submit" value="Inscription" class="bg-blue-400 h-10 w-full hover:bg-green-600 my-8 transition-colors">
          <h2 v-if="password !== passwordConf" class="text-red-600">Veuillez confirmer correctement le mot de passe.</h2>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://moaulmnomptksngvnboj.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYXVsbW5vbXB0a3NuZ3ZuYm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5MTc1NjUsImV4cCI6MjAyNTQ5MzU2NX0.dOeKSg3blO0MVbnCH6cvfhQ4UFJ1C5S88lQkd01S8F4')

let email = '';
let password = '';
let passwordConf = '';

async function submitForm() {
  if(password === passwordConf){
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    console.log('User:', data);
    console.log('Session:', error);
    } catch (error) {
    console.error('Error signing in:', error);
    }
  } else {

  }
}

async function loginWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}
</script>
