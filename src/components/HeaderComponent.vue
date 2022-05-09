<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
<template>
  <p>
    made with <img class="logo" src="/logo.svg" />
    <span class="green">Vue 3</span>
  </p>
  <h1>{{ msg }}</h1>
</template>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
}
p {
  font-size: 0.6em;
}
.logo {
  height: 0.5rem;
}
</style>
