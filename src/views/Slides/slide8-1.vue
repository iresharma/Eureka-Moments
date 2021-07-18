<template>
  <div class="main">
    <div class="hor">
      <div>
        <img src="@/assets/images/8_1.png" alt="" />
      </div>
      <div>
        A seven-segment display is a form of an electronic display device for
        displaying decimal numerals that is an alternative to the more complex
        dot matrix displays.
        <br />

        When the particular segment is enabled, the LED lights up! To display
        the number 8 all segments must be logical high. abcdefgh = 11111110

        <p>
          Write a hexadecimal equivalent to display ‘IEEE’ using 4 7-segment
          displays.
          <br /><br />
          <input type="text" placeholder="I" v-model="i" />
          <input type="text" placeholder="E" v-model="e" />
          <input type="text" placeholder="E" v-model="e" />
          <input type="text" placeholder="E" v-model="e" />
        </p>
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
      i: null,
      e: null,
    };
  },
  methods: {
    check() {
      if (
        this.i !== null &&
        this.e !== null &&
        this.i !== "" &&
        this.e !== ""
      ) {
        if (
          this.i.toLowerCase() === "0x60" &&
          this.e.toLowerCase() === "0x6e"
        ) {
          this.$store.commit("INCREMENT_SCORE");
        }
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
  margin: 2em;

  .hor {
    display: flex;
    align-items: center;

    img {
      // height: 100%;
      width: 30vw;
    }

    div {
      padding: 2rem;
      font: var(--content-font);

      p {
        input {
          border: 0.213rem solid #ccc;
          border-radius: 3rem;

          width: 20%;
          margin: 0.3rem;
          height: 3rem;
          font: var(--content-font);

          padding: 1rem;
        }

        input:focus {
          border: 0.213rem solid blue;
          border-radius: 3rem;
        }

        input:placeholder {
          font: var(--content-font);
        }
      }
    }
  }

  .ant-btn {
    position: absolute;
    right: 4rem;
  }
}
</style>
