<template>
  <div>
    <ContentTitleBar :title="title" />
    <b-row align-h="center">
      <div class="cont_persons">
        <transition-group name="company" tag="ul" class="content__list">
          <li class="company" v-for="person in lists" :key="person.id">
            <!-- <div class="company__card" id="card">
              <div class="company__inner" :style="{transform: flip}" >
                <div class="company__img">
                  <img :src="person.foto" alt="Foto" />
                  <ul class="company__name" id="name">
                    <p style="margin: auto;">{{ person.name }}</p>
                  </ul>
                </div>
                <div class="company__data">
                  <p style="margin: auto;">{{ person.name }}</p>
                </div>
              </div>
            </div> -->
            <PresentationCard
              :name="person.name"
              :foto="person.foto"
              :info="person.info"
            ></PresentationCard>
          </li>
        </transition-group>
        <!-- <PresentationCard></PresentationCard> -->
      </div>
    </b-row>
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
  methods: {
    getPersons: function() {
      this.lists = json.persons;
    }
  },
  components: { ContentTitleBar, PresentationCard }
};
</script>
