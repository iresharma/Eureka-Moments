<template>
  <main>
    <div class="content">
      <lottie-animation
        path="assets/JSON/num1.json"
        :loop="true"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <div class="text">
        In Mathematics, Parity is the property of an integer. An integer parity
        is even if it is divisible by 2 with no remainders left and its parity
        is odd if it isn't; that is the remainder is 1.
      </div>
    </div>
    <a-button
      size="large"
      icon="right"
      shape="round"
      @click="$store.commit('INCREMENT_STATE')"
      >Next</a-button
    >
  </main>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  components: {
    LottieAnimation,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 5rem;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font: var(--content-font);
    text-align: center;
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    margin-top: 2rem;
  }
}
</style>
