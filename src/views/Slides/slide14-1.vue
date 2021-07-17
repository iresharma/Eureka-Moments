<template>
  <div class="main">
    <div class="grid">
      <lottie-animation
        path="assets/JSON/graph.json"
        :loop="false"
        :delay="2"
        :autoPlay="true"
        :speed="1"
        height="300"
      />
      <div class="content">
        <div class="grid1">
          <p>
            In the field of Graph Theory, A graph is a mathematical
            representation of a network and it describes the relationship
            between lines and points. A graph consists of some points and lines
            between them.
          </p>
        </div>
        <div class="grid2">
          <p>
            A graph ‘G’ is a set of vertices, called nodes ‘v’ which are
            connected by edges, called links ‘e'. Thus G= (v , e).
          </p>
        </div>
        <div class="grid3">
          <p>
            Graph Coloring: Coloring the vertices of the graph such that no two
            adjacent vertices have the same color.
          </p>
        </div>
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

  .grid {
    display: grid;
    grid-template-columns: 1fr 3fr;

    .content {
      font: var(--content-font);
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    margin-top: 2rem;
  }
}
</style>
