<template>
  <v-app>
    <Header />
    <v-content class="pt-20">
      <h1>This is question</h1>
    </v-content>
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
