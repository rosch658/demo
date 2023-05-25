<template>
  <div class="progress-container">
    <div
      :class="classname"
      :style="{
        width: value + '%',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["value", "mode", "classNames"],
  computed: {
    classname() {
      if (this.mode === "big-bar") {
        return {
          "progress-big": true,
          ...this.classNames,
        };
      } else
        return {
          "progress-regular": true,
        };
    },
  },
};
</script>

<style scoped>
.progress-container {
  width: 100%;
  border: 0.1rem solid rgb(38, 54, 66);
}

.progress-container-regular {
  background: rgb(38, 54, 66);
  border-radius: 2.5rem;
}

.progress-regular {
  height: 1rem;
  border-radius: 25rem;
  background: linear-gradient(90deg, rgb(136, 181, 254), rgb(54, 124, 239));
  transition: width 0.3s ease-out;
}

.progress-container-big {
  border-radius: 0;
  background: rgb(53, 69, 89);
  border: 0.1rem solid rgb(53, 69, 89);
}

.progress-first {
  border-top-left-radius: 25rem;
  border-bottom-left-radius: 25rem;
  border-right: none;
}

.progress-middle {
  border-left: none;
  border-right: none;
}

.progress-last {
  border-top-right-radius: 25rem;
  border-bottom-right-radius: 25rem;
  border-left: none;
}

.progress-big {
  height: 1.3rem;
  transition: all 0.3s ease-out;
}

.progress-first .progress-big {
  border-top-left-radius: 25rem;
  border-bottom-left-radius: 25rem;
}

.progress-last .progress-big {
  border-top-right-radius: 25rem;
  border-bottom-right-radius: 25rem;
}

.filled {
  background: rgb(136, 181, 254);
}
</style>
