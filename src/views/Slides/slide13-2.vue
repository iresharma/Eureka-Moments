<template>
  <main>
    <lottie-animation
      path="assets/JSON/turing.json"
      :loop="true"
      :delay="2"
      :autoPlay="true"
      :speed="1"
      height="300"
    />
    <h1>
      so which one of the following is not Turing complete (multiple answers):
    </h1>
    <a-checkbox-group
      v-model="checkedList"
      :options="plainOptions"
      @change="onChange"
    />
    <a-button size="large" icon="right" shape="round" @click="check"
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
  data() {
    return {
      plainOptions: [
        "Conway's Game of Life (zero person game)",
        "MS Powerpoint",
        "HTML5+CSS3",
        "HTML5",
        "C++",
        "XML, JSON",
        "MS Excel",
      ],
      checkedList: [],
    };
  },
  methods: {
    check() {
      if (this.checkedList.includes("HTML5"))
        this.$store.commit("INCREMENT_SCORE");

      if (this.checkedList.includes("XML, JSON"))
        this.$store.commit("INCREMENT_SCORE");

      this.$store.commit("INCREMENT_STATE");
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 2rem;
  }
}
</style>
