<template>
  <div class="test">
    <h1>Test</h1>
    <div>
      <ul class="list">
        <li v-for="(standard, level) in standards" :key="standard">
          Level {{ level }}: recharge {{ standard }} valid bet
        </li>
      </ul>
    </div>
    <div>
      <input type="number" v-model="rechargeInput" />
      <button @click="addRecharge">Recharge</button>
    </div>
    <div>
      <input type="number" v-model="validBetInput" />
      <button @click="addValidBet">Add valid bet</button>
    </div>
  </div>
</template>

<script setup>
const { standards, charge, setVipLevel } = useData();

const rechargeInput = ref(50);
const validBetInput = ref(50);

function addRecharge() {
  charge.recharge = charge.recharge + rechargeInput.value;
  setVipLevel();
}
function addValidBet() {
  charge.validBetting = charge.validBetting + validBetInput.value;
  setVipLevel();
}
</script>

<style scoped>
.test {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
}

ul {
  font-size: 1.6rem;
  list-style: none;
  padding: 0;
}
</style>
