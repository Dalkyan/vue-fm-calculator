<script setup lang="ts">
defineProps<{
  atrName: string;
  idName: string;
}>();
let value = 10;
</script>

<template>
  <form class="col">
    <label :for="idName">{{ atrName.toUpperCase() }} </label>
    <input
      type="number"
      :name="atrName"
      :id="idName"
      min="1"
      max="20"
      :value="value"
    />
  </form>
</template>

<style lang="css" scoped>
input {
  width: 3em;
}
</style>
