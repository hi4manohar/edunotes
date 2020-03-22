<template>
  <v-app>
    <Header pagetitle="Syllabus"/>
    <v-content class="pt-0">
      <v-container>

        <div class="skloader" v-if="skloader.loading">
          <v-skeleton-loader
            :loading="skloader.loading"
            :transition-group="skloader.transition"
            :height="skloader.height"
            :type="skloader.types"
          >
          </v-skeleton-loader>
        </div>
        <div class="content" v-else>
          <v-row>
            <v-col>
              <h4>Subjects</h4>
            </v-col>
          </v-row>
          <v-row>
              <v-col cols="6" v-for="(subject, index) in subjects" :key="index">
                <router-link :to="'/syllabus/' + subject.slug">
                <v-card :elevation="3"  v-ripple>
                  <div :class="'card-header '+ color[index]">
                    <span class="text--white">{{ index+1 }}</span>
                  </div>
                  <div class="card-footer">
                    {{ subject.name }}
                  </div>
                </v-card>
              </router-link>
              </v-col>
          </v-row>
        </div>
      </v-container>
    </v-content>
    <Footer active="syllabus" />
  </v-app>
</template>
<script>

import { mapState, mapActions } from "vuex";

import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Syllabus",
  data: () => ({
    color: ["red", "blue", "pink", "purple", "indigo"],
    skloader: {
      loading: true,
      transition: "none",
      height: 388,
      types: "article, card-avatar"
    }
  }),
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
    } else {
      this.skloader.loading = false;
    }
  },

  watch: {
    subjects: function(n) {
      if (n.length > 0) {
        this.skloader.loading = false;
      }
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
  color: #fff;
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

