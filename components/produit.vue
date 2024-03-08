<template>
    <div class="flex justify-center bg-white flex-col rounded h-96 w-64" v-motion-slide-visible-bottom>
            <h2 class="ml-2">NFT : {{ produit.name }}</h2>
            <img src="../images/nft1.avif" class="h-52 w-64">
            <p class="ml-2 mt-2">Description : {{ produit.description }}</p>
            <h1 class="my-8 ml-2">Prix : {{ produit.prix }}</h1>
    </div>

</template>
    
<script setup lang="ts">

import type { ProduitInterface } from '../interfaces/produit.interface';

defineProps<{
    produit: ProduitInterface;
}>()




</script>
    


