<template>
  <div class="main ans">
    <div class="hor">
      <lottie-animation
        path="assets/JSON/bulb.json"
        :loop="false"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <div>
        Answer: d) 0 to 2<sup>3n</sup> -1 <br />
        If you cascade m n-bit counters the count range gets multiplied m times.
        Hence if you cascade 3 n -bit counters, you get a maximum count of
        2<sup>n</sup>*2<sup>n</sup>*2<sup>n</sup> = 2<sup>3n</sup> A range of
        23n means you can count from 0 to 2<sup>3n</sup>-1 We would encourage
        you guys to explore this: This method is used to make a counter board
        that displays in decimal, By cascading a decade counter to display every
        decimal digit. This way each counter added to the left multiplies the
        count range by 10. <br /><br />
        <a-table :data-source="data" :columns="columns" :pagination="false" />
      </div>
    </div>
    <a-button
      size="large"
      icon="right"
      shape="round"
      @click="$store.commit('INCREMENT_QUES')"
      >Next</a-button
    >
  </div>
</template>

<script>
const data = [
  {
    one: "1000th place",
    two: "100th place",
    three: "10th place",
    four: "Unit place",
  },
];
const columns = [
  {
    title: "DCounter 3",
    dataIndex: "one",
    key: "one",
  },
  {
    title: "DCounter 2",
    dataIndex: "two",
    key: "two",
  },
  {
    title: "DCounter 1",
    dataIndex: "three",
    key: "three",
  },
  {
    title: "DCounter 0",
    dataIndex: "four",
    key: "four",
  },
];
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  components: {
    LottieAnimation,
  },
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;

  .hor {
    display: grid;
    grid-template-columns: 1fr 2fr;

    div {
      font: var(--content-font);
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 5%;
  }
}
</style>
