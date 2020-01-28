<template>
  <div class="dashboard">
    <div class="navbar">
      <router-link tag="li" to="/dashboard/adminPublicaciones" class="item">
        Publicaciones
      </router-link>
      <router-link tag="li" to="/dashboard/adminVideos" class="item">
        Videos
      </router-link>
      <router-link tag="li" to="/dashboard/adminPerfil" class="item">
        Perfil
      </router-link>
      <div class="item">
        estadisticas
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
