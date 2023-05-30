<template>
  <div>
    <div class="app">
      <TheSummerize />
      <TheBar />
      <TheDetail />
    </div>
    <TheTest />
  </div>
</template>

<script setup>
import TheBar from "./components/TheBar.vue";
import TheDetail from "./components/TheDetail.vue";
import TheTest from "./components/TheTest.vue";
import TheSummerize from "./components/TheSummerize.vue";
import useData from "./hooks/data.js";

const { setVipLevel } = useData();
setVipLevel();
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
