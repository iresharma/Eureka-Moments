<template>
  <main>
    <div class="content">
      <img src="@/assets/images/9-ans.png" alt="" />
      <div class="text">
        A and C as the logic behind Staircase light is that of the XOR Gate.
        (Easy)
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
