<template>
  <div class="admin-content">
    <div class="message" v-if="message">
      <h3>{{ message }}</h3>
    </div>
    <div class="table-title">
      <h3>Lista de usuarios</h3>
    </div>
    <div class="table-body">
      <p class="error" v-if="error">{{ error }}</p>
      <table>
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Nombre completo</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Tipo</th>
            <th>Activo</th>
            <th class="table-buttons">Acciones</th>
          </tr>
        </thead>
        <tr
          v-for="(user, index) in users"
          :item="user"
          :index="index"
          :key="index"
        >
          <td>{{ user.Username }}</td>
          <td>{{ user.Fullname }}</td>
          <td>{{ user.Mail }}</td>
          <td>{{ user.Phone }}</td>
          <td>
            <div :class="getType(user.Id_usrtype)">
              {{ getType(user.Id_usrtype) }}
            </div>
          </td>
          <td>
            <div :class="getPublic(user.Active)">
              {{ getPublic(user.Active) }}
            </div>
          </td>
          <td nowrap>
            <button
              v-if="user.Active == 1"
              class="button erase"
              @click="changeActive(user.Id_usr, user.Active), (user.Active = 0)"
            >
              Deshabilitar
            </button>

            <button
              v-else-if="user.Active == 0"
              class="button new"
              @click="changeActive(user.Id_usr, user.Active), (user.Active = 1)"
            >
              Habilitar
            </button>
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
      message: "",
      error: "",
      users: []
    };
  },
  async created() {
    try {
      this.users = await PostService.getUsers("/users");
    } catch (err) {
      this.error = err.message;
    }
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
        return "Activo";
      } else if (id == 0) {
        return "Inactivo";
      }
    },
    getType(id) {
      if (id == 1) {
        return "Administrador";
      } else if (id == 2) {
        return "Editor";
      }
    },
    async changeActive(Id_usr, Active) {
      // console.log({ user });
      try {
        let res = await PostService.UserActive(Id_usr, Active);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style></style>
