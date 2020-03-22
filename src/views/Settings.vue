<template>
  <v-app>
    <Header pagetitle="Test Series"/>
    <v-content class="pt-0">
      <v-container>
          <v-row>
            <v-col>
              <h4>Subjects</h4>
            </v-col>
          </v-row>
          <v-row>
              <v-col cols="6" v-for="(n, index) in 10" :key="index">
                <router-link to="/syllabus/physics">
                <v-card :elevation="3"  v-ripple>
                  <div class="card-header blue lighten-4">
                    <span class="blue lighten-6">2</span>
                  </div>
                  <div class="card-footer">
                    English
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
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
    name: "Settings",
    data: () => ({}),
    components: {
        Header,
        Footer
    }
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

