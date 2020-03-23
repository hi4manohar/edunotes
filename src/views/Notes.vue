<template>
  <v-app>
    <Header pagetitle="Notes" />
    <v-content class="pt-0">
      <v-container>
        <h4>Latest Notes</h4>
        <br>
        <v-card
      class="mx-auto mb-4"
      max-width="400"
    >
      <v-system-bar
        class="white--text"
        height="100px"
        color="green"
      >
        <v-card-title class="subtitle-1">Top 10 Australian beaches</v-card-title>
      </v-system-bar>
  
      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div class="caption">Whitehaven Beach</div>
  
        <div class="caption">Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="blue"
          text
        >
          View
        </v-btn>
  
        <v-btn
          color="blue"
          text
        >
          Download
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-system-bar
        class="white--text"
        height="100px"
        color="orange"
      >
        <v-card-title class="subtitle-1">Top 10 Australian beaches</v-card-title>
      </v-system-bar>
  
      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>
  
        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="blue"
          text
        >
          View
        </v-btn>
  
        <v-btn
          color="blue"
          text
        >
          Download
        </v-btn>
      </v-card-actions>
    </v-card>
      </v-container>
    </v-content>
    <Footer active="notes" />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Notes",
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
.v-content {
  margin-top: 56px;
  height: calc(100vh - 112px);
  margin-bottom: 56px !important;
  overflow: auto;
}

.v-list-item {
  padding: 0px !important;
}
.card-header{
  height: 80px;
  position: relative;
}
.card-header span{
  position: absolute;
  bottom:0px;
  padding:7px 15px;
  font-weight: 800;
  color: #000;
  border-radius: 0px 4px 0px 0px;
}
.card-footer{
  padding:10px;
  font-size: 13px;
}
</style>
