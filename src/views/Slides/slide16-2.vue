<template>
  <div class="main">
    <h1>Here’s the list of files:</h1>
    <h3>Your first task is to sort these files</h3>
    <draggable v-model="myArray">
      <transition-group>
        <div v-for="element in myArray" :key="element.id" :style="style">
          <a-icon type="file" style="margin: 5px" /> {{ element.name }}
        </div>
      </transition-group>
    </draggable>
    <a-button size="large" icon="right" shape="round" @click="check"
      >Next</a-button
    >
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      myArray: [
        { name: "Ghatge Patil Industries", id: 1 },
        { name: "Aditya Birla Group", id: 2 },
        { name: "Banco Aluminium ltd.", id: 3 },
        { name: "Godrej & Boyce", id: 4 },
        { name: "Century Metal and Recycling", id: 5 },
        { name: "Endurance Inc.", id: 6 },
        { name: "Telco Cooperative", id: 7 },
        { name: "Dwarkeesh and Sons", id: 8 },
        { name: "Kashish Event planners", id: 9 },
        { name: "Ananth Murthy and Sons", id: 10 },
        { name: "Flow Link Systems Pvt. Ltd.", id: 11 },
        { name: "Southern Sparrow Organization", id: 12 },
        { name: "Bharat Heavy Electricals", id: 13 },
        { name: "Nelcast Ltd.", id: 14 },
        { name: "Wazir X", id: 15 },
        { name: "Vedantu jr.", id: 16 },
        { name: "Mahindra and Mahindra", id: 17 },
      ],
      style: {
        "background-color": "bisque",
        border: "1px solid black",
        "border-radius": "0.3em",
        margin: "0.3em",
        width: "100%",
        height: "4vh",
        display: "flex",
        "align-items": "center",
      },
      final: [2, 10, 3, 13, 5, 8, 6, 11, 1, 4, 9, 17, 14, 12, 7, 16, 15],
    };
  },
  methods: {
    //   function to log myArray
    check() {
      let bool = true;
      this.myArray.map((element, index) => {
        if (element.id !== this.final[index]) bool = false;
      });
      if (bool) this.$store.commit("INCREMENT_SCORE");
      this.$store.commit("INCREMENT_STATE");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 5rem;

  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 5%;
  }
}
</style>
