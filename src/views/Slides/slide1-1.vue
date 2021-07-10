<template>
  <div class="main">
    <div class="grid1">
      <div class="content">
        A hungry man walks up to 2 construction workers having lunch beside an
        empty road. After listening to the hungry man, they decide to share the
        food they had. The 1st worker piles up 3 Rotis from his lunch box and
        the 2nd worker adds 5 Rotis from his box making a pile of 8 Rotis. They
        then cut the pile through into 3 equal parts.
      </div>

      <lottie-animation
        path="assets/JSON/poor.json"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      />
    </div>
    <div class="grid2">
      <lottie-animation
        path="assets/JSON/rich.json"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      />
      <div class="content">
        After their meal, the man reveals his identity and gives out 8 gold
        coins in return for the 8 roti pieces he had....
      </div>
    </div>
    <a-button
      size="large"
      icon="right"
      shape="round"
      @click="$store.commit('INCREMENT_STATE')"
      >Next</a-button
    >
  </div>
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
.main {
  padding: 5rem;

  .grid1 {
    display: grid;
    grid-template-columns: 5fr 1fr;
  }
  .grid2 {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    font: var(--content-font);
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
  }
}
</style>
