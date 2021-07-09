<template>
  <div class="home">
    <img src="../assets/images/homeBG.jpg" alt="" />
    <div class="content">
      <span class="fancy-heading"> Eureka Moments </span>
      <div class="form">
        <a-input v-model="email" placeholder="Email">
          <a-icon slot="prefix" type="user" />
          <a-tooltip slot="suffix" title="Enter Email for Login">
            <a-icon type="info-circle" style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </a-input>
        <br /><br />
        <a-input-password placeholder="input password" v-model="password" />
        <br /><br />
        <div class="buttons">
          <a-button
            @click="googleLogin"
            type="danger"
            shape="circle"
            icon="google"
            style="margin-right: 0.4rem"
          />
          <a-button type="primary" icon="block" @click="emailLogin">
            Login
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseApp from "../firebaseConfig";
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    emailLogin() {
      FirebaseApp.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => this.saveUser(data.user))
        .catch((err) => {
          console.log(err);
          if (err.code === "auth/email-already-in-use") {
            FirebaseApp.auth
              .signInWithEmailAndPassword(this.email, this.password)
              .then((data) => this.saveUser(data.user))
              .catch((err) =>
                this.$notification.error({
                  message: "Authentication Error",
                  description: err.message,
                })
              );
          } else
            this.$notification.error({
              message: "Authentication Error",
              description: err.message,
            });
        });
    },
    googleLogin() {
      var provider = new FirebaseApp.googProvide.GoogleAuthProvider();
      FirebaseApp.auth
        .signInWithPopup(provider)
        .then((data) => this.saveUser(data.user))
        .catch((err) =>
          this.$notification.error({
            message: "Authentication Error",
            description: err.message,
          })
        );
    },
    saveUser(user) {
      let appUser = {
        email: user.email,
        displayName: user.displayName ?? user.email,
        photoURL: user.photoURL,
      };
      localStorage.setItem("logged", true);
      this.$store.commit("SET_USER", appUser);
      this.$router.push("/about");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
.home {
  background-color: var(--primary-color);
  height: 100vh;
  display: flex;
  justify-content: space-between;

  img {
    height: 100vh;
    width: 70vw;
  }

  .content {
    width: 100%;
    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .fancy-heading {
      font-family: "Amatic SC", cursive;
      font-size: 5em;
      margin-bottom: 0.5em;
    }

    .form {
      margin: 0.5rem;
      width: 75%;

      .buttons {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
