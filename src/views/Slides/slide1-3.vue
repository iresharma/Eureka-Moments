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
        ANS: 1,7
        <br />
        everyone got 8 pieces of rotis. 1st worker gets 1 gold coin since (3
        Rotis piled up and divided into 3 pieces makes 3*3=9 pieces among which
        only 1 piece was given to the hungry man while he had the 8 pieces for
        himself. 2nd worker gets 7 coins in the same logic 5*3=15, 15-8 =7.
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
