<template>
    <div class="flex justify-center bg-white-400 flex-col items-center rounded h-96 w-64 opacity-05"  v-motion-slide-visible-top>
        <button class="bg-green-400 h-16 w-16 rounded transition-all hover:opacity-40 hover:scale-110" @click = addProductVerif >Add an NFT</button>
    </div>
</template>

<script setup lang='ts'>

const addProductVerif = () => {
const user = true

if(user === true){
    navigateTo('/addProductPage')
}
}

</script>
    