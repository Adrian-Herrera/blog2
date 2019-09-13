<template>
  <div class="ContentTitleBar">
    <img src="@/assets/LogoNavBar.png" alt="Logo" :style="getLogoPosition" class="logo" />
    <h1 class="label">{{title}}</h1>
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
      } else if (this.title.length < 30) {
        return { left: "22%" };
      } else {
        return { display: "none" };
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
    font-weight: bold;
  }
  .logo {
    @include media-breakpoint-down(sm) {
      display: none;
    }
    position: absolute;
    height: $iconSize;
    width: $iconSize;
  }
}
</style>