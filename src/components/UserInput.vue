<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  atrName: string;
  idName: string;
  val: number;
}>();
// const val = ref(10);
</script>

<template>
  <form class="col">
    <label :for="idName">{{ atrName }} </label>
    <input
      type="number"
      :name="atrName"
      :id="idName"
      min="1"
      max="20"
      :value="val"
    />
  </form>
</template>

<style lang="css" scoped>
input {
  width: 3em;
}
</style>
