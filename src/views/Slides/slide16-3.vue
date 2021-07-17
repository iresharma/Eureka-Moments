<template>
  <main>
    <div class="content">
      <lottie-animation
        path="assets/JSON/bulb.json"
        :loop="false"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <div class="text">
        Asymptotically optimal algorithms have been known since the mid-20th
        century and with advancement in technology humans with the help of
        computers have said good-bye to one of the reckless problems of
        humankind - sorting. Today many algorithms such as bubble sort,
        insertion sort, Quicksort, Bubble sort, Merge sort, selection sort, etc
        are in use. However when time is an essential constraint, “QUICK SORT”
        is a programmers go-to! Quicksort, also known as partition sort,
        involves picking a random item(partition element) and partitioning the
        whole list into two. Then simply decide, which list items should fall
        before and which should fall after the partition element. You’ve already
        saved some time by not having to compare any list item on one side of
        the partition element with that of the other side. Follow this on either
        side of the partition by picking up sub-partition elements on the sides
        until you have the whole list sorted!
      </div>
    </div>
    <a-button
      size="large"
      icon="right"
      shape="round"
      @click="$store.commit('INCREMENT_QUES')"
      >Next</a-button
    >
  </main>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  components: {
    LottieAnimation,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 5rem;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font: var(--content-font);
    text-align: center;
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    margin-top: 2rem;
  }
}
</style>
