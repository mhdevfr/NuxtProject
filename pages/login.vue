<template>
    <div class="relative inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"> 
     <navbar class="absolute l-0"/>
        <div class="min-w-full min-h-screen flex items-center justify-center">
            <div class="min-h-screen min-w-full flex items-center justify-center">
                <form class="flex flex-col w-3/12 justify-center bg-black items-center border rounded-xl">
                    <h1 class="text-3xl mt-2 text-white">Se connecter</h1>
                    <h1 class="text-white">Avec Github</h1>
                    <img src="../images/icons8-github-90.png" class="w-20 h-20 my-8">
                        <button 
                        @click='client.auth.signIn({ provider: "Github "})'
                        class="text-center rounded h-8 min-w-48 mb-8 bg-green-400">
                        Connexion
                        </button>
                    <button 
                    v-if="user" 
                    @click="client.auth.signOut()"
                    class="h-8 bg-red-400 rounded my-8">
                    Déconnexion
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">



const client = useSupabaseClient()
const user = useSupabaseClient()
const router = useRouter()

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

watchEffect(() => {
    if(user.value){
        router.push('./produits')       
    }
})

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}



async function signOut() {
  const { error } = await supabase.auth.signOut()
}

</script>