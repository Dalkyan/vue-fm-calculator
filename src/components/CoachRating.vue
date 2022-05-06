<script setup lang="ts">
import { useCoachStore } from "@/store/UseCoachAttributes";

const coach = useCoachStore();
coach.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
});
// const coach.getDLM = ref(coach.getDLM);

function computeSimpleRating(stat: number): number {
  console.log(coach.getDLM);
  return 9 * stat + coach.getDLM;
}
function computeRating(mainStat: number, oddStat: number): number {
  return 6 * mainStat + 3 * oddStat + coach.getDLM;
}
const shotStopping = computeSimpleRating(coach.gks);
const handling = computeRating(coach.gkh, coach.gkd);
</script>

<template>
  <hr />
  <h2>Coach rating</h2>
  <div>
    <h3>Fitness coach</h3>
    <h4>Strength coaching: {{ coach.getFitness }}</h4>
    <h4>Quickness coaching: {{ coach.getFitness }}</h4>
  </div>
  <div>
    <h3>Goalkeeping coach</h3>
    <h4>Shot stopping: {{ shotStopping }}</h4>
    <h4>Handling & Distribution: {{ handling }}</h4>
  </div>
  <div>
    <h3>General coach</h3>
    <div>
      <h4>Shot stopping: {{ shotStopping }}</h4>
      <h4>Handling & Distribution: {{ handling }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
