<template>
    <div class="relative inset-0 w-full h-full bg-orange-400 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"/>
        <div class="flex flex-col items-center">
                <h1 class="text-2xl my-16 text-center">Découvrez nos différents produits :</h1>
                <produitListe
                :produits="produits"
                />
        </div>
    </div>
</template>

<script setup lang="ts">

import type { ProduitInterface} from './../interfaces/produit.interface';

const props = defineProps<{
    produits: ProduitInterface[]
}>()


</script>

<style scoped>
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 400px;
    gap: 20px;
}
</style>