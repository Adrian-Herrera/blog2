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
      <router-link
        tag="li"
        to="/dashboard/Usuarios"
        class="item"
        v-if="this.$store.state.userData.Id_usr == 1"
      >
        Usuarios
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
  }
};
</script>

<style></style>
