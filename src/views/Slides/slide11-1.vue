<template>
  <div class="main">
    <div class="hor">
      <div class="not-table">
        A digital counter works on the basis of incrementing a binary number of
        n digits(called bit length). For instance: a 2-bit or 3-bit counter
        (depending on the bit length).A counter counts the transition from low
        to high or 0 to 1 and not 1 to 0 <br /><br />
        An n bit counter can count up to 2<sup>n</sup> (i.e 0 –
        (2<sup>n</sup>-1)) and then starts again from 0 at the next count.
        <br />
        But some counters called fixed count counters are set to reset once they
        reach a specified combination. Eg: a Decade counter counts up to 10,
        then a 4- bit counter is set to reset when the bit configuration is 1010
        instead of 1111). You may observe in the above eg. that the left most
        bit or Most Significant Bit(MSB) changes from 0 to 1 only once in the
        whole count cycle. Using this we can make a 6 bit counter by just adding
        a 3-bit counter to another 3-bit counter and setting it to count the MSB
        of the previous counter(this way the number of counts gets
        multiplied).So if you cascade an m-bit to an n-bit counter you can count
        up to 2<sup>m</sup>*2<sup>n</sup> = 2<sup>m+n</sup> counts
      </div>
      <div>
        <h3>A 3-bit counter counts as shown</h3>
        <a-table :data-source="data" :columns="columns" :pagination="false" />
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
const data = [
  {
    one: 0,
    two: "000",
    three: "+1",
  },
  {
    one: 1,
    two: "001",
    three: "+1",
  },
  {
    one: 2,
    two: "010",
    three: "+1",
  },
  {
    one: 3,
    two: "011",
    three: "+1",
  },
  {
    one: 4,
    two: "100",
    three: "+1",
  },
  {
    one: 5,
    two: "101",
    three: "+1",
  },
  {
    one: 6,
    two: "110",
    three: "+1",
  },
  {
    one: 7,
    two: "111",
    three: "+1",
  },
  {
    one: "Rest(0)",
    two: "000",
    three: "",
  },
];
const columns = [
  {
    dataIndex: "one",
    key: "one",
  },
  {
    dataIndex: "two",
    key: "two",
  },
  {
    dataIndex: "three",
    key: "three",
  },
];
export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;

  .hor {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;

    .not-table {
      font: var(--content-font);
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
    bottom: 5%;
  }
}
</style>
