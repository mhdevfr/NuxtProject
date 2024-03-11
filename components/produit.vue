<template>
    <div class="flex justify-center bg-orange-400 flex-col rounded h-96 w-64" v-motion-slide-visible-bottom>
            <h2 class="ml-2 my-5">NFT : {{ produit.name }}</h2>
            <img :src="produit.image" class="mx-auto opacity-100 w-64 h-52" id="img"/>
            <p class="ml-2 mt-2">Description : {{ produit.description }}</p>
                <div class="flex items-center w-3/4 justify-around my-6">
                    <h1 class="">Prix : {{ produit.prix }}</h1>
                    <button class="h-8 w-20 bg-green-500">Acheter</button>
            </div>
    </div>

</template>
    
<script setup lang="ts">

import type { ProduitInterface } from '../interfaces/produit.interface';
import produitData from './../data/produitData';

defineProps<{
    produit: ProduitInterface;
}>()




</script>
    


