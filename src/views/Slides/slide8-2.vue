<template>
  <main>
    <div class="content">
      <img src="@/assets/7seg.gif" alt="">
      <div class="text">
        Just following the index of the string and putting alternate + and -
        signs for the index and then finding the letter for the integer obtained
        on labeling the index of the string
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
