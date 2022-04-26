<script setup lang="ts">
import UserInput from "./components/UserInput.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import CoachRating from "./components/CoachRating.vue";
import { useCoachStore } from "./store/UseCoachAttributes";
import { storeToRefs } from "pinia";

const coach = useCoachStore();
storeToRefs(coach);
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderComponent msg="Reactive FM coach rating calculator with VUE" />
    </div>
  </header>

  <main>
    <div class="flex">
      <div class="col">
        <h3>Mental</h3>
        <UserInput atr-name="determination" id-name="det" :val="coach.det" />
        <UserInput
          atr-name="level of discipline"
          id-name="lod"
          :val="coach.lod"
        />
        <UserInput atr-name="motivating" id-name="mot" :val="coach.mot" />
      </div>
      <div class="col">
        <h3>Coaching</h3>
        <UserInput atr-name="attacking" id-name="att" :val="coach.att" />
        <UserInput atr-name="defending" id-name="def" :val="coach.def" />
        <UserInput atr-name="fitness" id-name="fit" :val="coach.fit" />
        <UserInput atr-name="mental" id-name="men" :val="coach.men" />
        <UserInput atr-name="tactical" id-name="tac" :val="coach.tac" />
        <UserInput atr-name="technical" id-name="tech" :val="coach.tch" />
      </div>
      <div class="col">
        <h3>GK&nbsp;coaching</h3>
        <UserInput
          atr-name="GK&nbsp;Distribution"
          id-name="gkd"
          :val="coach.gkd"
        />
        <UserInput atr-name="GK&nbsp;Handling" id-name="gkh" :val="coach.gkh" />
        <UserInput
          atr-name="GK&nbsp;Shot&nbsp;stopping"
          id-name="gks"
          :val="coach.gks"
        />
      </div>
    </div>
    <CoachRating component-name="Coaching rating" />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
