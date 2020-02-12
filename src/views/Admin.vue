<template>
  <div class="l-background">
    <div class="message" v-if="msg">
      <p>{{ msg }}</p>
    </div>
    <div class="login-cont">
      <div class="l-nav">
        <a @click="Loginbtn()" :class="{ active: isActive }">Iniciar Sesion</a>
        <a @click="Registerbtn()" :class="{ active: !isActive }">Registrarse</a>
        <!-- <button >Iniciar Sesión</button>
        <button >Registrarse</button> -->
      </div>
      <div class="l-body">
        <div
          class="l-form"
          :class="{ hidden: !isActive, changeopacity: !isOp }"
        >
          <form @submit.prevent="loginUser()" id="login-form" method="post">
            <div class="form-control">
              <input
                type="text"
                name="mail"
                id="login-user"
                placeholder="correo"
                required="required"
                v-model="login.mail"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                name="Password"
                id="login-pass"
                placeholder="Contraseña"
                required="required"
                v-model="login.password"
              />
            </div>
            <div class="form-btn">
              <button type="submit" value="Ingresar">Entrar</button>
            </div>
          </form>
        </div>
        <div class="l-form" :class="{ hidden: isActive, changeopacity: isOp }">
          <form
            @submit.prevent="registerUser()"
            id="register-form"
            method="post"
          >
            <div class="form-control">
              <input
                type="text"
                name="User"
                id="register-user"
                placeholder="Usuario"
                required="required"
                v-model="register.username"
              />
            </div>
            <div class="form-control">
              <input
                type="email"
                name="User"
                id="mail-user"
                placeholder="Correo"
                required="required"
                v-model="register.mail"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                name="Password"
                id="register-pass"
                placeholder="Contraseña"
                required="required"
                v-model="register.password"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                name="Password"
                id="re-pass"
                placeholder="Repita Contraseña"
                required="required"
                v-model="register.repassword"
              />
            </div>
            <div class="form-btn">
              <button type="submit" value="Registrar">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostService from "../PostService";
export default {
  data() {
    return {
      user: [],
      isActive: true,
      isOp: true,
      login: {
        mail: "raiman00@hotmail.com",
        password: "layita00"
      },
      register: {
        username: "",
        mail: "",
        password: "",
        repassword: ""
      },
      error: "",
      msg: ""
    };
  },
  methods: {
    Loginbtn: function() {
      this.isActive = true;
      setTimeout(() => (this.isOp = true), 1);
    },
    Registerbtn: function() {
      this.isActive = false;
      setTimeout(() => (this.isOp = false), 1);
    },
    async loginUser() {
      try {
        let res = await PostService.login(this.login);
        // console.log(res);
        if (res.success === true) {
          // console.log(this.$store.state.userData);
          // this.$store.state.userData = res.user;
          this.$store.commit("setUser", res.user);
          // console.log(this.$store.state.userData)
          this.$router.push("/dashboard");
        } else {
          this.msg = res.message;
        }
      } catch (err) {
        this.error = err.message;
      }
    },
    async registerUser() {
      try {
        // console.log(this.register);
        // console.log(this.register.password == this.register.repassword);
        if (this.register.password == this.register.repassword) {
          let res = await PostService.NewUser(this.register);
          if (res.success === true) {
            this.msg = res.message;
          }
          console.log(res);
        } else {
          this.msg = "Las contraseñas no son iguales";
        }
        // await PostService.NewUser(this.register);
      } catch (err) {
        this.error = err.message;
      }
    }
  },
  created() {
    // try {
    //   if (this.$store.state.userData) {
    //     this.$router.push({ path: `/dashboard` });
    //   }
    // } catch (err) {
    //   this.error = err.message;
    // }
  }
};
</script>
