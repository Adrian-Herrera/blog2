<template>
  <div class="editor">
    <div class="input-group">
      <h5>Escoja una categoria</h5>
      <select v-model="DataInfo.Id_cat">
        <option
          v-for="cat in CategoryList"
          :key="cat.Id_cat"
          :value="cat.Id_cat"
          >{{ cat.category }}</option
        >
        <!-- <option>B</option>
        <option>C</option> -->
      </select>
      <h5>Escoja si sera visible</h5>
      <select v-model="DataInfo.Public">
        <option :value="1"> Publico </option>
        <option :value="0"> Borrador </option>
        <!-- <option>B</option>
        <option>C</option> -->
      </select>
      <h5>Titulo</h5>
      <input type="text" id="titulo" v-model="DataInfo.Title" />
      <h5>Descripcion</h5>
      <textarea
        rows="4"
        id="descripcion"
        v-model="DataInfo.Description"
      ></textarea>
    </div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <icon name="004-bold" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <icon name="031-italic" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <icon name="053-strikethrough" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <icon name="057-underline" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <icon name="009-code" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <icon name="043-paragraph" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <icon name="006-bullet list" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <icon name="038-number" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <icon name="005-quote" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <icon name="009-code" />
        </button>

        <button class="menubar__button" @click="commands.horizontal_rule">
          <icon name="hr" />
        </button>

        <button
          class="menubar__button"
          @click="showImagePrompt(commands.image)"
        >
          <icon name="image" />
        </button>

        <button class="menubar__button" @click="commands.undo">
          <icon name="058-undo" />
        </button>

        <button class="menubar__button" @click="commands.redo">
          <icon name="044-redo" />
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
    <div><button class="editor-button" @click="save()">Guardar</button></div>
    <div class="export">
      <h3>HTML</h3>
      <pre><code>{{ html }}</code></pre>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,
  Focus
} from "tiptap-extensions";
import PostService from "../PostService";
export default {
  components: {
    EditorContent,
    EditorMenuBar,
    Icon
  },
  props: {
    data: Object
  },
  data() {
    return {
      DataInfo: [],
      CategoryList: [],
      text: "",
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Image(),
          new Focus({
            className: "has-focus",
            nested: true
          })
        ],
        autoFocus: true,
        content: "",
        onUpdate: ({ getHTML }) => {
          this.html = getHTML();
        }
      }),
      html: "<div>Update content to see changes</div>"
    };
  },
  methods: {
    async save() {
      if (!this.DataInfo.Id_art) {
        this.newPost();
      } else {
        this.editPost();
      }
    },
    async newPost() {
      this.DataInfo.Body = this.html;
      try {
        let status;
        status = await PostService.insertPost(this.DataInfo);
        if (status.status == 200) {
          this.$router.push({ path: "/dashboard/Publicaciones" });
        }
      } catch (err) {
        this.error = err.message;
      }
    },
    async editPost() {
      this.DataInfo.Body = this.html;
      try {
        let status;
        status = await PostService.editPost(this.DataInfo);
        if (status.status == 200) {
          this.$router.push({ path: "/dashboard/Publicaciones" });
        }
      } catch (err) {
        this.error = err.message;
      }
    },
    async getCat() {
      try {
        this.CategoryList = await PostService.getCategory("/CategoryList");
      } catch (err) {
        this.error = err.message;
      }
    },
    showImagePrompt(command) {
      const src = prompt("Ingresa la dirección de tu imagen aqui");
      if (src !== null) {
        command({ src });
      }
    },
    changeContent() {
      this.editor.setContent(this.DataInfo.Body);
      this.html = this.DataInfo.Body;
    },
    loadData() {
      this.DataInfo = this.data;
    },
    showText() {
      console.log(this.DataInfo.Title);
      console.log(this.DataInfo.Description);
      this.DataInfo.Body = this.html;
      console.log(this.DataInfo.Body);
    }
  },
  mounted() {
    this.loadData();
    this.getCat();
    this.changeContent();
  }
};
</script>
<style lang="scss">
.has-focus {
  border-radius: 3px;
  box-shadow: 0 0 0 3px #3ea4ffe6;
}
</style>
