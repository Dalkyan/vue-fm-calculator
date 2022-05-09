<template>
  <template v-if="isHalf">
    <img src="/star-half.min.svg" />
  </template>
  <svg
    v-else
    width="16"
    height="16"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :style="isFull ? full : blank"
      style="stroke: #555; stroke-width: 1"
      d="m50 3.714 15.074 30.544 33.708 4.898L74.39 62.93l5.758 33.571L50 80.652l-30.149 15.85 5.758-33.57L1.22 39.155l33.707-4.898z"
    />
  </svg>
</template>

<script setup lang="ts">
import { reactive } from "vue";
defineProps<{
  isHalf: boolean;
  isFull: boolean;
}>();
const blank = reactive({ fill: "#555" });
const full = reactive({ fill: "#fbaf00" });
// let isHalf = true;
// let isFull = false;
</script>

<style lang="scss" scoped></style>
