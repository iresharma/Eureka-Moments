<template>
  <div class="main">
    <div class="content">
      BF operates on an array of memory cells, each initially set to zero. (In
      the original implementation, the array was 30,000 cells long, but this may
      not be part of the language specification; different sizes for the array
      length and cell size give different variants of the language). There is a
      pointer, initially pointing to the first memory cell. The commands are:
      Here is an example of a BF program //Program to find the sum of 2 and 5
    </div>
    <img src="@/assets/images/carbon-5.png" alt="" />

    <a-button
      size="large"
      icon="right"
      shape="round"
      @click="$store.commit('INCREMENT_STATE')"
      >Next</a-button
    >
  </div>
</template>
