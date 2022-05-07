<script setup lang="ts">
import { useCoachStore } from "@/store/UseCoachAttributes";
import { ref } from "vue";
import RatingStar from "./RatingStar.vue";

const coach = useCoachStore();

coach.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
});

function printStars(computedRating: number) {
  let array = Array(5).fill({ isHalf: false, isFull: false });
  for (let i = 0; i < 5; i++) {
    if (computedRating < 31 + i * 60) {
      array[i] = { isHalf: true, isFull: false };
      return array;
    } else {
      array[i] = { isHalf: false, isFull: true };
      if (computedRating <= (i + 1) * 60) {
        return array;
      }
    }
  }
  return array;
}
</script>

<template>
  <div class="grid">
    <h2 class="title">Coach rating</h2>
    <div class="left-top">
      <h3>Fitness coach</h3>
      <hr />
      <div>
      <h4>Strength coaching: {{ coach.getFitness }}</h4>
        <span
          v-for="(item, index) in printStars(coach.getFitness)"
          :key="index"
        >
          <RatingStar :is-half="item.isHalf" :is-full="item.isFull" />
        </span>
      </div>
      <h4>Quickness coaching: {{ coach.getFitness }}</h4>
    </div>
    <div class="left-bot">
      <h3>Goalkeeping coach</h3>
      <hr />
      <h4>Shot stopping: {{ coach.getShotStopping }}</h4>
      <h4>Handling & Distribution: {{ coach.getHandling }}</h4>
    </div>
    <div class="bot">
      <h3>General coach</h3>
      <hr />
      <div class="flex">
        <div>
          <h4>Tactical</h4>
          <hr />
          <div>
            <label>Defending: {{ coach.getDefTact }}</label>
          </div>
        </div>
        <hr />
        <div>
          <h4>Technical</h4>
          <hr />
          <div>placeholder</div>
        </div>
      </div>
    </div>
  </div>
</template>
