<template>
  <div>
    <b-container fluid style="display: ">
      <b-row class="mainbar">
        <b-navbar class="titlebar" toggleable="md" type="dark">
          <b-navbar-brand to="/">
            <div class="titleicon">
              <img
                src="@/assets/UnifranzLogo.png"
                class="img-fluid"
                alt="Icon"
              />
            </div>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="title_nav" fill>
              <b-nav-item to="publicaciones">Publicaciones</b-nav-item>
              <b-nav-item to="videos">Videos</b-nav-item>
              <b-nav-item to="nosotros">Nosotros</b-nav-item>
              <b-nav-item to="admin">Login</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "TitleBar"
};
</script>
<style></style>
