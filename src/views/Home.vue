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
            type="danger"
            shape="circle"
            icon="google"
            style="margin-right: 0.4rem"
          />
          <a-button type="primary" icon="block"> Login </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
.home {
  background-color: #fdc741;
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
