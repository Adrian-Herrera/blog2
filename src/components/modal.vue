<template>
  <b-modal :id="id" centered hide-footer>
    <template slot="modal-title">{{ title }}</template>
    <div class="d-block text-center">
      <!-- <h3>{{link}}</h3> -->
      <b-embed
        type="iframe"
        aspect="16by9"
        :src="link"
        allowfullscreen
      ></b-embed>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide(id)">Cerrar</b-button>
  </b-modal>
</template>
<script>
export default {
  name: "VideoModal",
  props: {
    title: String,
    link: String,
    id: String
  }
};
</script>
