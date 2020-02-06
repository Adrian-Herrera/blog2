<template>
  <div class="dashboard">
    <div class="navbar">
      <router-link tag="li" to="/dashboard/Publicaciones" class="item">
        Publicaciones
      </router-link>
      <router-link tag="li" to="/dashboard/Videos" class="item">
        Videos
      </router-link>
      <router-link tag="li" to="/dashboard/Perfil" class="item">
        Perfil
      </router-link>
      <button class="logout" @click="logout()">Cerrar Sesion</button>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
export default {
  data() {
    return {
      error: ""
    };
  },
  methods: {
    logout() {
      // console.log(this.$store.state.userData);
      this.$store.commit("setUser", "");
      this.$router.push({ path: `/admin` });
    }
  },
  created() {
    try {
      if (!this.$store.state.userData) {
        this.$router.push({ path: `/` });
      }
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<style></style>
