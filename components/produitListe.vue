<template>
    <div class="max-w-full grid gap-10 ml-20">
        <Produit 
        v-for="produit of produits"
        :key="produit.id"
        :produit="produit"
        />
    </div>
</template>

<script setup lang="ts">
import type { ProduitInterface } from '../interfaces/produit.interface';
import produitData from './../data/produitData';



const props = defineProps<{
    produits: ProduitInterface[];
}>();

</script>