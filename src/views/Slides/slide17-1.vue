<template>
  <div class="main">
    <div class="hor">
      <div class="content">
        You are a shopkeeper and you have ‘i’ teddy bears which are numbered,
        now you are supposed to put all teddy from 1 to me such that nth row has
        n teddies:
        <pre>
            1
            2,3
            4,5,6
            7,8,9,10
        </pre>
        But you are a curious person and want to figure out the number of rows
        it’ll take before you start. So you sit and write a code that can do
        that.
      </div>
      <div class="options">
        <a-radio-group v-model="value">
          <a-radio :style="radioStyle" :value="1"> Iteration </a-radio>
          <a-radio :style="radioStyle" :value="2"> Mathematics</a-radio>
        </a-radio-group>
        <a-radio-group v-model="value">
          <a-radio :style="radioStyle" :value="3"> Recurrsion</a-radio>
          <a-radio :style="radioStyle" :value="4"> Dynamic Programming</a-radio>
        </a-radio-group>
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
    bottom: 5%;
  }
}
</style>
