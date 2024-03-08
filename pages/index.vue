<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"/>
        <div class="min-h-screen w-full flex items-center justify-evenly">
            <div class="3/4">
                <h1 class="text-3xl underline w-72 h-20" v-motion-slide-top> <TypeWriter/> </h1>
                <h1 class="text-2xl mb-4"></h1>
                <p class="w-96 text-xl h-64" v-motion-slide-bottom>
                    Get your products instantly with our new e-commerce website, try our wonderful products with a 30 days trial, we are here to answer your differents questions on contact or F.A.Q section(s).
                </p>
            </div>
            <img src="../images/macSaturn.png"  v-motion-slide-visible-right class="max-w-screen max-h-screen">
        </div>
    </div>
</template>