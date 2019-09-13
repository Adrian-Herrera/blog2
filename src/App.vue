<template>
  <div id="app" class="home">
    <TitleBar class="title"></TitleBar>
    <b-container fluid class="cont">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </b-container>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
export default {
  components: {
    TitleBar
  }
};
</script>

<style lang="scss" scoped>
.title {
  position: sticky;
  z-index: 2;
  top: 0;
}
</style>



