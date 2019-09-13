<template>
  <div>
    <ContentTitleBar :title="title" />
    <b-row align-h="center" class>
      <div class="cont_persons">
        <transition-group name="company" tag="ul" class="content__list">
          <li class="company" v-for="person in lists" :key="person.id">
            <div class="company__img"></div>
            <ul class="company__name" id="name">
              <h3 style="margin: auto;">{{ person.name }}</h3>
            </ul>
          </li>
        </transition-group>
      </div>
    </b-row>
  </div>
</template>
<script >
import ContentTitleBar from "@/components/ContentTitleBar.vue";
import json from "@/json/nosotros.json";
export default {
  data() {
    return {
      title: "Nosotros",
      lists: [],
      options: {
        minSize: 11,
        maxSize: 60
      }
    };
  },
  created: function() {
    this.getPersons();
  },
  methods: {
    getPersons: function() {
      this.lists = json.persons;
    }
  },
  components: { ContentTitleBar }
};
</script>