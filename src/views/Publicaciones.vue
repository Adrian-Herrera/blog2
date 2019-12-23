<template>
  <div>
    <ContentTitleBar :title="title" />
    <b-row class="feed">
      <li
        class="publication"
        v-for="item in lists"
        :key="item.titulo"
        @click="goPost(item.postId, item.titulo)"
      >
        <div class="publication__img" :style="getBgImg('post1.jpg')"></div>
        <div class="publication__info">
          <ul class="publication__title">
            <h4>{{ item.titulo }}</h4>
          </ul>
          <ul class="publication__desc">
            <p>{{ item.descripcion }}</p>
          </ul>
        </div>
      </li>
      <!-- </transition-group> -->
    </b-row>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import json from "@/json/publicaciones.json";
import ContentTitleBar from "@/components/ContentTitleBar.vue";
export default {
  data() {
    return {
      lists: [],
      title: "Publicaciones"
    };
  },

  created: function() {
    this.getPost();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    goPost(PostId, PostName) {
      this.$router.push({
        name: "post",
        params: { Pid: PostId, Pname: PostName }
      });
    },
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
