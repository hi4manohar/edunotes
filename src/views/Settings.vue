<template>
  <v-app>
    <Header />
    <h2>This is Settings component</h2>
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
