<template>
  <div class="main">
    <div class="content">What language is the given code written in?</div>
    <img src="@/assets/images/carbon-4.png" alt="" />
    <div class="options">
      <a-radio-group v-model="value">
        <a-radio :style="radioStyle" :value="1"> NASM </a-radio>
        <a-radio :style="radioStyle" :value="2"> perl</a-radio>
      </a-radio-group>
      <a-radio-group v-model="value">
        <a-radio :style="radioStyle" :value="3"> ook!</a-radio>
        <a-radio :style="radioStyle" :value="4"> BF</a-radio>
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
