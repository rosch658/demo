<template>
  <div class="progress-icon">
    <div class="circle">
      <div class="vip" :class="{ 'vip-top': props.value === topLevel }">
        VIP{{ props.value }}
      </div>
      <div class="pointer"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import useData from "../hooks/data.js";
const props = defineProps(["value"]);
const { topLevel } = useData();
</script>

<style scoped>
.progress-icon {
  position: absolute;
  transform: translate(55%, -140%);
  top: 0;
  right: 0;
}

.vip {
  font-size: 1.2rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(25%, 100%);
}

.vip-top {
  transform: translate(15%, 100%);
}

.circle {
  position: relative;
  content: "";
  width: 4rem;
  height: 4rem;
  border-radius: 100000px;
  background-color: rgb(54, 124, 239);
}

.pointer {
  position: absolute;
  width: 0;
  height: 0;
  transform: translate(17%, 130%);
  border-style: solid;
  border-width: 2rem 1.5rem 0 1.5rem;
  border-color: rgb(54, 124, 239) transparent transparent transparent;
}
</style>
