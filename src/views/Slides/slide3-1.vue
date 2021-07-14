<template>
  <div class="main">
    <div class="hor">
      <img src="@/assets/images/q3_1.png" alt="" />
      <div>
        <code>
          ‘A @ B’ means ‘A is not smaller than B’<br />
          ‘A # B’ means ‘A is neither smaller than nor equal to B’ <br />
          ‘A % B’ means ‘A is neither smaller than nor greater than B’ <br />
          ‘A $ B’ means ‘A is not greater than B’ <br />
          ‘A * B’ means ‘A is neither greater than nor equal to B’ <br />

          <b>
            "Given the following set of true statements and conculsions Select
            an option"
          </b>
          <br />
          // Statements C#D, A@B, D*E, B%C <br />
          // Conclusions (1) A@C (2) C#E <br />
        </code>
        <div class="options">
          <a-radio-group v-model="value">
            <a-radio :style="radioStyle" :value="1">
              Only conclusion 1 is true
            </a-radio>
            <a-radio :style="radioStyle" :value="2">
              Only conclusion 2 is true</a-radio
            >
          </a-radio-group>
          <a-radio-group v-model="value">
            <a-radio :style="radioStyle" :value="3">
              Either conclusion 1 or 2 is true</a-radio
            >
            <a-radio :style="radioStyle" :value="4">
              Neither conclusion 1 nor 2 is true</a-radio
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
export default {
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
        if (this.value === 1) this.$store.commit("INCREMENT_SCORE");
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
    bottom: 5rem;
  }
}
</style>
