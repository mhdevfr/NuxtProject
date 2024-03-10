<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"/>
        <div class="min-w-full min-h-screen  flex items-center justify-center ">
            <div class="h-1/2 min-w-full flex items-center justify-center">
                <form 
                    @submit.prevent="submit"
                    class="flex flex-col  w-3/12 justify-center bg-black items-center border rounded-xl">
                    <input type="email" v-model="state.email" class="h-8 my-2 text-black text-center">
                    <input type="password" v-model="state.password" class="h-8 my-2 text-black text-center">
                    <input type="submit" class="bg-blue-400 rounded w-16">
                    <h1 class="text-3xl mt-2 text-white">Se connecter avec Github</h1>
                    <img src="../images/icons8-github-90.png">
                    <button class="text-black bg-green-300 h-8 my-16 rounded-xl w-1/2">Connect with github</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const state = {
    email: '',
    password: '',
}

const supabase = useSupabaseClient();

async function submit(event: FormSubmitEvent<any>) {
    const { email, password } = state;

    await supabase.auth.signInWithPassword({
        email,
        password,
    });

    navigateTo('/');
}
</script>
