<template>
  <div id="app">
    <router-view />
    <footer>Made with ❤️ by NISB</footer>
  </div>
</template>

<style lang="scss">
footer {
  width: 100%;
  text-align: center;
  background: #fff;
  position: fixed;
  bottom: 0;
  font-family: v-sans;
  font-weight: 600;
}
</style>

<script>
export default {
  beforeMount() {
    let user = localStorage.getItem("user");
    this.$store.commit("SET_USER", JSON.parse(user));
    this.$store.state.question = Number(
      localStorage.getItem("qNum").split(".")[0]
    );
    this.$store.state.state = Number(
      localStorage.getItem("qNum").split(".")[1]
    );
  },
};
</script>
