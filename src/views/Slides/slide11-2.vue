<template>
  <div class="main">
    <div class="hor">
      <lottie-animation
        path="assets/JSON/counter.json"
        :loop="true"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <div>
        Based on what you learned from the previous slide, determine the maximum
        possible range of a cascade of 3 n-bit-counter specifically in the n-bit
        binary counter?
        <div class="options">
          <a-radio-group v-model="value">
            <a-radio :style="radioStyle" :value="1">
              0 to 2<sup>n</sup>
            </a-radio>
            <a-radio :style="radioStyle" :value="2">
              0 to 2<sup>n-1</sup></a-radio
            >
          </a-radio-group>
          <a-radio-group v-model="value">
            <a-radio :style="radioStyle" :value="3">
              0 to 2<sup>3n-1</sup></a-radio
            >
            <a-radio :style="radioStyle" :value="4">
              0 to 2<sup>3n</sup> -1</a-radio
            >
          </a-radio-group>
        </div>
      </div>
    </div>
    <a-button size="large" icon="right" shape="round" @click="check"
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
  data() {
    return {
      value: null,
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px",
      },
    };
  },
  methods: {
    check() {
      if (this.value !== null) {
        if (this.value === 4) this.$store.commit("INCREMENT_SCORE");
        this.$store.commit("INCREMENT_STATE");
      } else this.showConfirm();
    },
    showConfirm() {
      let self = this;
      this.$confirm({
        title: "Do you want to move without solving?",
        content: "Once clicked you can not come back to this question",
        onOk() {
          self.$store.commit("INCREMENT_STATE");
        },
        onCancel() {},
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;

  .hor {
    display: grid;
    grid-template-columns: 1fr 2fr;

    div {
      font: var(--content-font);

      .options {
        width: 50%;
        margin-top: 3rem;

        display: flex;
        justify-content: space-between;

        .ant-radio-group.ant-radio-group-outline.ant-radio-group-default {
          label {
            font-family: monospace;
            font-size: 1rem;
            font-weight: bold;
          }
        }
      }
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 5%;
  }
}
</style>
