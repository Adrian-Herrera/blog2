<template>
  <div>
    <ContentTitleBar :title="title" />
    <b-row class="feed sub" align-h="center">
      <!-- <b-col>{{lists}}</b-col> -->
      <b-col
        class="feedcard"
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="item in lists"
        :key="item.name"
      >
        <b-card
          overlay
          :footer="item.name"
          footer-bg-variant="info"
          footer-text-variant="white"
          :img-src="require('@/assets/VideoIcon.png')"
          img-alt="Video icon"
          img-height="300px"
          img-top
          tag="article"
          class="mb-2"
          @click="$bvModal.show(item.id)"
        ></b-card>

        <VideoModal :id="item.id" :title="item.name" :link="item.link"></VideoModal>
      </b-col>
    </b-row>
    <div>
      <!-- <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button> -->
    </div>
  </div>
</template>
<script>
import json from "@/json/videos.json";
import VideoModal from "@/components/modal.vue";
import ContentTitleBar from "@/components/ContentTitleBar.vue";
export default {
  data() {
    return {
      lists: [],
      name: String,
      title: "Videos"
    };
  },
  created: function() {
    this.getPost();
  },
  methods: {
    getPost: function() {
      this.lists = json.videos;
    }
  },
  computed: {
    setInfo(Name, Link) {
      this.name = "Name" + Name;
      this.link = Link;
    }
  },
  components: { VideoModal, ContentTitleBar }
};
</script>

