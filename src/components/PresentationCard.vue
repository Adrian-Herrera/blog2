<template>
  <div class="company__card" id="card" @click="flipcard()">
    <div class="company__inner" :style="{ transform: flip }">
      <div class="company__img">
        <img :src="require(`@/images/photos/${foto}`)" alt="Foto" />
        <ul class="company__name" id="name">
          <p style="margin: auto;">{{ name }}</p>
        </ul>
      </div>
      <div class="company__data">
        <p class="data_name">{{ name }}</p>
        <p class="data_info" :style="InfoSize">{{ info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flip: "none"
    };
  },
  props: {
    name: String,
    foto: String,
    info: String
  },
  methods: {
    flipcard: function() {
      if (this.flip == "none") {
        this.flip = "rotateY(180deg)";
      } else if (this.flip == "rotateY(180deg)") {
        this.flip = "none";
      }
    }
  },
  computed: {
    InfoSize() {
      if (this.info.length > 450) {
        return {
          fontSize: ".9rem"
        };
      } else {
        return { fontSize: "1rem" };
      }
    }
  }
};
</script>
