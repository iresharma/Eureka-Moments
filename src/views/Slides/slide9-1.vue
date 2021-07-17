<template>
  <div class="main">
    <div class="content">
      <img src="@/assets/images/9-1.png" alt="" />
      <div>
        <h1>Here are the representation of these gates</h1>
        <img src="@/assets/images/9-1-2.png" alt="" class="dia" />
      </div>
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

<style lang="scss" scoped>
.main {
  padding: 5rem;

  .content {
    display: flex;
    align-items: center;
    img {
      width: 50%;
    }

    div {
      .dia {
        width: 100%;
      }
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 5%;
  }
}
</style>
