<template>
  <div class="main">
    <div class="grid">
      <div class="content">
        A Turing complete system is a system that can perform any computation.
        <br />
        Turing machines, first described by Alan Turing, are simple abstract
        computational devices intended to help investigate the extent and
        limitations of what can be computed.

        <ul>
          <li>
            A Turing machine can make decisions based on what it sees in memory
          </li>
          <li>A Turing machine can run forever. (loops infinitely)</li>
          <li>A Turing machine can use infinite memory (theoretically)</li>
          <li>A Turing machine has random access memory:</li>
          <li>
            A 'language' that reads a string once and can only use memory by
            pushing and popping from a stack, It can tell me whether every ‘(‘
            in the string has its own ‘)’ later on by pushing when it sees a ‘(‘
            and popping when it sees a ‘)’. However, it can't tell me if every
            ‘(‘ has its own ‘)’ later on and every ‘[‘ has its own ‘]’ later on
            (note that ‘( [ ) ]’ meets this criterion but ‘( [ ] ]’ does not). A
            Turing machine can use its random access memory to track ( )'s and [
            ]'s separately, but this language with only a stack cannot.
          </li>
          <li>A Turing machine can simulate any other Turing machine</li>
          <li>
            A Turing machine, when given an appropriate 'program', can take
            another Turing machine's 'program' and simulate it on arbitrary
            input.
          </li>
        </ul>

        <a-alert
          message="If you had a language that was forbidden from implementing a Python interpreter, it wouldn't be Turing complete."
          type="success"
          show-icon
        />
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

  .grid {
    .content {
      font: var(--content-font);
      padding: 0.2rem;
    }
  }

  .ant-btn {
    position: absolute;
    right: 5rem;
  }
}
</style>
