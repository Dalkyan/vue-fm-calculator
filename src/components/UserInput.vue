<script setup lang="ts">
defineProps<{
  atrName: string;
  idName: string;
}>();
</script>

<template>
  <form class="col" @submit.prevent="">
    <label :for="idName">{{ atrName }} </label>
    <slot>TODO input</slot>
  </form>
</template>

<style lang="css" scoped>
input {
  width: 3em;
}
</style>
