<template>
  <main>
    <h1>Your Guess the Images</h1>
    <div class="content">
      <a-card hoverable>
        <img slot="cover" alt="example" src="@/assets/images/10-1.png" />

        <input
          type="text"
          placeholder="Your Guess"
          v-model="ans[0]"
          @keypress.prevent.enter="show[0] = !show[0]"
        />
        <a-card-meta v-if="show[0]" title="Memristor">
          <template slot="description">
            A memristor is a non-volatile electronic memory device that was
            first theorized by Leon Ong Chua in 1971 as the fourth fundamental
            two-terminal circuit element following the resistor, the capacitor,
            and the inductor. Its special property is that its resistance can be
            programmed (resistor function) and subsequently remains stored (mem
            ory function).
          </template>
        </a-card-meta>
      </a-card>
      <a-card hoverable>
        <img slot="cover" alt="example" src="@/assets/images/10-1.png" />

        <input
          type="text"
          placeholder="Your Guess"
          v-model="ans[1]"
          @keypress.prevent.enter="show[1] = !show[1]"
        />
        <a-card-meta v-if="show[1]" title="Memristor">
          <template slot="description">
            A memristor is a non-volatile electronic memory device that was
            first theorized by Leon Ong Chua in 1971 as the fourth fundamental
            two-terminal circuit element following the resistor, the capacitor,
            and the inductor. Its special property is that its resistance can be
            programmed (resistor function) and subsequently remains stored (mem
            ory function).
          </template>
        </a-card-meta> </a-card
      ><a-card hoverable>
        <img slot="cover" alt="example" src="@/assets/images/10-1.png" />

        <input
          type="text"
          placeholder="Your Guess"
          v-model="ans[2]"
          @keypress.prevent.enter="show[2] = !show[2]"
        />
        <a-card-meta v-if="show[2]" title="Memristor">
          <template slot="description">
            A memristor is a non-volatile electronic memory device that was
            first theorized by Leon Ong Chua in 1971 as the fourth fundamental
            two-terminal circuit element following the resistor, the capacitor,
            and the inductor. Its special property is that its resistance can be
            programmed (resistor function) and subsequently remains stored (mem
            ory function).
          </template>
        </a-card-meta> </a-card
      ><a-card hoverable>
        <img slot="cover" alt="example" src="@/assets/images/10-1.png" />

        <input
          type="text"
          placeholder="Your Guess"
          v-model="ans[3]"
          @keypress.prevent.enter="show[3] = !show[3]"
        />
        <a-card-meta v-if="show[3]" title="Memristor">
          <template slot="description">
            A memristor is a non-volatile electronic memory device that was
            first theorized by Leon Ong Chua in 1971 as the fourth fundamental
            two-terminal circuit element following the resistor, the capacitor,
            and the inductor. Its special property is that its resistance can be
            programmed (resistor function) and subsequently remains stored (mem
            ory function).
          </template>
        </a-card-meta> </a-card
      ><a-card hoverable>
        <img slot="cover" alt="example" src="@/assets/images/10-1.png" />

        <input
          type="text"
          placeholder="Your Guess"
          v-model="ans[4]"
          @keypress.prevent.enter="show[4] = !show[4]"
        />
        <a-card-meta v-if="show[4]" title="Memristor">
          <template slot="description">
            A memristor is a non-volatile electronic memory device that was
            first theorized by Leon Ong Chua in 1971 as the fourth fundamental
            two-terminal circuit element following the resistor, the capacitor,
            and the inductor. Its special property is that its resistance can be
            programmed (resistor function) and subsequently remains stored (mem
            ory function).
          </template>
        </a-card-meta>
      </a-card>
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
export default {
  data() {
    return {
      show: [false, false, false, false, false],
      ans: [null, null, null, null, null],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  text-align: center;
  padding: 5rem;
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .ant-card-body {
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

  .ant-btn {
    position: absolute;
    right: 5rem;
    margin-top: 2rem;
  }
}
</style>
