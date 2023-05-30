import { computed, ref } from "vue";
import useState from "./state";

const [recharge, setRecharge] = useState(0);
const [validBetting, setValidBet] = useState(0);
const vipLevel = ref(0);

export default function useData() {
  const standards = [
    0,
    100,
    100 * 2,
    100 * 3,
    100 * 4,
    100 * 5,
    100 * 6,
    100 * 7,
    100 * 8,
    100 * 9,
    100 * 10,
  ];

  const nextLevel = computed(() => {
    if (vipLevel.value === standards.length - 1) return null;
    return vipLevel.value + 1;
  });
  const topLevel = computed(() => standards.length - 1);

  function toPeso(item) {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(item);
  }

  function setVipLevel() {
    const nextLevel = standards.findIndex((nextLevel) => {
      if (validBetting.value < recharge.value)
        return validBetting.value < nextLevel || recharge.value < nextLevel;
      else return recharge.value < nextLevel || recharge.value < nextLevel;
    });
    if (nextLevel === -1) vipLevel.value = standards.length - 1;
    else vipLevel.value = nextLevel - 1;
  }

  return {
    vipLevel,
    setVipLevel,
    recharge,
    setRecharge,
    validBetting,
    setValidBet,
    standards,
    nextLevel,
    topLevel,
    toPeso,
  };
}
