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
const titleTemplate = (v: number) => `Click to set input value to ${v}`;
</script>
<template>
  <form class="col" @submit.prevent @input="validateInput()">
    <label :for="idName">{{ atrName }} </label>
    <div class="btn-flex">
      <slot class="input">TODO input</slot>
      <button class="btn1" @click="setValue(1)" :title="titleTemplate(1)">
        1
      </button>
      <button class="btn5" @click="setValue(5)" :title="titleTemplate(5)">
        5
      </button>
      <button class="btn10" @click="setValue(10)" :title="titleTemplate(10)">
        10
      </button>
      <button class="btn15" @click="setValue(15)" :title="titleTemplate(15)">
        15
      </button>
      <button class="btn20" @click="setValue(20)" :title="titleTemplate(20)">
        20
      </button>
    </div>
  </form>
</template>
<style>
button {
  width: 2.2em;
  box-shadow: 1px 1px indigo;
}
.btn-flex {
  display: flex;
  gap: 0;
}
</style>
