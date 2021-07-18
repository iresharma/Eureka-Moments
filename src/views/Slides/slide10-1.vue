<template>
  <main>
    <h1>Your Guess the Images</h1>
    <div class="content">
      <a-card hoverable style="width: 35vw">
        <img slot="cover" alt="example" :src="answers[index].image" />

        <input
          v-if="disabled"
          type="text"
          placeholder="Your Guess"
          v-model="ans"
          @enter="showBtn"
          disabled
        />

        <input
          v-else
          type="text"
          placeholder="Your Guess"
          v-model="ans"
          @enter="showBtn"
        />

        <template slot="actions" class="ant-card-actions">
          <a-icon key="setting" type="info-circle" @click="showBtn" />
          <a-icon key="edit" type="check" @click="nextQ" />
        </template>
        <a-card-meta v-if="show" :title="answers[index].name">
          <template slot="description">
            {{ answers[index].desc }}
            <br /><br />

            <a-button
              size="large"
              icon="right"
              shape="round"
              @click="
                index++;
                show = false;
                disabled = false;
              "
              >Next</a-button
            >
          </template>
        </a-card-meta>
      </a-card>
    </div>
    <a-button
      class="next"
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
      show: false,
      ans: null,
      disabled: false,
      index: 0,
      answers: [
        {
          name: "Memristor",
          desc: "A memristor is a non-volatile electronic memory device that was first theorized by Leon Ong Chua in 1971 as the fourth fundamental two-terminal circuit element following the resistor, the capacitor, and the inductor. Its special property is that its resistance can be programmed (resistor function) and subsequently remains stored (mem ory function).",
          image:
            "https://lh6.googleusercontent.com/KK7vowJajlIE35jtyJ1u5_25T2AZy8c4HYigW2YftQt3Q1m_znkB2cTM5ji1eSsXrnEBusC1fslvzfAliIRSMHgdDLg1ilWyX3vH3Gj9xz-aAUqEsepd0ODa3akpY3_EhejzWduk",
        },
        {
          name: "SATA",
          desc: " SATA, in full serial advanced technology attachment, also called serial ATA, an interface for transferring data between a computer’s central circuit board and storage devices. SATA was designed to replace the long-standing PATA (parallel ATA) interface. Serial communication transfers data one bit at a time, rather than in several parallel streams.",
          image:
            "https://lh4.googleusercontent.com/CKEvuAExReJ01pVml0YGNjTi3A7mRIHulchxH0HGPX9L_-q2jgeM8sfqcoZmWyEpPT2_ocobceLabS2qc6_mbeci32IU4nzuq3cZQegsinRbAOBZkPPS02H6kdEFN5Mf6i4Vqk1J",
        },
        {
          name: "Arduino Uno",
          desc: "The Arduino Uno is an open-source, low-cost, multi-platform, multi-function, 8-bit Atmel microcontroller. It is based on the Atmel ATmega328P microcontroller and has a built-in USB interface for programming and communicating with a PC. The Arduino Uno is ideal for learning how to program microcontrollers and how to build your own projects.",
          image:
            "https://lh6.googleusercontent.com/hwmyYCnDd89tJ21S-DgbflM82kfco3rhF33rUXHCV2CaIxz-GmMFdRc7vUXcyzvZBLZg0AtkrHks95n_uZb5oI37erOoPduoczlJbi34F6jlhpzDs6dtw5taGWjwtjOG_vdjiTw8",
        },
        {
          name: "DHT11",
          desc: "The DHT11 is a sensor that measures temperature and humidity. It is a temperature/humidity sensor that uses a thermistor to detect ambient temperature. The DHT11 sensor is a low-cost, low-power, high-precision, high-accuracy sensor that can be used to measure temperature and humidity in the real world.",
          image:
            "https://lh6.googleusercontent.com/WPS2YzMa5ANM7L3-xk8fAOrDn7Kx-DYFiKNn1LX7H6YpZpmypL8S9PleIZ1RjCk1DFGJ2l66qt8iV7gJ9AQl6393hWp066Zc43YD1DPQgddbZurwJ9aSOGWHt88ZwoDSee7DeQAT",
        },
        {
          name: "The graphics processing unit",
          desc: " The graphics processing unit (GPU), also called graphics card or video card, is a specialized electronic circuit that accelerates the creation and rendering of images, video, and animations. It performs fast math calculations while freeing the CPU to perform other tasks.",
          image:
            "https://lh5.googleusercontent.com/AU9wDppSLdQnQka9V-2T8Y9jqIYk_m7iP8E5UO76SjVrY7bRM1fJvP9_PPsENLytc1i46ZLklDgeXvIe_Mhk0SUgiBxBW-dvdWfkwPK5Ys48lUGNY_UUUSDoNOpemiNDzA_5teOD",
        },
        {
          name: "servo motor",
          desc: " A servo motor (or servo motor) is a simple electric motor, controlled with the help of servomechanism. If the motor as a controlled device, associated with servomechanism is DC Motor, then it is commonly known as a DC Servo Motor. If AC operates the controlled motor, it is known as an AC Servo Motor.",
          image:
            "https://lh6.googleusercontent.com/zov_xvpqhkUDWlWkUO0Fzy6Kn0OYBhNabGMwsXtdfTPtU8mydfBiX7sB-j6Wc5VJJCZIJpA8O0NpL2rRRK0Wi3YBqRxmkRtlPXlYJ11DKY75bkOb6QygEb_-aMrATKt6PJs4SCQh",
        },
        {
          name: "multimeter",
          desc: "A multimeter is a measuring instrument that can measure multiple electrical properties. A typical multimeter can measure voltage, resistance, and current, in which case it is also known as a volt-ohm-milliammeter (VOM).",
          image:
            "https://lh3.googleusercontent.com/S9X0waf3K_6GNwUJbjNtnSk6xU-2lRgWryvK8N4If31d4RuWT9KxJ1rgUzBRWaZctY3mKI2SV17ssaAf_getXedvcr54qv5lHoTchLeJuWJTZLY22aZQTO5KpbniSPFhjWwgFIDQ",
        },
        {
          name: "Router",
          desc: "A router is a device that connects two or more packet-switched networks or subnetworks. It serves two primary functions: managing traffic between these networks by forwarding data packets to their intended IP addresses and allowing multiple devices to use the same Internet connection.",
          image:
            "https://lh5.googleusercontent.com/h6Kq9drH_X2bgPAQV9cvgKrflEY4JuRwuW3Oc_6J5pJ-WnltyiPpsUbaoLZlmQDgd2rMDoP8SStVgSArlH9wnNAqtcUVpSUb7f_1XQctfyTvhgqvtHnN_B66shmnD8slV6eV_L6e",
        },
        {
          name: "Ethernet",
          desc: "Ethernet is a type of communication protocol that connects computers within what’s called a “local area network (LAN)” and a “wide area network (WAN).” LAN and WAN connect various devices, such as laptops and printers, within homes, buildings, and even small neighborhoods.",
          image:
            "https://lh4.googleusercontent.com/iXoPPEy2xN8SbNK3T8HE7kkggPT-pwxpL3mfciBfafcYbSqrxEJX5l_Oip24LFOuvYYJA0h5PhDN-Lvl0LUmmonmg0tPKkZS_LXZ3LK7NJJ7Xn0fJX6Endb4fCC8-XYys8CeU_WS",
        },
        {
          name: "Ultrasonic Sensor",
          desc: "An Ultrasonic sensor is an instrument that measures the distance to an object using ultrasonic sound waves. An ultrasonic sensor uses a transducer to send and receive ultrasonic pulses that relay back information about an object’s proximity.  High-frequency sound waves reflect from boundaries to produce distinct echo patterns.",
          image:
            "https://lh6.googleusercontent.com/-UM8yTINi9kFsqQ9af0nKrkd84CYre-EFHQlh5vS1b7RhdRg-3NFBrfIdfI6bUI0nZ9Wgt0ZnLQpD9ZIVtIfCHhj8QkSHihWV6f5GzpPKxGHvbazioEqZNMLZKpWDVxs0Sf6-X53",
        },
      ],
    };
  },
  methods: {
    showBtn() {
      this.show = true;
      this.disabled = true;
    },
    nextQ() {
      this.disabled = true;
      if (this.ans !== null) {
        this.show = true;
        if (
          this.ans.toLowerCase === this.answers[this.index].name.toLowerCase()
        ) {
          this.$store.commit("INCREMENT_SCORE");
        }
      }
      if (this.index === this.answers.length - 1) {
        this.$store.commit("INCREMENT_QUES");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  text-align: center;
  padding: 5rem;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;

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

  .next {
    position: absolute;
    right: 5rem;
  }
}
</style>
