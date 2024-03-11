export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    if(user.value && to.path === '/'){
        navigateTo('/bio')
    } else if (user.value && to.path === '/'){
        navigateTo('/bio')
    }
})