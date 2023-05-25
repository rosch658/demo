<template>
  <div class="progress-bar">
    <!-- <transition name="icon" mode="out-in"> -->
    <div class="icon" :style="{ width: vipLevel * 10 + '%' }">
      <progress-icon :value="vipLevel" />
    </div>
    <!-- </transition> -->
    <div class="progress-bar-container">
      <!-- 10 bars and gaps -->
      <div
        v-for="(_, level) in standards.length - 1"
        class="segment"
        :key="level"
      >
        <div
          class="gap"
          :class="{
            gapFirst: level === 0,
          }"
        >
          <div class="vip-tag">VIP{{ level }}</div>
        </div>
        <progress-bar
          :class="{
            'progress-first': level === 0,
            'progress-last': level === standards.length - 2,
            'progress-middle': level > 0 && level < standards.length - 2,
            'progress-container-big': true,
          }"
          :classNames="{ filled: vipLevel > level }"
          :value="vipLevel > level ? 100 : 0"
          mode="big-bar"
        ></progress-bar>
        <!-- last gap -->
        <div class="gap gap-last" v-if="level === standards.length - 2">
          <div class="vip-tag">VIP{{ level + 1 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgressIcon from "./ProgressIcon.vue";
import useData from "../hooks/data.js";

const { standards, vipLevel } = useData();
</script>

<style scoped>
.progress-bar {
  margin-bottom: 5rem;
}

.progress-bar-container {
  display: flex;
  /* margin-bottom: 2rem; */
}

.segment {
  width: 100%;
  display: flex;
}
.gap {
  width: 0;
  height: 0;
  border: 0.2rem solid rgb(38, 54, 66);
  position: relative;
}

.vip-tag {
  left: 0;
  transform: translate(-50%, 120%);
  position: absolute;
  font-size: 1.5rem;
}

.gap-first .vip-tag {
  transform: translate(-20%, 120%);
}

.gap-last .vip-tag {
  transform: translate(-80%, 120%);
}

.icon {
  height: 0rem;
  position: relative;
  transition: all 0.3s ease-out;
}

/* .icon-leave-from {
  transform: translate(-51%, -140%);
}

.icon-leave-to {
  opacity: 0;
  transform: translate(50%, -140%);
}

.icon-enter-from {
  opacity: 0.1;
  transform: translate(-100%, -140%);
}

.icon-enter-to {
  opacity: 1;
  transform: translate(-51%, -140%);
}

.icon-leave-active {
  transition: all 0.3s;
}

.icon-enter-active {
  transition: all 0.3s ease-out;
} */
</style>
