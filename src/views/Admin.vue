<template>
  <div class="l-background">
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
          <form @submit.prevent="validate()" id="login-form" method="post">
            <div class="form-control">
              <input
                type="text"
                name="User"
                id="login-user"
                placeholder="Usuario"
                required="required"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                name="Password"
                id="login-pass"
                placeholder="Contraseña"
                required="required"
              />
            </div>
            <div class="form-btn">
              <button type="submit" value="Ingresar">Entrar</button>
            </div>
          </form>
        </div>
        <div class="l-form" :class="{ hidden: isActive, changeopacity: isOp }">
          <form @submit.prevent="validate()" id="register-form" method="post">
            <div class="form-control">
              <input
                type="text"
                name="User"
                id="register-user"
                placeholder="Usuario"
                required="required"
              />
            </div>
            <div class="form-control">
              <input
                type="email"
                name="User"
                id="register-user"
                placeholder="Correo"
                required="required"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                name="Password"
                id="register-pass"
                placeholder="Contraseña"
                required="required"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                name="Password"
                id="re-pass"
                placeholder="Repita Contraseña"
                required="required"
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
export default {
  data() {
    return {
      st1: "display: block; opacity: 1",
      st2: "display: none; opacity: 0",
      isActive: true,
      isOp: true,
      loginUser: "",
      loginPass: "",
      RegUser: "",
      RegMail: "",
      RegPass: "",
      RegRePass: ""
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
    validate: function() {
      console.log({ name: this.usuario, contraseña: this.contraseña });
      this.$router.push("dashboard");
    }
  }
};
</script>
