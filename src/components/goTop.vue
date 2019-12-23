<template>
  <transition name="fade">
    <button class="goTop" v-if="Visible" @click="goTop()">
      <i class="fa fa-angle-up" aria-hidden="true"></i>
    </button>
  </transition>
</template>

<script>
export default {
  name: "backtotop",
  data() {
    return {};
  },
  props: {
    Visible: Boolean
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss">
.goTop {
  border-radius: 5px;
  background-color: rgb(1, 14, 27);
  background-color: rgba(1, 14, 27, 0.7);
  position: fixed;
  width: 45px;
  height: 45px;
  display: block;
  right: 15px;
  bottom: 15px;
  border: none;
  opacity: 0.7;
  z-index: 9;
  transition: 1s;
  .fa {
    color: rgb(255, 255, 255);
    font-size: 22px;
  }
  &:hover {
    opacity: 1;
    background-color: rgb(1, 14, 27);
    background-color: rgba(1, 14, 27, 0.9);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// .isVisible {
//   border: 3px solid green;
//   opacity: 0.8;
//   z-index: 4;
//   transition: all 0.4s ease-in;
// }
</style>
