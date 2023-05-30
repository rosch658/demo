<template>
  <div class="summerize">
    <div class="sum-container">
      <div class="img-box">
        <img :src="image" alt="current level" />
        <h1>{{ vipLevel }}</h1>
      </div>
      <div class="current-level-box">
        <div class="current-level">Current Level: VIP{{ vipLevel }}</div>
        <div>
          <span class="recharge">Recharge: {{ pesoRecharge }}</span>
          <span>Valid Betting: {{ pesoValidBetting }}</span>
        </div>
      </div>
    </div>
    <button>View VIP Details</button>
  </div>
</template>

<script setup>
import image from "@/img/去背2.png";

const { vipLevel, charge, toPeso } = useData();

const pesoRecharge = computed(() => {
  return toPeso(charge.recharge);
});

const pesoValidBetting = computed(() => {
  return toPeso(charge.validBetting);
});
</script>

<style scoped>
.summerize {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0 6rem 2rem;
}

.sum-container {
  display: flex;
  align-items: center;
}

.img-box {
  position: relative;
}

.img-box img {
  width: 10rem;
  /* margin: 0 2.5rem 0 1rem; */
}

.img-box h1 {
  font-size: 5rem;
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -55%);
}
.current-level-box {
  margin-left: 2rem;
}
.current-level {
  margin-bottom: 0.5rem;
}

.recharge {
  padding-right: 3rem;
}

button {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 4.8rem;
  cursor: pointer;

  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  background: linear-gradient(0deg, #002ae7, #008cdd) padding-box,
    linear-gradient(0deg, rgb(19, 0, 190), rgb(32, 222, 255)) border-box;
  border: 0.1rem solid transparent;
  border-radius: 0.8rem;
}
</style>
