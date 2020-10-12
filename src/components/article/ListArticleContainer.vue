<template>
  <div :class="$options.name">
    <v-row no-gutters>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        v-for="(name, index) in names"
        :key="index"
        class="pa-2"
      >
        <div class="list-card" @click="$router.push('/post/' + index)">
          <v-card
            class="mx-auto elevation-0 px-1"
            :class="{ active: activeIndex === index }"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar
                v-if="name.guid"
                class="ml-3 mt-3 article-img"
                size="64"
                tile
              >
                <v-img :src="name.guid">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="black lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-avatar>
              <v-card class="elevation-0" width="100%">
                <v-list-item three-line>
                  <v-list-item-content class="align-self-center">
                    <span class="caption">{{
                      name.post_date | dateFormat
                    }}</span>
                    <v-list-item-subtitle class="pt-1 subtitle-2">{{
                      name.post_title
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { momentFilter } from "@/filters";
export default {
  props: ["names"],
  filters: {
    dateFormat: momentFilter.dateFormat
  },
  name: "ListArticleContainer",
  data: () => ({
    activeIndex: false
  })
};
</script>

<style scoped>
.v-list-item__title {
  font-size: 18px !important;
}
.v-list-item__subtitle {
  font-size: 11px;
  max-width: 90%;
}
.article-img {
  border-radius: 16px;
  overflow: hidden;
  background: #f5f5f5;
}
.v-card {
  border-radius: 0px !important;
}
</style>
