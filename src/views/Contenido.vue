<template>
  <div>
    <b-container class="cont" fluid>
      <NavBar></NavBar>
      <transition name="slide-fade" mode="out-in"> <router-view /> </transition>
    </b-container>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
