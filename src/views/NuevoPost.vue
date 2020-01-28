<template>
  <div class="nuevaPubli">
    <h3>Nuevo articulo</h3>
    <div style="background-color: white;">
      <TextEditor></TextEditor>
    </div>
    <div style="font-size: .7rem;">
      Icons made by
      <a
        href="https://www.flaticon.com/authors/pixel-perfect"
        title="Pixel perfect"
        >Pixel perfect</a
      >
      from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
import TextEditor from "@/components/TextEditor.vue";
export default {
  components: {
    TextEditor
  }
};
</script>

<style></style>
