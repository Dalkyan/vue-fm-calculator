<script setup lang="ts">
import UserInput from "./components/UserInput.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    /> -->

    <div class="wrapper">
      <HeaderComponent msg="Reactive FM coach rating calculator with VUE" />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <div class="flex">
      <div class="col">
        <h2>Mental attributes</h2>
        <UserInput atrName="determination" idName="det" />
        <UserInput atr-name="level of discipline" id-name="lod" />
        <UserInput atr-name="motivating" id-name="mot" />
      </div>
      <div class="col">
        <h2>Coaching attributes</h2>
        <UserInput atr-name="attacking" id-name="att" />
        <UserInput atr-name="defending" id-name="def" />
        <UserInput atr-name="fitness" id-name="fit" />
        <UserInput atr-name="mental" id-name="men" />
        <UserInput atr-name="tactical" id-name="tac" />
        <UserInput atr-name="technical" id-name="tech" />
      </div>
      <div class="col"></div>
      <div class="col"></div>
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

.logo {
  display: block;
  margin: 0 auto 2rem;
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

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
