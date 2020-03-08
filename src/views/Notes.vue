<template>
  <v-app>
    <Header />
    <v-content class="pt-20">
      <h1>This is NoTES component</h1>
    </v-content>
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
