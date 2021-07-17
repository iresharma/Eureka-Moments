<template>
  <div class="main">
    <div class="logos">
      Based on this concept <br />
      solve the number of Page faults for the given page reference <br />
      <code>string: 2,3,7,5,6,2,5,1,7,6,3,2,5,1</code> with 4 frames(3 pages can
      be in memory at a time per process)
    </div>
    <input type="text" placeholder="page faults ?" v-model="ans" />
    <a-button size="large" icon="right" shape="round" @click="check"
      >Next</a-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      ans: null,
    };
  },
  methods: {
    check() {
      if (this.ans !== null && this.ans !== "") {
        if (this.ans !== "10" && this.ans !== "10 faults")
          this.$store.commit("INCREMENT_SCORE");
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
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;

  .logos {
    font: var(--content-font);
    text-align: center;
  }

  .statement {
    font: var(--content-font);
    text-align: center;
    margin-bottom: 2.5em;
  }

  input {
    border: 0.213rem solid #ccc;
    border-radius: 3rem;

    width: 40%;
    height: 3rem;
    font: var(--content-font);

    padding: 1rem;
    margin-top: 3rem;
  }

  input:focus {
    border: 0.213rem solid blue;
  }

  input:placeholder {
    font: var(--content-font);
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 5%;
  }
}
</style>
