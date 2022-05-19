<template>
  <template v-if="isHalf">
    <svg
      width="3vh"
      height="3vh"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 3.71L34.924 34.254 1.221 39.16l24.39 23.767-5.762 33.57L50 80.652V3.71z"
        fill="#fbaf00"
        stroke="#555"
        stroke-width="1"
      />
      <path
        d="M50 3.71v76.942l30.151 15.845-5.761-33.57L98.78 39.16l-33.704-4.907L50 3.71z"
        fill="#555"
        stroke="#555"
        stroke-width="1"
      />
    </svg>
  </template>
  <svg
    v-else
    width="3vh"
    height="3vh"
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
</script>
