<template>
  <v-app>
    <Header />
    <h2>This is Notes component</h2>
    <Footer active="notes" />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Notes",
  data: () => ({}),
  components: {
    Header,
    Footer
  }
};
</script>
