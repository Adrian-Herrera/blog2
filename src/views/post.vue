<template>
  <div class="post" v-if="render">
    <backtotop :Visible="Visible"></backtotop>
    <ContentTitleBar :title="data[0].Title" v-if="data[0].Title" />
    <b-row class="post_image">
      <div class="post_title">
        <h2>Por Ingenieria Economica</h2>
      </div>
    </b-row>
    <b-row class="post_text">
      <p class="post_desc">{{ data[0].Description }}</p>
      <p class="post_content" v-html="data[0].Body"></p>
      <div v-if="data[0].Id_art == 2">
        <Table1></Table1>
        <Table2></Table2>
        <Table3></Table3>
      </div>
    </b-row>
  </div>
</template>
<script>
import PostService from "../PostService";
import json from "@/json/publicaciones.json";
import ContentTitleBar from "@/components/ContentTitleBar.vue";
import backtotop from "@/components/goTop.vue";
import Table1 from "@/components/Table1.vue";
import Table2 from "@/components/Table2.vue";
import Table3 from "@/components/Table3.vue";
export default {
  data() {
    return {
      data: [],
      proId: this.$route.params.Pid,
      render: false,
      Visible: false,
      scrolled: false
    };
  },
  components: { ContentTitleBar, backtotop, Table1, Table2, Table3 },
  async created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  async beforeMount() {
    this.getId();
  },
  async mounted() {
    window.scrollTo(0, 0);
    // this.scroll()
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async getId() {
      try {
        this.data = await PostService.getUpdatePost(
          "/updatePost/" + this.proId
        );
        this.render = true;
        // console.log(this.data);
      } catch (err) {
        this.error = err.message;
      }
    },
    getBgImg(src) {
      return {
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(" +
          require(`@/assets/${src}`) +
          ")"
      };
    },
    goTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      if ((this.scrolled = window.scrollY > 1000)) {
        this.Visible = true;
        // console.log(this.Visible)
      } else this.Visible = false;
    }
  }
};
</script>
