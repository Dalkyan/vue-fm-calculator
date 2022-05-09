<script setup lang="ts">
import UserInput from "./components/UserInput.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import CoachRating from "./components/CoachRating.vue";
import { useCoachStore } from "./store/UseCoachAttributes";

const coach = useCoachStore();
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderComponent msg="Reactive FM21 coach rating calculator" />
    </div>
  </header>

  <main>
    <div class="main">
      <div>
        <h2>Attributes</h2>
        <div class="flex">
          <div class="col">
            <h3>Mental</h3>
            <hr />
            <UserInput atr-name="determination" id-name="det">
              <input
                type="number"
                min="1"
                max="20"
                id="det"
                v-model="coach.det"
              />
            </UserInput>
            <UserInput atr-name="level of discipline" id-name="lod">
              <input
                type="number"
                min="1"
                max="20"
                id="lod"
                v-model="coach.lod"
              />
            </UserInput>
            <UserInput atr-name="motivating" id-name="mot">
              <input
                type="number"
                min="1"
                max="20"
                id="mot"
                v-model="coach.mot"
              />
            </UserInput>
            <div class="col">
              <h3>GK&nbsp;coaching</h3>
              <hr />
              <UserInput atr-name="GK&nbsp;Distribution" id-name="gkd">
                <input
                  id="gkd"
                  type="number"
                  min="1"
                  max="20"
                  v-model="coach.gkd"
                />
              </UserInput>
              <UserInput atr-name="GK&nbsp;Handling" id-name="gkh">
                <input
                  id="gkh"
                  type="number"
                  min="1"
                  max="20"
                  v-model="coach.gkh"
                />
              </UserInput>
              <UserInput atr-name="GK&nbsp;Shot&nbsp;stopping" id-name="gks">
                <input
                  id="gks"
                  type="number"
                  min="1"
                  max="20"
                  v-model="coach.gks"
                />
              </UserInput>
            </div>
          </div>
          <div class="col">
            <h3>Coaching</h3>
            <hr />
            <UserInput atr-name="attacking" id-name="att">
              <input
                type="number"
                min="1"
                max="20"
                id="att"
                v-model="coach.att"
              />
            </UserInput>
            <UserInput atr-name="defending" id-name="def">
              <input
                type="number"
                min="1"
                max="20"
                id="def"
                v-model="coach.def"
              />
            </UserInput>
            <UserInput atr-name="fitness" id-name="fit">
              <input
                type="number"
                min="1"
                max="20"
                id="fit"
                v-model="coach.fit"
              />
            </UserInput>
            <UserInput atr-name="mental" id-name="men">
              <input
                id="men"
                type="number"
                min="1"
                max="20"
                v-model="coach.men"
              />
            </UserInput>
            <UserInput atr-name="tactical" id-name="tac">
              <input
                id="tac"
                type="number"
                min="1"
                max="20"
                v-model="coach.tac"
              />
            </UserInput>
            <UserInput atr-name="technical" id-name="tech">
              <input
                id="tech"
                type="number"
                min="1"
                max="20"
                v-model="coach.tch"
              />
            </UserInput>
          </div>
        </div>
      </div>
      <hr />
      <CoachRating />
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.5rem;
  /* font-weight: normal; */
}

header {
  line-height: 1;
}
input {
  width: 3em;
}
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
  body {
    display: flex;
    flex-direction: column;
    place-items: center;
    font-size: small;
    font-weight: bold;
  }
  header {
    display: flex;
    place-items: center;
    text-align: center;
    justify-content: center;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }
@media (min-width: 800px) {
  body{
    line-height: 1.4;
  }
  h1 {
  font-weight: 500;
  font-size: 2rem;
}
  .main {
    display: flex;
    flex-direction: row;
    gap: 3vh;
    justify-content: space-evenly;
  }
}
</style>
