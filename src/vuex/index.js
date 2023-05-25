const vipModule = {
  state() {
    return {
      vipLevel: 0,
      recharge: 0,
      validBetting: 0,

      standards: [
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
      ],
    };
  },
  mutations: {
    setVipLevel(state) {
      const nextLevel = state.standards.findIndex((nextLevel) => {
        if (state.validBetting < state.recharge)
          return state.validBetting < nextLevel || state.recharge < nextLevel;
        else return state.recharge < nextLevel || state.recharge < nextLevel;
      });
      if (nextLevel === -1) state.vipLevel = state.standards.length - 1;
      else state.vipLevel = nextLevel - 1;
    },
    setRecharge(state, payload) {
      state.recharge += payload;
    },
    setValidBet(state, payload) {
      state.validBetting += payload;
    },
  },
  getters: {
    vipLevel(state) {
      return state.vipLevel;
    },
    nextLevel(state) {
      if (state.vipLevel === state.standards.length - 1) return null;
      return state.vipLevel + 1;
    },

    standards(state) {
      return state.standards;
    },
    recharge(state) {
      return state.recharge;
    },
    validBetting(state) {
      return state.validBetting;
    },
  },
  actions: {
    loadLevel(context) {
      context.commit("setVipLevel");
    },

    addRecharge(context, payload) {
      context.commit("setRecharge", payload);
      context.dispatch("loadLevel");
    },

    addValidBet(context, payload) {
      context.commit("setValidBet", payload);
      context.dispatch("loadLevel");
    },
  },
};

export default vipModule;
