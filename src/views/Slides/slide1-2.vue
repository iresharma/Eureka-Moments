<template>
  <div class="main">
    <div class="grid">
      <div class="text">
        How should the gold coins be shared among the 2 workers so as to make a
        fair judgment. worker 1 gets____ coin(s) and worker 2 gets ____ coin(s).
      </div>
      <lottie-animation
        path="assets/JSON/coins.json"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      />
    </div>
    <div class="inputs">
      <div class="input">
        <div class="label">Worker 1:</div>
        <a-input-number
          size="large"
          :min="0"
          :max="10"
          :default-value="3"
          @change="(event) => input(event, 1)"
        />
      </div>

      <div class="input">
        <div class="label">Worker 2:</div>
        <a-input-number
          size="large"
          :min="0"
          :max="10"
          :default-value="3"
          @change="(event) => input(event, 2)"
        />
      </div>
      <a-popconfirm
        title="Are you sure you want to submit?"
        ok-text="Yes"
        cancel-text="No"
        @confirm="confirm"
      >
        <a href="#">Check</a>
      </a-popconfirm>
    </div>
    <div class="button-bar">
      <a-button
        size="large"
        icon="left"
        shape="round"
        @click="$store.commit('DECREMENT_STATE')"
        >Back</a-button
      >
      <a-button
        size="large"
        icon="right"
        shape="round"
        @click="$store.commit('INCREMENT_STATE')"
        >Next</a-button
      >
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  components: {
    LottieAnimation,
  },
  data() {
    return {
      worker1: null,
      worker2: null,
    };
  },
  methods: {
    input(val, ind) {
      if (ind == 1) this.worker1 = val;
      else this.worker2 = val;
    },
    confirm() {
      if (this.worker1 === 1 && this.worker2 === 7) {
        this.$store.commit("INCREMENT_SCORE");
      }
      this.$store.commit("INCREMENT_STATE");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap");
.main {
  padding: 5rem;

  .grid {
    display: grid;
    grid-template-columns: 5fr 1fr;

    .text {
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: "Ubuntu", sans-serif;
      font-weight: 600;
      font-size: 2em;
    }
  }

  .inputs {
    display: flex;
    justify-content: space-evenly;
    padding: 5rem;

    .input {
      font-family: v-sans;
      font-weight: 600;
      font-size: 2em;
      display: flex;

      .label {
        margin-right: 1rem;
      }
    }
  }

  .button-bar {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
}
</style>
