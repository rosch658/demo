import { ref } from "vue";

export default function useState(initialState) {
  const state = ref(initialState);

  const setState = function (newStateFn) {
    state.value = newStateFn;
  };

  return [state, setState];
}
