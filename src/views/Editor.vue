<template>
  <div class="nuevaPubli">
    <div style="background-color: white;">
      <TextEditor :data="editId[0]" v-if="editId[0]"></TextEditor>
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
import PostService from "../PostService";
export default {
  props: {
    id: {
      type: String,
      default: "new"
    }
  },
  data() {
    return {
      editId: [],
      error: ""
    };
  },
  methods: {
    async getId() {
      try {
        this.editId = await PostService.getUpdatePost("/updatePost/" + this.id);
      } catch (err) {
        this.error = err.message;
      }
    },
    setNew: function() {
      this.editId = [
        {
          Title: "",
          Description: "",
          Body: ""
        }
      ];
      // console.log(this.editId);
    }
  },
  async created() {
    if (this.id == "new") {
      this.setNew();
    } else {
      this.getId();
    }
  },
  components: {
    TextEditor
  }
};
</script>

<style></style>
