<template>
  <main class="ans">
    <div class="content">
      <lottie-animation
        path="assets/JSON/bulb.json"
        :loop="false"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <div class="text">
        The correct answer is Mathematics <br />
        this can be solved by rearranging the &sum; n { &sum; n = n(n+1)/2 }
        formula and solving the quadratic for n and the floor of the positive
        value of n.
      </div>
    </div>
    <a-button
      size="large"
      icon="right"
      shape="round"
      @click="$store.commit('INCREMENT_QUES')"
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
