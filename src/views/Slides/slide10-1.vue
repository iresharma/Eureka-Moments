<template>
  <main>
    <h1>Guess the Images</h1>
    <div class="content">
      <div class="imgDiv">
        <img src="@/assets/images/10-1.png" alt="" />
        <input
          type="text"
          placeholder="Inspiro ?"
          v-model="ans"
          @keydown.prevent.enter="show = !show"
        />
        <div v-if="show">
          A memristor is a non-volatile electronic memory device that was first
          theorized by Leon Ong Chua in 1971 as the fourth fundamental
          two-terminal circuit element following the resistor, the capacitor,
          and the inductor. Its special property is that its resistance can be
          programmed (resistor function) and subsequently remains stored (mem
          ory function).
        </div>
      </div>
      <div class="imgDiv">
        <img src="@/assets/images/10-1.png" alt="" />
        <input
          type="text"
          placeholder="Inspiro ?"
          v-model="ans"
          @keydown.prevent.enter="show = !show"
        />
        <div v-if="show">
          A memristor is a non-volatile electronic memory device that was first
          theorized by Leon Ong Chua in 1971 as the fourth fundamental
          two-terminal circuit element following the resistor, the capacitor,
          and the inductor. Its special property is that its resistance can be
          programmed (resistor function) and subsequently remains stored (mem
          ory function).
        </div>
      </div>
      <div class="imgDiv">
        <img src="@/assets/images/10-1.png" alt="" />
        <input
          type="text"
          placeholder="Inspiro ?"
          v-model="ans"
          @keydown.prevent.enter="show = !show"
        />
        <div v-if="show">
          A memristor is a non-volatile electronic memory device that was first
          theorized by Leon Ong Chua in 1971 as the fourth fundamental
          two-terminal circuit element following the resistor, the capacitor,
          and the inductor. Its special property is that its resistance can be
          programmed (resistor function) and subsequently remains stored (mem
          ory function).
        </div>
      </div>
      <div class="imgDiv">
        <img src="@/assets/images/10-1.png" alt="" />
        <input
          type="text"
          placeholder="Inspiro ?"
          v-model="ans"
          @keydown.prevent.enter="show = !show"
        />
        <div v-if="show">
          A memristor is a non-volatile electronic memory device that was first
          theorized by Leon Ong Chua in 1971 as the fourth fundamental
          two-terminal circuit element following the resistor, the capacitor,
          and the inductor. Its special property is that its resistance can be
          programmed (resistor function) and subsequently remains stored (mem
          ory function).
        </div>
      </div>
      <div class="imgDiv">
        <img src="@/assets/images/10-1.png" alt="" />
        <input
          type="text"
          placeholder="Inspiro ?"
          v-model="ans"
          @keydown.prevent.enter="show = !show"
        />
        <div v-if="show">
          A memristor is a non-volatile electronic memory device that was first
          theorized by Leon Ong Chua in 1971 as the fourth fundamental
          two-terminal circuit element following the resistor, the capacitor,
          and the inductor. Its special property is that its resistance can be
          programmed (resistor function) and subsequently remains stored (mem
          ory function).
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      show: [false, false, false, false],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  text-align: center;
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .imgDiv {
      display: flex;
      flex-direction: column;
      input {
        border: 0.213rem solid #ccc;
        border-radius: 3rem;

        width: 100%;
        height: 3rem;
        margin-top: 1.3rem;

        font: var(--content-font);

        padding: 1rem;
      }

      input:focus {
        border: 0.213rem solid blue;
      }

      input:placeholder {
        font: var(--content-font);
      }
    }
  }
}
</style>
