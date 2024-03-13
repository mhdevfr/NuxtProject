<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"/>
<div class="flex items-center justify-center">
        <div class="min-h-screen w-5/6 flex items-center justify-around">
            <div class="">
                <h1 class="text-3xl underline w-72 h-20 subpixel-antialiased " v-motion-slide-top> <TypeWriter/> </h1>
                <h1 class="text-2xl mb-4"></h1>
                <p class="w-80 text-xl h-64 subpixel-antialiased " v-motion-slide-bottom>
                    Get your products instantly with our new e-commerce website,
                     try our wonderful products with a 30 days trial, we are here
                      to answer your differents questions on contact or F.A.Q section(s).
                </p>
            </div>
            <div class="inverse-toggle shadow-lg text-gray-100 text-sm font-mono
             subpixel-antialiased bg-black rounded-lg h-3/4 w-5/12" 
             v-motion-slide-visible-right id="carte">
              <div>
                <div class="my-1 ml-3 mt-3 flex items-center">
                        <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                        <h2 class="text-center flex justify-center text-white ml-32">NFT Launcher</h2>
                </div>
                <div class="mt-4 flex">
                    <img src="../images/gifnft.gif" class="rounded-b-lg">
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

</template>

<style scoped>

#carte{
    transform: 
    perspective(1000px)
    rotateY(20deg)
    rotateX(20deg)
    ;
}

</style>

<script setup>
</script>