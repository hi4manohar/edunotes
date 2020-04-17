<template>
  <div>
    <div class="list-card mb-2" v-for="(name, index) in names" :key="index">
      <v-card class="mx-auto elevation-0">
        <v-list-item>
          <v-list-item-content class="pb-0">
            <v-list-item-title
              class="subtitle-2 text-wrap"
              v-text="name.post_title"
            ></v-list-item-title>
            <v-list-item-subtitle style="font-size:12px"
              >Posted on:
              {{ name.post_date | dateFormat }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item-subtitle class="pl-2" style="font-size:13px">
          <v-chip
            v-for="(tag, tagindex) in name.tags.split(',')"
            :key="tagindex"
            class="ma-2"
            x-small
            color="pink"
            label
            text-color="white"
            >{{ tag }}
          </v-chip>
        </v-list-item-subtitle>
        <v-card-text
          class="pa-4 pt-0 article-description"
          v-html="trimmedData(name.post_content)"
        ></v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="px-3">
          <router-link to="write/123" class="ml-1 mr-3">
            <v-btn
              outlined
              small
              color="primary"
              class="text-capitalize font-weight-regular"
            >
              Write Answer
            </v-btn>
          </router-link>
          <v-btn
            outlined
            small
            color="primary"
            class="text-capitalize font-weight-regular"
            @click="$router.push('/answers/' + index)"
          >
            View Answer
          </v-btn>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title class="subtitle-2">
                  <v-icon>{{ item.icon }}</v-icon> {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { momentFilter } from "../../filters";

export default {
  props: ["names"],
  name: "AnswersContentContainer",
  filters: {
    dateFormat: momentFilter.dateFormat
  },
  data: () => ({
    items: [
      { icon: "mdi-whatsapp", title: "Whatsapp" },
      { icon: "mdi-facebook", title: "Facebook" }
    ]
  }),
  methods: {
    trimmedData(str) {
      if (str === null || str === "") return false;
      else str = str.toString();
      return str
        .replace(/(<([^>]+)>)/gi, "")
        .trim()
        .substring(0, 100);
    }
  }
};
</script>

<style scoped>
.v-content {
  margin-top: 56px;
  margin-bottom: 56px !important;
}
.v-list-item__title {
  font-size: 18px !important;
}
.v-list-item__subtitle {
  font-size: 11px;
  max-width: 90%;
}
h4 {
  font-size: 16px !important;
  margin-bottom: 0px;
}
.v-card {
  border-radius: 0px !important;
}
.v-btn {
  font-size: 12px;
}
.v-btn span i {
  font-size: 18px !important;
}
</style>
