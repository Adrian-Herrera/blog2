<template>
  <div>
    <ContentTitleBar :title="title" />
    <b-row class="feed">
      <li
        class="publication"
        v-for="(post, index) in posts"
        :item="post"
        :index="index"
        :key="index"
        @click="goPost(post.Id_art, post.Title)"
      >
        <div class="publication__img" :style="getBgImg('post1.jpg')"></div>
        <div class="publication__info">
          <ul class="publication__title">
            <h4>{{ post.Title }}</h4>
          </ul>
          <ul class="publication__desc">
            <p>{{ post.Description }}</p>
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
import PostService from "../PostService";
export default {
  data() {
    return {
      posts: [],
      title: "Publicaciones"
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPublicPosts("/post");
      // console.log(this.posts);
    } catch (err) {
      this.error = err.message;
    }
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
