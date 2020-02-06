<template>
  <div class="adm-publication">
    <div class="message" v-if="message">
      <h3>{{ message }}</h3>
    </div>
    <div class="table-title">
      <h3>Lista de publicaciones</h3>
      <router-link to="/dashboard/Editor">
        <button class="button new">Nuevo</button>
      </router-link>
    </div>
    <div class="table-body">
      <p class="error" v-if="error">{{ error }}</p>
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th class="table-buttons">Acciones</th>
          </tr>
        </thead>
        <tr
          v-for="(post, index) in posts"
          :item="post"
          :index="index"
          :key="index"
        >
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.date }}</td>
          <td>
            <div :class="getPublic(post.Public)">
              {{ getPublic(post.Public) }}
            </div>
          </td>
          <td nowrap>
            <button class="button edit" @click="edit(post.id)">Editar</button>

            <button class="button erase">Borrar</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  data() {
    return {
      posts: [],
      error: "",
      text: "",
      dateFormat: "",
      editId: [],
      message: ""
    };
  },
  async created() {
    try {
      if (this.$store.state.userData) {
        // console.log(this.$store.state.userData);
        this.posts = await PostService.getPosts("/postList");
        this.message = "Bienvenido " + this.$store.state.userData.Username;
      } else {
        this.$router.push({ path: `/` });
      }
    } catch (err) {
      this.error = err.message;
    }
    // try {

    //   this.posts = await PostService.getPosts("/postList");
    //   this.message = "Bienvenido " + this.$store.state.userData.Username;
    // } catch (err){
    //   this.error = err.message;
    // }
  },
  methods: {
    async edit(id) {
      try {
        // this.editId = await PostService.getUpdatePost("/updatePost/" + id);
        // console.log(this.editId[0]);
        this.$router.push({ path: `/dashboard/Editor/${id}` });
      } catch (err) {
        this.error = err.message;
      }
    },
    goEdit: function(id) {
      this.$router.push({ path: `/dashboard/Editor/${id}` });
    },
    getPublic(id) {
      if (id == 1) {
        return "Publico";
      } else if (id == 0) {
        return "Borrador";
      }
    }
  }
};
</script>

<style></style>
