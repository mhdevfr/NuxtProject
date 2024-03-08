<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
    <navbar class="absolute l-0"/>
        <div class="min-h-screen min-w-full flex flex-col justify-center ml-40">
            <h1 class="text-7xl mt-2 text-black ">Let's Talk</h1>
            <form class="flex flex-col">
                <input class="bg-transparent border-b-2 w-3/12  border-slate-950 mt-8 text-black" type="text" placeholder="Votre prénom">
                <div class="flex">
                    <input class="bg-transparent  border-slate-950 border-b-2 w-3/12 mt-4 text-black" type="text" placeholder="Le sujet">
                    <img src="../images/icons8-github-50-2.png" class="w-10 h-10 mt-10 ml-96">
                    <img src="../images/icons8-linkedin-100.png" class="w-10 h-10 mt-10 ml-24">
                    <img src="../images/icons8-courrier-60.png" class="w-10 h-10 mt-10 ml-24">
                </div>
                <input class="bg-transparent  border-slate-950 border-2 min-h-64 my-8 w-3/4 text-black" type="text" placeholder="le contenu de votre message">
                <input type="submit" class="submit bg-black text-white w-32 h-8 hover:bg-green-400 transition:2000">
            </form>
        </div>
    </div>
</template>

<style>
input{
    outline: none;
}
</style>
