<template>
  <v-app>
    <Header />
    <h2>This is question component</h2>
    <Footer active="question" />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Question",
  data: () => ({}),
  components: {
    Header,
    Footer
  }
};
</script>
