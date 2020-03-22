<template>
  <v-app>
    <v-container>
      <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Choose Chapter</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <div>
      <v-sheet
        class="mx-auto mt-10"
        max-width="400"
      >
        <v-slide-group>
          <v-slide-item
            v-for="n in 15"
            :key="n">
            <v-card
              class="ma-3"
              :elevation="5"
              max-width="260"
            >
              <v-img
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
              <v-card-title>Cafe Badilico</v-card-title>
              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <!-- <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating> -->

                  <!-- <div class="grey--text ml-4">4.5 (413)</div> -->
                </v-row>

                <div class="my-4 subtitle-1">
                  $ • Italian, Cafe
                </div>

                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>
<style scoped="">
  
</style>
