<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"/>
        <div class="min-w-full min-h-screen  flex items-center justify-center ">
            <div class="h-1/2 min-w-full flex items-center justify-center">
                <form 
                    class="flex flex-col  w-3/12 justify-center bg-black items-center border rounded-xl">
                    <h1 class="text-3xl mt-2 text-white">Se connecter avec Github</h1>
                    <img src="../images/icons8-github-90.png">
                    <button class="text-black bg-green-300 h-8 my-16 rounded-xl w-1/2" @click="signInWithGithub()">Connect with github</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://moaulmnomptksngvnboj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYXVsbW5vbXB0a3NuZ3ZuYm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5MTc1NjUsImV4cCI6MjAyNTQ5MzU2NX0.dOeKSg3blO0MVbnCH6cvfhQ4UFJ1C5S88lQkd01S8F4"
const supabase = createClient(supabaseUrl, supabaseKey)


</script>
