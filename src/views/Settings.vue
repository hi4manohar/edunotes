<template>
  <div class="bootstrap-container">
    <Header />
    <div class="bootstrap-view">
      <div>
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    </div>
    <Footer active="settings" />
  </div>
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
.bootstrap-view {
  margin-top: 56px;
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
}
</style>
