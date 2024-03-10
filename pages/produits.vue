<template>
    <div class="relative inset-0 w-full h-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"/>
        <div class="flex flex-col items-center">
                <h1 class="text-3xl my-16 h-full text-center min-w-full text-black">Découvrez nos différents produits :</h1>
                <ProduitListe
                :produits="produitData"
                />
        </div>
    </div>
</template>

<script setup lang="ts">

import type { ProduitInterface} from './../interfaces/produit.interface';
import produitData from './../data/produitData';

const props = defineProps<{
    produits: ProduitInterface[]
}>()


</script>

<style scoped>
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 400px;
    gap: 50px;
}
</style>