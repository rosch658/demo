<template>
  <div>
    <div className="app">
      <the-summerize />
      <the-bar />
      <the-detail />
    </div>
    <the-test />
  </div>
</template>

<script setup>
import TheBar from "./components/TheBar.vue";
import TheDetail from "./components/TheDetail.vue";
import TheTest from "./components/TheTest.vue";
import TheSummerize from "./components/TheSummerize.vue";
import useData from "./hooks/data.js";

const { store } = useData();
store.dispatch("loadLevel");
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
.app {
  background-color: rgb(38, 54, 66);
  max-width: 1500px;
  margin: 5rem auto;
  color: white;
  padding: 4rem;
  border-radius: 1.5rem;
}
</style>
