<template>
  <main>
    <div class="content">
      <lottie-animation
        path="assets/JSON/bulb.json"
        :loop="false"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <img src="@/assets/images/ans12.png" alt="" />
      x indicates the instance a page fault has occurred. <br />
      The page that has freshly been loaded into a frame and thus caused a page
      fault is indicated in green. <br />
      Thus total number of page faults = number of x = 10.
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

  background: rgb(187, 218, 187);

  .content {
    font: var(--content-font);
    img {
      width: 100%;
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    margin-top: 2rem;
  }
}
</style>
