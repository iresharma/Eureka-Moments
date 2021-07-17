<template>
  <div class="main">
    <div class="content">
      <p>
        <strong>We know that in Logic Gates</strong>
      </p>
      <div class="options">
        Y= A + B => OR Gate<br />
        Y= A . B => AND Gate<br />
        Y=A’ => NOT Gate<br />
        <image src="@/assets/images/q9_1.jpeg" alt="" />
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
}
</style>
