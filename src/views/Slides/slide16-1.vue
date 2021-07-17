<template>
  <main>
    <div class="grid">
      <lottie-animation
        path="assets/JSON/intern.json"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      />
      <div class="content">
        You are hired as an intern in a renowned firm. Apparently, your seniors
        want to test your ability and patience too. They have piled up a bunch
        of client files and have asked you to order them on the shelf
        alphabetically corresponding to their names.
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

  .grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;

    .content {
      font: var(--content-font);
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 5%;
  }
}
</style>
