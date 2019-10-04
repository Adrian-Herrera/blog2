<template>
  <div class="ContentTitleBar">
    <img src="@/assets/LogoNavBar.png" alt="Logo"  class="logo" />
    <p class="label" >{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  computed: {
    // ? TODO: Tal vez se puede hacer un wrapper con esta logica en un componente "DynamicLogo" o algo asi.
    getLogoPosition() {
      if (this.title.length < 10) {
        return { left: "30%" };
      } else if (this.title.length < 35) {
        return { left: "22%" };
      } else {
        return { display: "none"};
      }
    },

    getFontSize() {
      if (this.title.length > 35){
        return {fontSize: "1.5rem"}
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mystyles.scss";
$iconSize: 4rem;

.ContentTitleBar {
  background-image: $coreGradient;
  color: $coreTertiaryColor;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 5%;
  .label {
    position: relative;
    margin-right: 1rem;
    margin-left: 7px; 
    font-weight: bold;
    font-size: 2rem;
    @include media-breakpoint-down(sm) {
      font-size: 1.5rem;
    }
    text-align: left;
  }
  .logo {
    @include media-breakpoint-down(sm) {
      display: none;
    }
    position: relative;
    height: $iconSize;
    width: $iconSize;
  }
}
</style>