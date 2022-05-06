<script setup lang="ts">
import { useCoachStore } from "@/store/UseCoachAttributes";

const coach = useCoachStore();
coach.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
});
</script>

<template>
  <div class="grid">
    <h2 class="title">Coach rating</h2>
    <div class="left-top">
      <h3>Fitness coach</h3>
      <hr />
      <h4>Strength coaching: {{ coach.getFitness }}</h4>
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
