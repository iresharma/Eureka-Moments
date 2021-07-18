<template>
  <div class="main">
    <div class="content">What does this BF code do?</div>
    <img src="@/assets/images/carbon-6.png" alt="" />
    <div class="options">
      <a-radio-group v-model="value">
        <a-radio :style="radioStyle" :value="1"> power of 2 </a-radio>
        <a-radio :style="radioStyle" :value="2"> multiplication</a-radio>
      </a-radio-group>
      <a-radio-group v-model="value">
        <a-radio :style="radioStyle" :value="3"> division</a-radio>
        <a-radio :style="radioStyle" :value="4"> modulo</a-radio>
      </a-radio-group>
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
        this.$store.commit("INCREMENT_QUES");
      } else this.showConfirm();
    },
    showConfirm() {
      let self = this;
      this.$confirm({
        title: "Do you want to move without solving?",
        content: "Once clicked you can not come back to this question",
        onOk() {
          self.$store.commit("INCREMENT_QUES");
        },
        onCancel() {},
      });
    },
  },
};
</script>

<style lang="scss">
.main {
  padding: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  

  .content {
    font: var(--content-font);
  }

  img {
    width: 60%;
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

  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 5%;
  }
}
</style>
