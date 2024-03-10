<template>
        <div class="relative inset-0 w-screen h-full flex items-center bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
            <navbar class="absolute l-0"></navbar>
            <div class="w-1/2 h-screen flex flex-col ml-64 items-left justify-center">
                <h1 class="text-3xl my-8">Déposer votre NFT dans notre boutique</h1>
                <input type="text" class="bg-white border  h-8 w-5/12 my-4" v-model="name" placeholder="Votre nom de NFT">
                <input type="url" class="bg-white border  h-8 w-5/12 my-4" v-model="URL" placeholder="Votre URL d'image de NFT">
                <input type="text" class="bg-white border  h-32 w-5/12 my-4" v-model="description" placeholder="Votre description de NFT">
                <input type="number" class="bg-white border  h-8 w-5/12 my-4" v-model="prix" placeholder="Votre prix de NFT">
                <button class="h-8 w-3/12 bg-green-400 rounded-md" @click="newNFT()" >Ajouter votre NFT</button>
            </div>
            <div class="w-1/2 flex items-center justify-center flex-col min-h-screen bg-black">
                <h1 class="text-3xl my-8 text-center text-white">Votre NFT</h1>
                <div class="flex justify-center bg-orange-400 flex-col rounded h-96 w-64" v-motion-slide-visible-bottom>
                     <h2 class="ml-2 my-5">NFT : {{ name }}</h2>
                     <img :src="URL" class="mx-auto opacity-100 w-64 h-52" id="img"/>
                     <p class="ml-2 mt-2">Description : {{ description }}</p>
                    <div class="flex items-center w-3/4 justify-around my-6">
                    <h1 class="">Prix : {{ prix }} ETH</h1>
                    <button class="h-8 w-20 bg-green-500">Acheter</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const name = ref('')
const description = ref('')
const URL = ref('')
const prix = ref('')




</script>