<template>
    <div class="flex max-w-full grid gap-10 ml-20">
        <produit 
        v-for="produit of produits"
        :key="produit.id"
        :produit="produit"
        />
    </div>
</template>

<script setup lang="ts">
import type { ProduitInterface } from '../interfaces/produit.interface';



const props = defineProps<{
    produits: ProduitInterface[];
}>();

</script>