<template>
  <div class="main">
    <div class="content">
      <p>
        Harry wants to design a circuit so that he can control the Stair-case
        light of his house which has 2 switches, one is at the top of the stairs
        and the other at the bottom of the stairs. Help Harry to select all the
        possible gate combinations for the staircase light:
        <strong>(There can be multiple answers)</strong>
      </p>
      <p>
        <strong>Inputs</strong>: Switch 1 ,2 & <strong>Output</strong> = Light
      </p>
    </div>
    <div class="options">
      <div class="row">
        <img @click="imgClick(1)" src="@/assets/images/q9_2A.png" alt="A" />
        <img @click="imgClick(2)" src="@/assets/images/q9_2B.png" alt="B" />
      </div>
      <div class="row">
        <img @click="imgClick(3)" src="@/assets/images/q9_2C.png" alt="C" />
        <img @click="imgClick(4)" src="@/assets/images/q9_2D.png" alt="D" />
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
        if (this.value === 1 && this.value === 3)
          this.$store.commit("INCREMENT_SCORE");
        this.$store.commit("INCREMENT STATE");
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
    imgClick(number) {
      if (number == 1) this.$store.commit("INCREMENT_SCORE");
      this.$store.commit("INCREMENT_STATE");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 5rem;

  .content {
    font: var(--content-font);
  }

  .row {
    display: flex;
    justify-content: space-around;

    img:hover {
      border: solid 2px black;
      border-radius: 3px;
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    margin-top: 2rem;
  }
}
</style>
