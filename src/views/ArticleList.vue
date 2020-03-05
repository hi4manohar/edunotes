<template>
  <div class="home">
    <Header />
    <ul>
      <li>List of article</li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "ArticleList",
  data: () => ({}),
  components: {
    Header,
    Footer
  }
};
</script>
