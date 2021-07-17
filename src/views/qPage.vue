<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); z-index: 999999"
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
import slide5_2 from "./Slides/slide5-2.vue";
import slide6_1 from "./Slides/slide6-1.vue";
import slide6_2 from "./Slides/slide6-2.vue";
import slide6_3 from "./Slides/slide6-3.vue";
import slide8_1 from "./Slides/slide8-1.vue";
import slide8_2 from "./Slides/slide8-2.vue";
import slide9_1 from "./Slides/slide9-1.vue";
import slide9_2 from "./Slides/slide9-2.vue";
import slide9_3 from "./Slides/slide9-3.vue";
import slide10_1 from "./Slides/slide10-1.vue";
import slide10_2 from "./Slides/slide10-2.vue";
import slide11_1 from "./Slides/slide11-1.vue";
import slide11_2 from "./Slides/slide11-2.vue";
import slide11_3 from "./Slides/slide11-3.vue";
import slide12_1 from "./Slides/slide12-1.vue";
import slide12_2 from "./Slides/slide12-2.vue";
import slide12_3 from "./Slides/slide12-3.vue";
import slide13_1 from "./Slides/slide13-1.vue";
import slide13_2 from "./Slides/slide13-2.vue";
import slide13_3 from "./Slides/slide13-3.vue";
import slide14_1 from "./Slides/slide14-1.vue";
import slide14_2 from "./Slides/slide14-2.vue";
import slide14_3 from "./Slides/slide14-3.vue";
import slide15_1 from "./Slides/slide15-1.vue";
import slide15_2 from "./Slides/slide15-2.vue";
import slide15_3 from "./Slides/slide15-3.vue";
import slide16_1 from "./Slides/slide16-1.vue";
import slide16_2 from "./Slides/slide16-2.vue";
import slide16_3 from "./Slides/slide16-3.vue";
import slide17_1 from "./Slides/slide17-1.vue";
import slide17_2 from "./Slides/slide17-2.vue";
import Done from "./Slides/Done.vue";
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
    slide5_2,
    slide6_1,
    slide6_2,
    slide6_3,
    slide8_1,
    slide8_2,
    slide9_1,
    slide9_2,
    slide9_3,
    slide10_1,
    slide10_2,
    slide11_1,
    slide11_2,
    slide11_3,
    slide12_1,
    slide12_2,
    slide12_3,
    slide13_1,
    slide13_2,
    slide13_3,
    slide14_1,
    slide14_2,
    slide14_3,
    slide15_1,
    slide15_2,
    slide15_3,
    slide16_1,
    slide16_2,
    slide16_3,
    slide17_1,
    slide17_2,
    Done,
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
          slides: [slide5_1, slide5_2],
        },
        {
          title: "Numerical",
          subtitle: "Unleash your inner Mathematician",
          slides: [slide6_1, slide6_2, slide6_3],
        },
        // Hardware ques================================================
        {
          title: "Hardware",
          subtitle: "Beep Boop Beep Boop",
          slides: [slide8_1, slide8_2],
        },
        {
          title: "Hardware",
          subtitle: "Beep Boop Beep Boop",
          slides: [slide9_1, slide9_2, slide9_3],
        },
        {
          title: "Hardware",
          subtitle: "Beep Boop Beep Boop",
          slides: [slide10_1, slide10_2],
        },
        {
          title: "Hardware",
          subtitle: "Beep Boop Beep Boop",
          slides: [slide11_1, slide11_2, slide11_3],
        },
        {
          title: "Hardware",
          subtitle: "Beep Boop Beep Boop",
          slides: [slide12_1, slide12_2, slide12_3],
        },
        {
          title: "Software",
          subtitle: "1010111....ello Wrold!",
          slides: [slide13_1, slide13_2, slide13_3],
        },
        {
          title: "Software",
          subtitle: "1010111....ello World!",
          slides: [slide14_1, slide14_2, slide14_3],
        },
        {
          title: "Software",
          subtitle: "1010111....ello World!",
          slides: [slide15_1, slide15_2, slide15_3],
        },
        {
          title: "Software",
          subtitle: "1010111....ello World!",
          slides: [slide16_1, slide16_2, slide16_3],
        },
        {
          title: "Software",
          subtitle: "1010111....ello World!",
          slides: [slide17_1, slide17_2],
        },
        {
          title: "Completed",
          subtitle: "Woohoo we did it Jope you had fun",
          slides: [Done],
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
