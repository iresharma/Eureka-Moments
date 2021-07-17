<template>
  <div class="main">
    <div class="logos">
      <h1 class="adroit">Adroit</h1>
      <h1 class="adroit">v/s</h1>
      <h1 class="adroit">Inspiro</h1>
    </div>
    <div class="statement">If ADROIT : AEPREY then INSPIRO : ?</div>
    <input type="text" placeholder="Inspiro ?" v-model="ans" />
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
        if (this.ans === "IOQSDWI") this.$store.commit("INCREMENT_SCORE");
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

  .logos {
    width: 80%;

    display: flex;
    justify-content: space-evenly;

    .adroit {
      font-family: "Kaushan Script", cursive;
      font-size: 4em;
      color: red;
    }
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
