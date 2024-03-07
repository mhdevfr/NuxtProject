<template>
    <div class="flex justify-center flex-col bg-red-400 rounded h-64 w-80">
        <h2>Produit fou</h2><br>
        <img src="../images/projetBoutique.png" class="w-72 h-32">
        <p>Description : Ce produit est un lorem</p>
    </div>

</template>
    





<script setup lang="ts">


import type { ProduitInterface } from '../interfaces/produit.interface';

defineProps<{
    produit: ProduitInterface[];
}>()




</script>
    


