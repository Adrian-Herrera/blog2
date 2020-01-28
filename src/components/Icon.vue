<template>
  <div>
    <img
      class="icon"
      :src="require(`@/assets/icons/${name}.svg`)"
      :alt="`${name}`"
    />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {},
    size: {
      default: "normal"
    },
    modifier: {
      default: null
    },
    fixAlign: {
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 100%;
}
</style>
