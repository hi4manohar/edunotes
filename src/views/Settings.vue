<template>
  <v-app>
    <Header />
    <v-content class="pt-0">
      <h1>This is Setting Componetnt</h1>
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
</style>
