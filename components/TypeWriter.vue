<template>
    <VueWriter :array="message" :typeSpeed="10" />
</template>
  
  
<script setup lang="ts">
  import VueWriter from 'vue-writer';
  let message = ['Make your work great again with SaturnCoin']
</script>





<style>

.is-typed {
  font-style: normal;
}

.is-typed span.typed {
  colour: black;  
}
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}
.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}
.is-typed span.cursor.typing {
  animation: ease;
}
@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

</style>