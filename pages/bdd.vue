<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.name }} Pour chaque</li>
  </ul>
</template>

<script setup>
import { supabase } from '@supabase/supabase-js'
const todos = ref([])

async function getTodos() {
  const { data: todos } = await supabase.from('todos').select()
  countries.value = todos
}

onMounted(() => {
  getTodos()
})

</script>
