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
        ANS: (b) Blue Bubble <br />
        Explanation: You need to get Even Parity

        <p>
          Right now all the bubbles are odd (green,yellow,blue) and you get to
          add one bubble(one particular color) so that its parity changes to
          even and other color bubbles will have the parity odd. Whichever
          colored bubble we add its parity will be opposite to that of the other
          two colors. Here we want the parity of yellow,green and blue as 0, 0,
          1 respectively, so that at the end only 1 blue bubble is left and to
          do so we add 1 blue bubble to make its parity opposite from the other
          two colors from the beginning. So after all the fusions only one
          single blue bubble remained which answers our question. 
        </p>
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
