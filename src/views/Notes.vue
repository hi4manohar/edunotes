<template>
  <v-app>
    <Header />
    <v-content class="pt-20">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>

              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="120px"
              >
              </v-img>
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
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
  data: () => ({
    cards: [
      { title: 'Favorite road', subtitle: 'This is subtitle', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', subtitle: 'This is subtitle', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { title: 'Favorite road', subtitle: 'This is subtitle', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', subtitle: 'This is subtitle', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { title: 'Favorite road', subtitle: 'This is subtitle', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', subtitle: 'This is subtitle', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
  }),
  components: {
    Header,
    Footer
  }
};
</script>
