<template>
  <div class="detail-container">
    <div class="text-blue">
      {{ vipCaption }}
    </div>
    <div class="detail-grid">
      <span>Cumulative Recharge</span>
      <SingleBar
        :value="cumulateRechargeRate"
        class="progress-container-regular"
      />
      <span class="text-blue">
        Need to recharge about {{ pesoNeedRecharge }}
      </span>
      <div>Valid Bet</div>
      <SingleBar :value="cumulateBetRate" class="progress-container-regular" />
      <div class="text-blue">
        A valid bet of about {{ pesoRequiredBet }} is required
      </div>
    </div>
  </div>
</template>

<script setup>
const { vipLevel, charge, standards, nextLevel, toPeso, topLevel } = useData();

const isTopValue = computed(() => vipLevel.value === topLevel.value);

const vipCaption = computed(() => {
  return isTopValue.value
    ? "You are the TOP VIP"
    : `Distance to the next level: VIP${nextLevel.value}`;
});

const nextLevelStandard = computed(() => standards[nextLevel.value]);

const needRecharge = computed(() => {
  if (nextLevelStandard.value > charge.recharge) {
    return nextLevelStandard.value - charge.recharge;
  } else return 0;
});
const requiredBet = computed(() => {
  if (nextLevelStandard.value > charge.validBetting) {
    return nextLevelStandard.value - charge.validBetting;
  } else return 0;
});
const pesoNeedRecharge = computed(() => {
  if (isTopValue.value) return toPeso(0);
  return toPeso(needRecharge.value);
});
const pesoRequiredBet = computed(() => {
  if (isTopValue.value) return toPeso(0);
  return toPeso(requiredBet.value);
});

const cumulateRechargeRate = computed(() => {
  if (isTopValue.value || charge.recharge > nextLevelStandard.value) return 100;
  else {
    return Math.round((charge.recharge / nextLevelStandard.value) * 100);
  }
});
const cumulateBetRate = computed(() => {
  if (isTopValue.value || charge.validBetting > nextLevelStandard.value)
    return 100;
  else {
    return Math.round((charge.validBetting / nextLevelStandard.value) * 100);
  }
});
</script>

<style scoped>
.detail-container {
  background-color: rgb(19, 33, 45);
  font-size: 1.8rem;
  letter-spacing: 0.025em;
  padding: 3rem 6rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: 16.5rem 2fr 3fr;
  align-items: center;
  gap: 1.2rem 2rem;
}

.text-blue {
  color: rgb(136, 181, 254);
}
</style>
