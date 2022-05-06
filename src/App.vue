<script setup lang="ts">
import UserInput from "./components/UserInput.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import CoachRating from "./components/CoachRating.vue";
import { useCoachStore } from "./store/UseCoachAttributes";

const coach = useCoachStore();
// const inputBoilerPlate = ` type="number" min="1" max="20" `;
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderComponent msg="Reactive FM coach rating calculator with VUE" />
    </div>
  </header>

  <main>
    <h2>Attributes</h2>
    <div class="flex">
      <div class="col">
        <h3>Mental</h3>
        <hr />
        <UserInput atr-name="determination" id-name="det">
          <input type="number" min="1" max="20" id="det" v-model="coach.det" />
        </UserInput>
        <UserInput atr-name="level of discipline" id-name="lod">
          <input type="number" min="1" max="20" id="lod" v-model="coach.lod" />
        </UserInput>
        <UserInput atr-name="motivating" id-name="mot">
          <input type="number" min="1" max="20" id="mot" v-model="coach.mot" />
        </UserInput>
      </div>
      <div class="col">
        <h3>Coaching</h3>
        <hr />
        <UserInput atr-name="attacking" id-name="att">
          <input type="number" min="1" max="20" id="att" v-model="coach.att" />
        </UserInput>
        <UserInput atr-name="defending" id-name="def">
          <input type="number" min="1" max="20" id="def" v-model="coach.def" />
        </UserInput>
        <UserInput atr-name="fitness" id-name="fit">
          <input type="number" min="1" max="20" id="fit" v-model="coach.fit" />
        </UserInput>
        <UserInput atr-name="mental" id-name="men">
          <input id="men" type="number" min="1" max="20" v-model="coach.men" />
        </UserInput>
        <UserInput atr-name="tactical" id-name="tac">
          <input id="tac" type="number" min="1" max="20" v-model="coach.tac" />
        </UserInput>
        <UserInput atr-name="technical" id-name="tech">
          <input id="tech" type="number" min="1" max="20" v-model="coach.tch" />
        </UserInput>
      </div>
      <div class="col">
        <h3>GK&nbsp;coaching</h3>
        <hr />
        <UserInput atr-name="GK&nbsp;Distribution" id-name="gkd">
          <input id="gkd" type="number" min="1" max="20" v-model="coach.gkd" />
        </UserInput>
        <UserInput atr-name="GK&nbsp;Handling" id-name="gkh">
          <input id="gkh" type="number" min="1" max="20" v-model="coach.gkh" />
        </UserInput>
        <UserInput atr-name="GK&nbsp;Shot&nbsp;stopping" id-name="gks">
          <input id="gks" type="number" min="1" max="20" v-model="coach.gks" />
        </UserInput>
      </div>
      <CoachRating component-name="Coaching rating" />
    </div>
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
