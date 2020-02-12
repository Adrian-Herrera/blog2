<template>
  <div>
    <ContentTitleBar :title="title" />
    <div class="videos" v-if="videos">
      <div class="item" v-for="video in videos" :key="video.Id_vid">
        <iframe
          :src="video.VideoURL"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="video-name">
          <p>{{ video.Name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import json from "@/json/videos.json";
import ContentTitleBar from "@/components/ContentTitleBar.vue";
import PostService from "../PostService";
export default {
  data() {
    return {
      videos: [],
      name: String,
      title: "Videos"
    };
  },
  async created() {
    try {
      this.videos = await PostService.getPublicVideos();
      // console.log(this.videos);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {},
  components: { ContentTitleBar }
};
</script>
