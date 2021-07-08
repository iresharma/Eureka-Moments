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
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Molestias, nesciunt.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Molestias, nesciunt.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Molestias, nesciunt.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Molestias, nesciunt.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Molestias, nesciunt.
            </li>
          </ul>
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
          this.$router.push(`qPage/${localStorage.getItem("qNum")}`);
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
      this.$router.push("qPage/1.1");
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

  background-color: #fdc741;

  .fancy-heading {
    font-family: "Amatic SC", cursive;
    font-size: 5em;
    margin-bottom: 0.5em;
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

      ul {
        li {
          font-size: 24px;
          font-family: v-mono;
        }
      }
    }
  }
}
</style>
