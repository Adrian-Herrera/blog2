import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "hash",
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
      redirect: "/dashboard/Publicaciones",
      async beforeEnter(to, from, next) {
        try {
          var Permission = await store.getters.status;
          if (Permission) {
            next();
          } else {
            next({
              name: "home" // back to safety route //
            });
          }
          // next();
        } catch (e) {
          console.log(e);
          next();
        }
      },
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue"),

      children: [
        {
          path: "Publicaciones",
          name: "adminPublicaciones",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "./views/AdminPublicaciones.vue"
            )
        },
        {
          path: "Videos",
          name: "adminVideos",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "./views/AdminVideos.vue"
            )
        },
        {
          path: "Perfil",
          name: "adminPerfil",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "./views/AdminPerfil.vue"
            )
        },
        {
          path: "editor",
          name: "Editor",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "./views/Editor.vue")
        },
        {
          path: "editor/:id",
          name: "EditorID",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "./views/Editor.vue"),
          props: true
        }
      ]
    },
    {
      path: "/admin",
      name: "admin",
      async beforeEnter(to, from, next) {
        try {
          var Permission = await store.getters.status;
          if (Permission) {
            next({
              name: "dashboard" // back to safety route //
            });
          } else {
            next();
          }
          // next();
        } catch (e) {
          console.log(e);
          next();
        }
      },
      component: () =>
        import(/* webpackChunkName: "admin" */ "./views/Admin.vue")
    },
    {
      path: "/:Pname",
      name: "post",
      component: () => import(/* webpackChunkName: "post" */ "./views/post.vue")
    },
    {
      path: "*",
      component: Home
    }
  ]
});
