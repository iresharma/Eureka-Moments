<template>
  <main>
    <div>
      <lottie-animation
        path="assets/JSON/bulb.json"
        :loop="false"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
    </div>
    <div class="flex">
      <a-table
        style="width: 40%"
        :data-source="data"
        :columns="columns"
        :pagination="false"
      />
      <div class="content">
        Here 3,2,4 is the suitable answer as it satisfies all the conditions.
        <br />
        So Jack has 3 kit-kat, 2 Dark chocolate, and 4 Dairy Milk.
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
const data = [
  {
    kk: 1,
    dm: 4,
    dc: 2,
  },
  {
    kk: 2,
    dm: 3,
    dc: 3,
  },
  {
    kk: 3,
    dm: 2,
    dc: 4,
  },
  {
    kk: 4,
    dm: 1,
    dc: 5,
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
      columns: [
        {
          title: "KK",
          dataIndex: "kk",
          key: "kk",
        },
        {
          title: "DM",
          dataIndex: "dm",
          key: "dm",
        },
        {
          title: "DC",
          dataIndex: "dc",
          key: "dc",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .flex {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    .highlight {
      background-color: rgb(255, 192, 105);
      padding: 0px;
    }

    .content {
      font: var(--content-font);
    }
  }

  .ant-btn {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
  }
}
</style>
