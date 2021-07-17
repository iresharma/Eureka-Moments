<template>
  <main>
    <div class="grid">
      <lottie-animation
        path="assets/JSON/num1.json"
        :loop="false"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <div>
        Mathematics is the study of patterns! From the beginning of time, humans
        have been looking for patterns all around them! Wait, is it just humans?
        (Do your research to know more!) <br />
        If a pattern in nature can be mathematically modeled and if the model is
        consistent everywhere in the universe, your model becomes a law! Famous
        Indian mathematician Srinivasa Ramanujana worked on infinite series,
        continued fractions, number theory etc. <br />
        &sum;k = n(n+1)/2 summation K upto n <br />
        &sum;k^2 = n(n+1)(2n+1)/6 summation k^2 upto n
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
  margin: 5rem;
  font: var(--content-font);

  .grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .ant-btn {
    position: absolute;
    bottom: 4%;
    right: 4rem;
  }
}
</style>
