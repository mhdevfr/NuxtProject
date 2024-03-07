<template>
    <div class="flex justify-center bg-white flex-col rounded h-96 w-64">
            <h2 class="ml-2">NFT : Azuki #4232</h2>
            <img src="../images/nft1.avif" class="h-52 w-64">
            <p class="ml-2 mt-2">Description : NFT de la collection Pingouin from USA.</p>
            <h1 class="my-8 ml-2">Prix : 1.24 ETH</h1>
    </div>

</template>
    





<script setup lang="ts">


import type { ProduitInterface } from '../interfaces/produit.interface';

defineProps<{
    produit: ProduitInterface[];
}>()




</script>
    


