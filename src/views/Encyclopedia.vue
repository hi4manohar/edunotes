<template>
  <v-app>
    <Header />
    <v-content class="pt-20">
      <h1>This is Encyclopedia component</h1>
    </v-content>
    <Footer active="enc" />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Encyclopedia",
  data: () => ({}),
  components: {
    Header,
    Footer
  }
};
</script>
