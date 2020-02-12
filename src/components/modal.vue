<template>
  <transition name="modal-fade">
    <div class="modal-backdropq">
      <div
        class="modalq"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <p>{{ title }}</p>

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <div class="l-form">
            <slot name="body">
              <form @submit.prevent="option()" method="post">
                <div class="public-select">
                  <select v-model="infoEdit.Public" required>
                    <option :value="1"> Publico </option>
                    <option :value="0"> Borrador </option>
                  </select>
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    name="name"
                    id="video-name"
                    placeholder="Nombre del video"
                    required="required"
                    v-model="infoEdit.Name"
                  />
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    name="URL"
                    id="video-url"
                    placeholder="https://www.youtube.com/..."
                    required="required"
                    v-model="infoEdit.VideoURL"
                  />
                </div>
                <div class="form-btn">
                  <button type="submit">{{ action }}</button>
                </div>
              </form>
            </slot>
          </div>
        </section>
        <!-- <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </slot>
        </footer> -->
      </div>
    </div>
  </transition>
</template>
<script>
import PostService from "../PostService";
export default {
  name: "modal",
  props: {
    info: Object
  },
  data() {
    return {
      infoEdit: this.info,
      title: "",
      action: "",
      edit: false,
      error: ""
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    checkOp() {
      if (this.P_name != "") {
        this.title = "Editar video";
        this.action = "Editar";
        this.edit = true;
      } else {
        this.title = "Nuevo Video";
        this.action = "Aceptar";
        this.edit = false;
      }
    },
    async video() {
      try {
        var dir = this.toEmbed(this.info.URL);
        this.info.URL = "https://www.youtube.com/embed/" + dir;

        let res = await PostService.NewVideo(this.info);
        this.close();
      } catch (err) {
        this.error = err.message;
      }
    },
    async editVideo() {
      try {
        let res = await PostService.editVideo(this.infoEdit);
        console.log(res);
        this.close();
      } catch (err) {
        this.error = err.message;
      }
    },
    option() {
      console.log(this.edit);
      if (this.edit) {
        console.log("editando");
        this.editVideo();
      } else {
        this.video();
      }
    },
    toEmbed(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    }
  },
  mounted() {
    this.checkOp();
  }
};
</script>
<style lang="scss">
.modal-backdropq {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .modalq {
    background: #ffffff;
    width: 500px;
    // height: 400px;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    background-color: rgb(0, 183, 255);
    color: white;
    justify-content: space-between;
    p {
      margin: auto 0;
      font-size: 1.3rem;
    }
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: 2px solid white;
    border-radius: 10px;
    // font-size: 20px;
    // padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
  }
  .public-select {
    select {
      border: none;
      padding: 0.5rem;
      border-radius: 10px;
      background-color: #38bcf0;
      color: white;
    }
    select:focus {
      outline: none;
    }
  }
}
</style>
