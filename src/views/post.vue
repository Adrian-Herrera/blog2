<template>
  <div class="post">
    <div v-for="(item,index) in lists" :key="index">
      <div v-if="proId == item.postId">
        <ContentTitleBar :title="item.titulo" />
        <b-row class="post_image">
          <div class="post_title">
            <h2>Por Ingenieria Economica</h2>
          </div>
        </b-row>
        <b-row class="post_text">
          <p class="post_desc">{{ item.descripcion}}</p>
          <p class="post_content" v-html="item.texto"></p>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import json from "@/json/publicaciones.json";
import ContentTitleBar from "@/components/ContentTitleBar.vue";
export default {
  data() {
    return {
      proId: this.$route.params.Pid,
      title: String,
      lists: []
    };
  },
  created: function() {
    this.getPost();
  },
  methods: {
    getPost: function() {
      this.lists = json.publicaciones;
    },
    getBgImg(src) {
      return {
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(" +
          require(`@/assets/${src}`) +
          ")"
      };
    }
  },
  components: { ContentTitleBar }
};
</script>
