<template>
  <div class="progress-bar">
    <!-- VIP icon -->
    <div class="icon" :style="{ width: vipLevel * 10 + '%' }">
      <BarIcon :value="vipLevel" />
    </div>
    <!-- VIP icon -->

    <!-- 10 bars and gaps -->
    <div class="progress-bar-container">
      <div
        v-for="(_, level) in standards.length - 1"
        class="segment"
        :key="level"
      >
        <!-- gaps -->
        <div
          class="gap"
          :class="{
            gapFirst: level === 0,
          }"
        >
          <div class="vip-tag">VIP{{ level }}</div>
        </div>
        <!-- gaps -->

        <!-- bar -->
        <SingleBar
          :class="{
            'progress-first': level === 0,
            'progress-last': level === standards.length - 2,
            'progress-middle': level > 0 && level < standards.length - 2,
            'progress-container-big': true,
          }"
          :classNames="{ filled: vipLevel > level }"
          :value="vipLevel > level ? 100 : 0"
          mode="big-bar"
        />
        <!-- bar -->

        <!-- last gap -->
        <div class="gap gap-last" v-if="level === standards.length - 2">
          <div class="vip-tag">VIP{{ level + 1 }}</div>
        </div>
        <!-- last gap -->
      </div>
      <!-- 10 bars and gaps -->
    </div>
  </div>
</template>

<script setup>
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
</style>
