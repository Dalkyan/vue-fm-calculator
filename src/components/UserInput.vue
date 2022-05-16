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
</script>
<template>
  <form class="col" @submit.prevent @input="validateInput()">
    <label :for="idName">{{ atrName }} </label>
    <slot>TODO input</slot>
  </form>
</template>
<style lang="css" scoped>
input {
  width: 4em;
}
</style>
