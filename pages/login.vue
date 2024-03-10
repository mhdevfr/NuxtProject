<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
        <navbar class="absolute l-0"/>
        <div class="min-w-full min-h-screen  flex items-center justify-center ">
            <div class="min-h-screen min-w-full flex items-center justify-center">
                <form 
                    class="flex flex-col  w-3/12 justify-center bg-black items-center border rounded-xl">
                    <h1 class="text-3xl mt-2 text-white">Se connecter</h1>
                    <input type="email" v-model="email" placeholder="your email"
                        class="h-8 w-3/4 text-center my-4 mt-4">
                    <input type="password" v-model="password" placeholder="your password"
                        class="h-8 w-3/4 text-center my-4">
                    <button class="text-center rounded h-8 min-w-48 mb-8 bg-green-400" @click="signUp()">
                        {{ isSignUp ? 'Connexion' : 'Inscription' }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


const client = useSupabaseClient();
const isSignUp = ref(false)
const email = ref('')
const password = ref ('')

const signUp = async () => {
    const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    })
    console.log('user', user)
    console.log('error', error)
    console.log('register')
}

const login = async () => {
    const { user, error } = await client.auth.signIn({
        email: email.value,
        password: password.value,
    })
    console.log('user', user)
    console.log('error', error)
    console.log('login')
}

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if(user.value){
            navigateTo('./bio')
        }
    })
})
</script>
