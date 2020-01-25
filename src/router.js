import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/publicaciones",
      name: "publicaciones",
      component: () =>
        import(
          /* webpackChunkName: "publicaciones" */ "./views/Publicaciones.vue"
        )
    },
    {
      path: "/videos",
      name: "videos",
      component: () =>
        import(/* webpackChunkName: "videos" */ "./views/Videos.vue")
    },
    {
      path: "/nosotros",
      name: "nosotros",
      component: () =>
        import(/* webpackChunkName: "nosotros" */ "./views/Nosotros.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () =>
        import(/* webpackChunkName: "admin" */ "./views/Admin.vue")
    },
    {
      path: "/:Pname",
      name: "post",
      component: () => import(/* webpackChunkName: "post" */ "./views/post.vue")
    }
  ]
});
