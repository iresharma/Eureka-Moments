<template>
  <div class="main">
    <div class="hor">
      <lottie-animation
        path="assets/JSON/num2-2.json"
        :loop="true"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <div>
        <code>
          Currently, the incubator has 99 bubbles distributed as 43 yellow,33
          green,23 blue. Bubbles combine in pairs until only one is left.
          <br /><br />
          <ol type="i">
            <li>
              A yellow bubble and A green bubble combine to make a blue bubble.
            </li>
            <li>
              A green bubble and A blue bubble combine to make a yellow bubble.
            </li>
            <li>
              A blue bubble and A yellow bubble combine to make a green bubble.
            </li>
          </ol>
          <br />
          For each fusion, the bubble from the largest piles will fuse first, if
          two piles have the same number of bubbles, then a bubble comes out
          from one at random. You have given one yellow, one green, and one blue
          bubble, you can add only one bubble so that finally a blue bubble
          remains after all the fusions. So what color bubble will you add to
          get the blue bubble?
        </code>
        <div class="options">
          <a-radio-group v-model="value">
            <a-radio :style="radioStyle" :value="1"> Yellow </a-radio>
            <a-radio :style="radioStyle" :value="2"> Blue</a-radio>
          </a-radio-group>
          <a-radio-group v-model="value">
            <a-radio :style="radioStyle" :value="3"> Green</a-radio>
            <a-radio :style="radioStyle" :value="4"> None of the above</a-radio>
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
        if (this.value === 2) this.$store.commit("INCREMENT_SCORE");
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
    display: flex;
    align-items: center;

    img {
      // height: 100%;
      width: 50%;
    }

    div {
      code {
        ol {
          li {
            font-weight: bold;
          }
        }
      }

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
