<template>
  <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
    <navbar class="absolute inset-10 l-0"/>
    <div class="min-w-full min-h-screen  flex items-center justify-center" >
      <div class="h-1/2 min-w-full flex items-center justify-center">
        <form @submit.prevent="submitForm" class="flex flex-col  w-3/12 justify-around h-96 bg-black items-center border rounded-xl" v-motion-slide-visible-right >
          <h1 class="text-3xl mt-2 text-white">S'enregistrer</h1>
          <input type="email" v-model="email" placeholder="your e-mail" class="h-8 my-4 w-3/4 text-black text-center">
          <input type="password" v-model="password" placeholder="your password" class="h-8 my-4 w-3/4 text-black text-center">
          <input type="password" v-model="passwordConf" placeholder="confirm your password" class="h-8 w-3/4 my-4 text-black text-center">
          <h2 class="text-xl text-green-400 text-center" ref="monRetour"></h2>
          <input type="submit" value="Inscription" class="hover:bg-blue-400 h-10 w-full bg-green-600 my-8 transition-colors">
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

let email = '';
let password = '';
let passwordConf = '';
const monRetour = ref('')


async function submitForm() {
  if(password === passwordConf){
    monRetour.value.innerText = "Veuillez vérifier votre boîte mail pour confirmer votre compte";
    monRetour.value.style.color = 'green'
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log(error);
    }
      } catch (error) {
      console.error('erreur : ', error);
      }
  } else {
    monRetour.value.style.color = 'red'
    monRetour.value.innerText = "Les mots de passe ne sont pas identiques."
    console.log('mdp pas match')
  }
}

async function loginWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}
</script>
