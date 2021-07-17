<template>
  <div class="main">
    <div class="grid">
      <img src="@/assets/images/q15_2.jpg" alt="" />
      <div class="content">
        <p>
          <strong
            >Now apply what you have learned above and try to solve the
            following question:</strong
          >
        </p>
        <div class="question">
          <p>
            Suppose there is some finite number of clubs in University, We have
            a list of clubs and students enrolled in each club. Many clubs have
            common students. We plan to schedule the event so that no two clubs
            with a common student are scheduled at the same time and To satisfy
            this, How many minimum time slots are required?
          </p>
        </div>
        <p>
          <a-alert
            message="Hint: Color the given graph according to the concept of
        Graph Coloring."
            type="success"
            show-icon
          />
        </p>
        <div class="conditions">
          <p>
            As shown in the given diagram, <br />
            The number of clubs (i.e vertices) = 10 <br />
            The number of common students (i.e edges) = 15
          </p>
        </div>
      </div>
    </div>
    <div class="input">
      <div class="label">minimum time slots</div>
      <a-input-number
        size="large"
        :min="0"
        :max="10"
        :default-value="4"
        @change="(event) => input(event)"
      />
    </div>
    <a-button size="large" icon="right" shape="round" @click="confirm"
      >Next</a-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      worker1: null,
    };
  },
  methods: {
    input(val) {
      this.worker1 = val;
    },
    confirm() {
      if (this.worker1 === 3) {
        this.$store.commit("INCREMENT_SCORE");
      }
      this.$store.commit("INCREMENT_STATE");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 5rem;

  .grid {
    display: grid;
    grid-template-columns: 1fr 3fr;

    img {
      width: 100%;
    }

    .content {
      font: var(--content-font);
    }
  }

  .input {
    font-family: v-sans;
    font-weight: 600;
    font-size: 2em;
    display: flex;

    .label {
      margin-right: 1rem;
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    margin-top: 2rem;
  }
}
</style>
