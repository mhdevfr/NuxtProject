<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"/>
        <div class="min-w-full min-h-screen  flex items-center justify-center ">
            <div class="h-1/2 min-w-full flex items-center justify-center">
                <form 
                    @submit.prevent="submit"
                    class="flex flex-col  w-3/12 justify-around h-96 bg-black items-center border rounded-xl">
                    <h1 class="text-3xl mt-2 text-white">Connexion</h1>
                    <input type="email" v-model="state.email" class="h-8 my-2 text-black text-center">
                    <input type="password" v-model="state.password" class="h-8 my-2 text-black text-center">
                    <input type="submit" class="bg-blue-400 rounded w-16">
                    <button class="text-black bg-green-300  my-4 w-full items-center flex justify-center">
                        Connect with github
                        <img src="../images/icons8-github-50.png" class="w-10 ml-5 h-10">
                    </button>
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
    const { email, password } = event.data;

    await supabase.auth.signUp({
        email,
        password,
    });
    navigateTo('/');
}



    
</script>