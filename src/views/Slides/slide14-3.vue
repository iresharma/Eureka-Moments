<template>
  <main>
    <div class="content">
      <img src="@/assets/images/idk.jpg" alt="" />
      <div class="text">
        everyone got 8 pieces of rotis. 1st worker gets 1 gold coin since (3
        Rotis piled up and divided into 3 pieces makes 3*3=9 pieces among which
        only 1 piece was given to the hungry man while he had the 8 pieces for
        himself. 2nd worker gets 7 coins in the same logic 5*3=15, 15-8 =7.
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
