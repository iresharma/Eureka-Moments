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
        Ans: (d) HTML5 & (f) XML, JSON <br />
        <br />
        Explanation: HTML5 is not Turing complete because it is just a markup
        language, HTML is not something that "runs". It is a representation. It
        is a format. It is an information encoding. Not being a machine, it
        cannot compute anything on its own, at the level of Turing completeness
        or any other level. Similar to HTML5, XML and JSON just formats.
        Therefore they are not Turing complete.
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
