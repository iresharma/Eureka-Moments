<template>
  <main class="ans">
    <div class="content">
      <img src="@/assets/7seg.gif" alt="" />
      <div class="text">
        I = 0110 0000 : E = 1001 1110 <br />
        Converting to hexadecimal I = 0x60 ; E = 0x9E <br />

        Note: If you solve for E, I can be obtained by complimenting all the
        segments except segment h. <br />
        We encourage you to learn more about seven-segment displays. <br />
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
    img {
      height: 30vh;
    }

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
