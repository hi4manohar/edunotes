<template>
  <v-app>
    <Header />
    <h2>This is Encyclopedia component</h2>
    <Footer active='enc'/>
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Encyclopedia",
  data: () => ({
  }),
  components: {
    Header,
    Footer
  }
};
</script>
