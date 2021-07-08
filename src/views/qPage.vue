<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      :title="title"
      :sub-title="subtitle"
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
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    title() {
      let q = Number(this.$route.params.state.split(".")[0]);
      console.log(q);
      return this.quesJSON[q].title;
    },
    subtitle() {
      let q = Number(this.$route.params.state.split(".")[0]);
      return this.quesJSON[q].subtitle;
    },
  },
  data() {
    return {
      quesJSON: [
        {},
        {
          title: "General Riddles",
          subtitle: "To get the mind motors running",
        },
      ],
    };
  },
  beforeMount() {
    console.log(this.$route.params.state);
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
  },
};
</script>
