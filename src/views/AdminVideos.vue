<template>
  <div class="admin-content">
    <!-- <button type="button" class="btn" @click="showModal">
      Open Modal!
    </button> -->

    <modal v-if="isModalVisible" @close="closeModal" :info="info" />
    <div class="table-title">
      <h3>Lista de videos</h3>

      <button class="button new" @click="showModal">
        Nuevo
      </button>
    </div>
    <div class="table-body">
      <p class="error" v-if="error">{{ error }}</p>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>URL</th>
            <th>Estado</th>
            <th class="table-buttons">Acciones</th>
          </tr>
        </thead>
        <tr v-for="video in videos" :key="video.Id_vid">
          <td>{{ video.Name }}</td>
          <td>{{ video.VideoURL }}</td>
          <td>
            <div :class="getPublic(video.Public)">
              {{ getPublic(video.Public) }}
            </div>
          </td>
          <td nowrap>
            <button class="button edit" @click="edit(video)">Editar</button>

            <button class="button erase">Borrar</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
import modal from "@/components/modal.vue";
export default {
  components: {
    modal
  },
  data() {
    return {
      videos: [],
      error: "",
      isModalVisible: false,
      info: [],
      P_id: "",
      P_name: "",
      P_URL: ""
    };
  },
  async created() {
    try {
      this.videos = await PostService.getVideos();
      // console.log(this.videos);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    getPublic(id) {
      if (id == 1) {
        return "Publico";
      } else if (id == 0) {
        return "Borrador";
      }
    },
    edit(data) {
      this.info = data;
      this.isModalVisible = true;
    },
    showModal() {
      this.info = {};
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style></style>
