<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
      <navbar class="absolute l-0"/>
      <div class="min-w-full min-h-screen  flex items-center justify-center">
        <div class="h-1/2 min-w-full flex items-center justify-center">
          <form @submit.prevent="submitForm" class="flex flex-col  w-3/12 justify-around h-96 bg-black items-center border rounded-xl" v-motion-slide-visible-top>
            <h1 class="text-3xl mt-2 text-white">Se Connecter</h1>
            <input type="email" v-model="email" class="h-8 my-2 text-black text-center">
            <input type="password" v-model="password" class="h-8 my-2 text-black text-center">
            <h2 ref="monRetour" class="text-center text-green-500"></h2>
            <input type="submit" class="bg-blue-400 rounded w-16">
            <button class="text-black bg-green-300  my-4 w-full items-center flex justify-center" @click="loginWithGitHub">
              Connect with GitHub
              <img src="../images/icons8-github-50.png" class="w-10 ml-5 h-10">
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { SupabaseClient } from '@supabase/supabase-js';
  import { createClient } from '@supabase/supabase-js'
  import { ref } from 'vue';
  const supabase = createClient('https://moaulmnomptksngvnboj.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYXVsbW5vbXB0a3NuZ3ZuYm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5MTc1NjUsImV4cCI6MjAyNTQ5MzU2NX0.dOeKSg3blO0MVbnCH6cvfhQ4UFJ1C5S88lQkd01S8F4')
  
  let monRetour = ref('')
  let email = '';
  let password = '';
  
  async function submitForm() {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        monRetour.value.style.color = 'red';
        monRetour.value.innerText = "Logins invalides.";
        throw error;
      } else {
        monRetour.value.innerText = "Bravo, vous êtes bien connecté.";
      }
      } catch (error) {
      console.error('erreur : ', error);
      }
  }
  async function loginWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }
  </script>
  