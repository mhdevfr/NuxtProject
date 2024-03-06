<template>
    <navbar class="absolute l-0"/>
    <div class="min-h-screen min-w-full flex items-center justify-around">
        
        <div class="min-w-96 rounded" id="bio">
            <h1 class="text-3xl my-4">Ma bio :</h1>
            <p class="max-w-96 text-lg"
            v-motion-slide-visible-top 
            >
                Passionné par le potentiel infini du web, je suis un développeur web 
                créatif et curieux. Fort d'une expérience solide dans la conception et la réalisation 
                de sites web dynamiques, je m'efforce de créer des expériences utilisateur exceptionnelles. 
                Ma passion pour la technologie et mon engagement envers l'innovation me motivent à relever 
                chaque nouveau défi avec enthousiasme. Mon objectif ? Transformer des idées en réalité digitale, 
                une ligne de code à la fois.</p>
            <div class="flex items-center justify-end">
                <img src="../images/icons8-github-50.png" class="w-8 h-8">
                <img src="../images/icons8-linkedin-50 (1).png" class="w-12 h-12">
            </div>
        </div>
        <div class="group h-96 w-96 [perspective: 1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                    <img src="../images/milan.jpeg" class="rounded-xl h-full object-cover shadow-black/40 w-full">
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                        <h1 class="text-3xl my-8">Milan Herbé</h1>
                        <p class="mx-auto text-lg my-4">💻 Développeur Web</p>
                        <p class="text-lg">👨🏻‍💻 : Actuellement étudiant</p>
                        <button class="bg-slate-700 h-8 w-1/3 text-xs mx-auto my-8 rounded">Me contacter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';



</script> 

