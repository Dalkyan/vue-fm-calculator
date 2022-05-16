<script setup lang="ts">
import { useCoachStore } from "@/store/UseCoachAttributes";
const props = defineProps<{
  atrName: string;
  idName: string;
}>();
const coach = useCoachStore();

interface CoachAttributes {
  det: number;
  lod: number;
  mot: number;
  att: number;
  def: number;
  fit: number;
  men: number;
  tac: number;
  tch: number;
  gkd: number;
  gkh: number;
  gks: number;
}

const validateInput = () => {
  if (coach[props.idName as keyof typeof coach] > 20) {
    coach[props.idName as keyof CoachAttributes] = 20;
  }
  if (coach[props.idName as keyof typeof coach] < 1) {
    coach[props.idName as keyof CoachAttributes] = 1;
  }
};

const setValue = (value: number) =>
  (coach[props.idName as keyof CoachAttributes] = value);
</script>
<template>
  <form class="col" @submit.prevent @input="validateInput()">
    <label :for="idName">{{ atrName }} </label>
    <slot>TODO input</slot>
    <div>
      <button @click="setValue(1)">1</button>
      <button @click="setValue(5)">5</button>
      <button @click="setValue(10)">10</button>
      <button @click="setValue(15)">15</button>
      <button @click="setValue(20)">20</button>
    </div>
  </form>
</template>
<style>
button {
  width: min-content;
}
</style>
