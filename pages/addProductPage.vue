<template>
    <div class="relative inset-0 w-screen h-full flex items-center bg-white bg-[linear-gradient(to_right,#eeeeeeee_1px,transparent_1px),linear-gradient(to_bottom,#eeeee4_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"></navbar>
        <div class="w-1/2 h-screen flex flex-col ml-64 items-left justify-center">
            <h1 class="text-3xl my-8">Déposer votre NFT dans notre boutique</h1>
            <input type="text" class="bg-white border  h-8 w-5/12 my-4" v-model="name" placeholder="Votre nom de NFT">
            <input type="url" class="bg-white border  h-8 w-5/12 my-4" v-model="URL" placeholder="Votre URL d'image de NFT">
            <input type="text" class="bg-white border  h-32 w-5/12 my-4" v-model="description" placeholder="Votre description de NFT">
            <input type="number" class="bg-white border  h-8 w-5/12 my-4" v-model="prix" placeholder="Votre prix de NFT">
            <h2 class="text-red-600" v-if="!newNFT">Tous les champs sont requis</h2>
            <h2 class="text-green-600 my-4" v-if="isNFTAdded">NFT ajouté aux produits redirection imminente.</h2>
            <button class="h-8 w-3/12 bg-green-400 rounded-md" @click="newNFT()">Ajouter votre NFT</button>
        </div>
        <div class="w-1/2 flex items-center justify-center flex-col min-h-screen inset-0 bg-black bg-[linear-gradient(to_right,#ececec32_1px,transparent_1px),linear-gradient(to_bottom,#ececec32_1px,transparent_1px)] bg-[size:24px_24px]">
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
import { ref } from 'vue';

const name = ref('')
const description = ref('')
const URL = ref('')
const prix = ref()
import listeNFT from '../data/produitData'
import type { ProduitInterface } from '~/interfaces/produit.interface';

const isNFTAdded = ref(false);

const newNFT = () => {
    if (name.value && description.value && URL.value && prix.value) {
        const newNFT = {
            id: listeNFT.length + 1,
            name: name.value,
            description: description.value,
            imageURL: URL.value,
            prix: prix.value,
        } 
        listeNFT.push(newNFT);
        isNFTAdded.value = true;
        nftAdded();
    } else {
        console.error('Tous les champs sont requis.');
    }
};

const nftAdded = () => {
    setTimeout(() => {
        isNFTAdded.value = false;
        navigateTo('/produits');
    }, 2000);
}
</script>
