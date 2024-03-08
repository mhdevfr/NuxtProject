
<template>
    <div class="h-screen flex items-start" v-motion-slide-visible-left>
        <ul class="bg-slate-950 flex flex-col width 
         m-10 text-white rounded-full w-16
         text-center justify-center
         items-center h-5/6"
         >
            <nuxt-link to="/" class="mb-12 mt-12" >🏠<br> Accueil</nuxt-link> 
            <nuxt-link to="/login" class="mb-12">👨🏻‍💻<br> Login</nuxt-link> 
            <nuxt-link to="/produits" class="mb-12">📦<br> Produits</nuxt-link> 
            <nuxt-link to="/faq" class="mb-12">🧾<br> F.A.Q</nuxt-link> 
            <nuxt-link to="/contact" class="mb-12">💬<br> Contact</nuxt-link> 
            <nuxt-link to="/bio" class="mb-12">📔<br> Credits</nuxt-link> 
            <button @click="signOut()"></button>
         </ul>
    </div>
</template>

<script setup lang="ts">



</script>

<style scoped lang="scss">

a{
    font-size: 10px;
}

</style>