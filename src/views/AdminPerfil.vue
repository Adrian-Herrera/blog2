<template>
  <div class="perfil">
    <div>
      <form @submit.prevent="editProfile()" method="post" class="perfil_editor">
        <label for="Photo">Seleccione su foto</label>
        <input type="file" @change="onFileSelected" name="Photo" id="Photo" />
        <button @click="onUpload">Subir Archivo</button>
        <label for="Username">Nombre de usuario</label>
        <input
          type="text"
          name="Username"
          id="Username"
          v-model="data.Username"
        />
        <label for="Fullname">Nombre completo</label>
        <input
          type="text"
          name="Fullname"
          id="Fullname"
          v-model="data.Fullname"
        />
        <label for="Mail">Correo</label>
        <input type="email" name="Mail" id="Mail" v-model="data.Mail" />
        <label for="Phone">Telefono/Celular</label>
        <input type="number" name="Phone" id="Phone" v-model="data.Phone" />
        <label for="Description"
          >Información sobre usted (max 300 letras)</label
        >
        <textarea
          name="Description"
          id="Description"
          cols="30"
          rows="10"
          maxlength="300"
          v-model="data.Description"
        ></textarea>
        <button type="submit">Actualizar datos</button>
      </form>
    </div>
    <div class="perfil_preview">
      <div class="front">
        <div class="photo">
          <img src="https://via.placeholder.com/150?text=Foto" alt="Foto" />
        </div>
        <div class="name">{{ data.Fullname }}</div>
        <div class="info">
          <div class="info_item">
            <i class="material-icons"> mail_outline </i>
            <p>
              {{ data.Mail }}
            </p>
          </div>
          <div class="info_item">
            <i class="material-icons"> phone_android </i>
            <p>
              {{ data.Phone }}
            </p>
          </div>
        </div>
      </div>
      <div class="back">
        <p>
          {{ data.Description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
export default {
  data() {
    return {
      photo: null,
      data: {
        Username: this.$store.state.userData.Username,
        Fullname: this.$store.state.userData.Fullname,
        Mail: this.$store.state.userData.Mail,
        Phone: this.$store.state.userData.Phone,
        Description: this.$store.state.userData.Description,
        FirstLog: 1
      }
    };
  },
  methods: {
    async editProfile() {
      try {
        await PostService.editProfile(
          this.data,
          this.$store.state.userData.Id_usr
        );
        try {
          this.$store.commit("updateProfile", this.data);
          console.log("edit");
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        this.error = err.message;
      }
    },
    onFileSelected(event) {
      this.photo = event.target.files[0];
    },
    onUpload() {}
  }
};
</script>

<style></style>
