<template>
  <div class="main">
    <div class="grid">
      <div>
        <lottie-animation
          path="assets/JSON/choco.json"
          :loop="true"
          :delay="2"
          :autoPlay="true"
          :speed="1"
          height="300"
        />
      </div>
      <div class="content">
        Jack has 3 different types of chocolates. Jake, his friend, wants to
        know how many chocolates of each type Jack has. Jack says "There are all
        Dairy Milks(DM)- bar 5, all Kit-Kats(KK)- bar 6 and all Dark
        chocolates(DC)-bar 7”. Help Jake to figure out how many chocolates Jack
        has of each type.

        <a-alert
          message="(Hint: all DMs bar 5, means 5 chocolates are not dairy milk by taking the concept of complementation)"
          type="success"
          show-icon
        />
      </div>
    </div>
    <div class="inputs">
      <div class="input">
        <div class="label">KK:</div>
        <a-input-number
          size="large"
          :min="0"
          :max="10"
          :default-value="3"
          @change="(event) => input(event, 1)"
        />
      </div>

      <div class="input">
        <div class="label">DM:</div>
        <a-input-number
          size="large"
          :min="0"
          :max="10"
          :default-value="3"
          @change="(event) => input(event, 2)"
        />
      </div>

      <div class="input">
        <div class="label">DC:</div>
        <a-input-number
          size="large"
          :min="0"
          :max="10"
          :default-value="3"
          @change="(event) => input(event, 3)"
        />
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
      KK: null,
      DM: null,
      DC: null,
    };
  },
  methods: {
    input(val, ind) {
      if (ind == 1) this.KK = val;
      else if (ind == 2) this.DM = val;
      else this.DC = val;
    },
    check() {
      if (this.KK == 3 && this.DM == 2 && this.DC == 4) {
        this.$store.commit("INCREMENT_SCORE");
      }
      this.$store.commit("INCREMENT_STATE");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: 5rem;

  .grid {
    display: grid;
    grid-template-columns: 1fr 3fr;

    .content {
      font: var(--content-font);
    }
  }

  .inputs {
    display: flex;
    justify-content: space-evenly;
    padding: 5rem;

    .input {
      font-family: v-sans;
      font-weight: 600;
      font-size: 2em;
      display: flex;

      .label {
        margin-right: 1rem;
      }
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
  }
}
</style>
