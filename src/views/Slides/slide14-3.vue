<template>
  <main class="ans">
    <div class="content">
      <img src="@/assets/images/idk.jpg" alt="" />
      <div class="text">
        Ans: The minimum time slots required are 3 as shown in the diagram
        above.
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
  

  img {
    height: 40vh;
  }

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
