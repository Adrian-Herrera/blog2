<template>
    <div>
        <b-row class="barra">
            <b-navbar class="feedbar" type="light" variant="light" toggleable="md">
                <b-navbar-brand href="#" class="logo">
                    <img src="@/assets/LogoNavBar.png"  alt="Logo" class="rounded float-left">
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav fill style="width: 100%;">
                        <b-nav-item  to="publicaciones">Publicaciones</b-nav-item>
                        <b-nav-item  to="videos">Videos</b-nav-item>
                        <b-nav-item  to="nosotros">Nosotros</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-row>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
img{
    max-height: 100%;
    width: auto;
}
</style>

