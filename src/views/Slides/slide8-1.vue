<template>
    <div class="main">
        <div class="hor">
            <div>
            <p>
                A seven-segment display is a form of an electronic display device for displaying decimal numerals that is an alternative to the more complex dot matrix displays.
            </p>
            <!-- <img src="" alt="" /> image form doc-->
            <p>
                When the particular segment is enabled, the LED lights up! To display the number 8 all segments must be logical high. abcdefgh = 11111110
            </p>
            </div>
        </div>
        <a-button size="large" icon="right" shape="round" @click="check"
      >Next</a-button>
    </div>
</template>