<template>
    <div class="main">
        <div class="hor">
            <p>
                Currently, the incubator has 99 bubbles distributed as 43 yellow,33 green,23 blue. Bubbles combine in pairs until only one is left.
            </p>
            i) A yellow bubble and A green bubble combine to make a blue bubble. <br />
            ii) A green bubble and A blue bubble combine to make a yellow bubble. <br />
            iii) A blue bubble and A yellow bubble combine to make a green bubble. <br /><br />
            <p>
                For each fusion, the bubble from the largest piles will fuse first, if two piles have the same number of bubbles, then a bubble comes out from one at random.
            </p>
            <p>
                You have given one yellow, one green, and one blue bubble, you can add only one bubble so that finally a blue bubble remains after all the fusions. So what color bubble will you add to get the blue bubble?
            </p>
            <div class="options">
                <a-radio-group v-model="value">
            <a-radio :style="radioStyle" :value="1"> Yellow Bubble </a-radio>
            <a-radio :style="radioStyle" :value="2"> Blue Bubble </a-radio>
            <a-radio :style="radioStyle" :value="3"> Green Bubble </a-radio>
            <a-radio :style="radioStyle" :value="4"> None of the above bubbles </a-radio>
          </a-radio-group>
            </div>
        </div>
        <a-button size="large" icon="right" shape="round" @click="check">Next</a-button>
        </div>
</template>

<script>

export default {
    data() {
        return {
            value: null,
            radioStyle: {
                display: "block",
                height: "30px",
                lineHeight: "30px"
            },
        };
    },
    methods: {
        check() {
            if (this.value !== null) {
                if(this.value == 1) this.$store.commit("INCREMENT_SCORE");
                this.$store.commit("INCREMENT STATE");
            } else this.showConfirm();
        },
        showConfirm() {
            let self = this;
            this.$confirm({
                title: "Do you want to move without solving?",
                content: "Once clicked you can not come back to this question",
                onOk() {
                    self.$store.commit("INCREMENT_STATE");
                },
                onCancel() {},
            });
        },
    },
};
</script>



