<template>
  <div class="main">
    <div class="hor">
      <img src="@/assets/images/q4_1.jpeg" alt="" />
      <div>
        <p>
          Pradyoth, Adeep, and Elon are outside discussing theology. One of them
          is a saint who always tells the truth, one of them is a devil who
          always lies, and one of them is a human who can either tell the truth
          or tell a lie.
        </p>
        <p>
          Pradyoth says: <i>"I am a human."</i> <br />
          Adeep says: <i>"Pradyoth is a devil."</i> <br />
          Elon says: <i>"Adeep is a saint."</i> <br /><br /><br />
          <strong>Who is the human?</strong> <br />
        </p>
        <div class="options">
          <a-radio-group v-model="value">
            <a-radio :style="radioStyle" :value="1"> Pradyoth </a-radio>
            <a-radio :style="radioStyle" :value="2"> Adeep</a-radio>
            <a-radio :style="radioStyle" :value="3"> Elon</a-radio>
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
        if (this.value === 3) this.$store.commit("INCREMENT_SCORE");
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
      width: 40%;
    }

    div {
      padding: 1.5rem;
      font-family: v-sans;
      font-weight: bold;
      font-size: 1.3em;

      .options {
        width: 50%;

        display: flex;
        justify-content: space-between;

        .ant-radio-group.ant-radio-group-outline.ant-radio-group-default {
          label {
            font-family: v-mono;
            font-size: 1.3rem;
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
