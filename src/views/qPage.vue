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
    <div class="content">
      <transition name="fade" mode="out-in">
        <component :is="slide" />
      </transition>
    </div>
  </div>
</template>

<script>
import slide1_1 from "./Slides/slide1-1.vue";
import slide1_2 from "./Slides/slide1-2.vue";
import slide1_3 from "./Slides/slide1-3.vue";
import slide2_1 from "./Slides/slide2-1.vue";
import slide2_2 from "./Slides/slide2-2.vue";
import slide3_1 from "./Slides/slide3-1.vue";
import slide3_2 from "./Slides/slide3-2.vue";
import slide4_1 from "./Slides/slide4-1.vue";
import slide4_2 from "./Slides/slide4-2.vue";
import slide5_1 from "./Slides/slide5-1.vue";
import blank from "./Slides/blank.vue";
export default {
  components: {
    slide1_1,
    slide1_2,
    slide1_3,
    slide2_1,
    slide2_2,
    slide3_1,
    slide3_2,
    slide4_1,
    slide4_2,
    slide5_1,
    blank,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    title() {
      let q = Number(this.$store.state.question);
      console.log(q);
      return this.quesJSON[q - 1].title;
    },
    subtitle() {
      let q = Number(this.$store.state.question);
      return this.quesJSON[q - 1].subtitle;
    },
    slide() {
      let q = Number(this.$store.state.question);
      let s = Number(this.$store.state.state);
      return this.quesJSON[q - 1].slides[s - 1];
    },
  },
  data() {
    return {
      quesJSON: [
        {
          title: "General Riddles",
          subtitle: "To get the mind motors running",
          slides: [slide1_1, slide1_2, slide1_3],
        },
        // Aptitude ques================================================
        {
          title: "Aptitude",
          subtitle: "FAANG be watching",
          slides: [slide2_1, slide2_2],
        },
        {
          title: "Aptitude",
          subtitle: "FAANG be watching",
          slides: [slide3_1, slide3_2],
        },
        {
          title: "Aptitude",
          subtitle: "FAANG be watching",
          slides: [slide4_1, slide4_2],
        },
        // Numberical ques================================================
        {
          title: "Numerical",
          subtitle: "Unleash your inner Mathematician",
          slides: [slide5_1],
        },
        {
          title: "Numerical",
          subtitle: "Unleash your inner Mathematician",
          slides: [blank],
        },
        {
          title: "Numerical",
          subtitle: "Unleash your inner Mathematician",
          slides: [blank],
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

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
