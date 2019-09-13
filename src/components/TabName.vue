<template>
  <b-row class="TabName" align-h="center" align-v="center">
    <b-col class="cont_icon" align-self="center">
      <div class="icon">
        <img src="@/assets/LogoNavBar.png" alt="icon" width="100%" height="100%" />
      </div>
    </b-col>
    <b-col class="text" cols="auto" align-self="center">
      <div class="text_cont">{{title}}</div>
    </b-col>
    <b-col class="cont_icon"></b-col>
  </b-row>
</template>

<script>
export default {
  name: "TabName",
  props: {
    title: String
  },

  data() {
    return {
      name: "Nosotros"
    };
  }
};
</script>

<style>
</style>