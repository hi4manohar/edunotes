<template>
  <v-app>
    <Header pagetitle="Syllabus"/>
    <v-content class="pt-0">
      <v-container>
          <v-row>
            <v-col>
              <h4>Subjects</h4>
            </v-col>
          </v-row>
          <v-row>
              <v-col cols="6" v-for="(subject, index) in subjects" :key="index">
                <router-link :to="'/syllabus/' + subject.slug">
                <v-card :elevation="3"  v-ripple>
                  <div class="card-header red lighten-4">
                    <span class="blue lighten-6">{{ index+1 }}</span>
                  </div>
                  <div class="card-footer">
                    {{ subject.name }}
                  </div>
                </v-card>
              </router-link>
              </v-col>
          </v-row>
        </v-container>
    </v-content>
    <Footer active="settings" />
  </v-app>
</template>
<script>

import { mapState, mapActions } from "vuex";

import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
    name: "Settings",
    data: () => ({}),
    components: {
        Header,
        Footer
    },
    computed: {
      ...mapState({
        subjects: state => state.article.subjectList
      })
    },
    methods: {
      ...mapActions({
        subjectList: "article/subjectList",
      })
    },
    created() {
      if (!this.subjects.length) {
        this.subjectList();
      }
    },
};
</script>
<style scoped="">
.v-content {
  margin-top: 56px;
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
}
.card-header{
  height: 80px;
  position: relative;
}
.card-header span{
  position: absolute;
  bottom:0px;
  left: 0px;
  padding:7px 15px;
  font-weight: 800;
  color: #000;
  border-radius: 0px 4px 0px 0px;
}
.card-footer{
  padding:10px;
  font-size: 13px;
}
h4{
  font-size: 16px;
  margin-bottom: 0px;
}
</style>

