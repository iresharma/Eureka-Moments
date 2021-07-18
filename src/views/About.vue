<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="About & Instructions"
      sub-title="How it works"
    >
      <template slot="extra">
        <span key="2">
          {{ user.displayName }}
        </span>
        <a-avatar key="1" v-if="user.photoURL" :src="user.photoURL" />
        <a-avatar
          key="1"
          v-else
          style="color: #f56a00; backgroundcolor: #fde3cf"
        >
          {{ initials() }}
        </a-avatar>
      </template>
    </a-page-header>
    <main class="content">
      <h3 class="fancy-heading">Instructions</h3>
      <div class="grid">
        <div class="instructions">
          Welcome to <b>EUREKA MOMENTS </b> <br />
          A place for fun and learning. We intend to bring to you some concepts
          and ideas that are relevant and requisite to your routine as an IEEE
          member or rather, an ardent individual. <br />
          You will be facing a set of 3 walls at every level. <br />
          The first wall builds the basic idea and projects your task. <br />
          The second wall builds up as a question based on what you just
          understood. Try not to jump this wall. <br />
          The third, reveals to you the applicable materials and gives you the
          "Eureka moment" as you embrace epiphany.
          <br />
          This will follow for various levels of the event. Be mindful, for once
          a wall is broken it cannot be undone. <br />
          Do not try to jump the wall, for not the first but the best answers
          win. However, it is not mandatory that you answer all the questions
          and you are still a winner if you've learnt something new today!
          <br />
          Your moments of learning with fun begins as you choose to start. Also,
          do not worry about saving the references ,we will provide you with all
          of them at the end of the event. Have fun BUZZING and exclaiming
          EUREKA! after solving.

          <a-button :loading="!start" type="primary" icon="fire" @click="move">
            Start
          </a-button>
        </div>
        <lottie-animation
          path="assets/JSON/instruction.json"
          :loop="true"
          :autoPlay="true"
          :speed="1"
          height="600"
        />
      </div>
    </main>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import FirebaseApp from "../firebaseConfig";
export default {
  components: {
    LottieAnimation,
  },
  data() {
    return {
      start: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  beforeMount() {
    FirebaseApp.db
      .collection("admin")
      .doc("admin")
      .onSnapshot((data) => {
        this.start = data.data().start;
        if (data.data().start && localStorage.getItem("qNum")) {
          this.$store.state.question = Number(
            localStorage.getItem("qNum").split(".")[0]
          );
          this.$store.state.state = Number(
            localStorage.getItem("qNum").split(".")[1]
          );
          this.$router.push(`qPage`);
        }
      });
  },
  methods: {
    initials() {
      let initials = "";
      if (this.user.displayName.includes(" ")) {
        initials =
          this.user.split(" ")[0][0] + " " + this.user.split(" ")[1][0];
        return initials.toUpperCase();
      } else {
        return this.user.displayName[0].toUpperCase();
      }
    },
    move() {
      localStorage.setItem("qNum", 1.1);
      this.$router.push("qPage");
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--primary-color);

  .fancy-heading {
    font-family: "Amatic SC", cursive;
    font-size: 5em;
    margin-bottom: 20px;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: 2fr 1fr;

    .instructions {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      font-size: 1em;
      font-family: monospace;

      padding: 2rem;
    }
  }
}
</style>
