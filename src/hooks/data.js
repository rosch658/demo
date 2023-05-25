import { computed } from "vue";
import { useStore } from "vuex";

export default function useData() {
  const store = useStore();

  const standards = computed(() => store.getters.standards);

  const vipLevel = computed(() => store.getters.vipLevel);

  const nextLevel = computed(() => store.getters.nextLevel);

  const topLevel = computed(() => standards.value.length - 1);

  const recharge = computed(() => store.getters.recharge);

  const validBetting = computed(() => store.getters.validBetting);

  function toPeso(item) {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(item);
  }

  return {
    store,
    vipLevel,
    recharge,
    validBetting,
    standards,
    nextLevel,
    topLevel,
    toPeso,
  };
}
