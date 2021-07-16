<template>
    <div class="main">
        <div class="content">
            <p>
                Harry wants to design a circuit so that he can control the Stair-case light of his house which has 2 switches, one is at the top of the stairs and the other at the bottom of the stairs. Help Harry to select all the possible gate combinations for the staircase light:
                <strong>(There can be multiple answers)</strong>
            </p>
            <p>
                <strong>Inputs</strong>: Switch 1 ,2 & <strong>Output</strong> = Light
            </p>
        </div>
        <div class="options">
            <a-radio-group v-model="value">
              <!-- shit, make this checkbox to as it is multi correct -->
          <a-radio :style="radioStyle" :value="1"><image src="@/assets/images/q9_2A.jpeg" alt="A" /></a-radio>
          <a-radio :style="radioStyle" :value="2"><image src="@/assets/images/q9_2B.jpeg" alt="B" /></a-radio>
          <a-radio :style="radioStyle" :value="3"><image src="@/assets/images/q9_2C.jpeg" alt="C" /></a-radio>
          <a-radio :style="radioStyle" :value="4"><image src="@/assets/images/q9_2D.jpeg" alt="D" /></a-radio>
        </a-radio-group>
        </div>
        <a-button size="large" icon="right" shape="round" @click="check"
      >Next</a-button>
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
        if (this.value == 1) this.$store.commit("INCREMENT_SCORE");
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
  },
};
</script>