<template>
  <div class="main">
    <div class="content">
      <lottie-animation
        path="assets/JSON/memory.json"
        :loop="false"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      In computer operating systems(OS), memory paging is a memory management
      scheme by which a computer stores and retrieves data from secondary
      storage for use in main memory. In this scheme, the OS retrieves data from
      secondary storage in same-size blocks called pages. Paging is an important
      part of virtual memory implementations in modern OS, using secondary
      storage to let programs exceed the size of available physical memory. The
      “page replacement algorithm” comes to the rescue when we have to decide
      which page needs to be replaced when a new page comes in an OS A Page
      Fault occurs when a program attempts to access a block of memory that is
      not stored in the physical memory or RAM. If the page ‘P1’ is not residing
      in the memory, then the Memory Management Unit raises missing paging
      interrupt or page fault. Page replacement is done when the requested page
      is not found in the main memory (page fault) <br />
      <u>FIFO Algorithm:(First in First out)</u> <br />
      The simplest page replacement algorithm is a first in, first out. <br />
      The oldest page in the main memory will be replaced during page
      replacement
    </div>
    <a-button
      size="large"
      icon="right"
      shape="round"
      @click="$store.commit('INCREMENT_STATE')"
      >Next</a-button
    >
  </div>
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
.main {
  padding: 5rem;
  .content {
    font: var(--content-font);
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
  }
}
</style>
