<template>
  <div>
    <ContentTitleBar :title="title" />
    <transition-group name="company" tag="ul" class="content__list">
      <li class="company" v-for="person in lists" :key="person.id">
        <PresentationCard
          :name="person.name"
          :foto="person.foto"
          :info="person.info"
        ></PresentationCard>
      </li>
    </transition-group>
  </div>
</template>
<script>
import ContentTitleBar from "@/components/ContentTitleBar.vue";
import PresentationCard from "@/components/PresentationCard.vue";
import json from "@/json/nosotros.json";
export default {
  data() {
    return {
      title: "Nosotros",
      lists: [],
      options: {
        minSize: 11,
        maxSize: 60
      },
      flip: "none"
    };
  },
  created: function() {
    this.getPersons();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    getPersons: function() {
      this.lists = json.persons;
    }
  },
  components: { ContentTitleBar, PresentationCard }
};
</script>
