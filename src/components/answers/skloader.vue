<template>
  <div class="skloader" v-if="loading">
    <v-list-item v-for="n in 3" :key="n" class="pa-0">
      <v-list-item-content>
        <v-skeleton-loader
          :loading="skloader.loading"
          :transition="skloader.transition"
          :height="skloader.height"
          :type="skloader.type"
        >
        </v-skeleton-loader>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>

import { skloaderMixin, cordovaMixin } from "../../mixins";

export default {
    name: 'skloader',
    props: ['loading'],
    mixins: [skloaderMixin, cordovaMixin]
}
</script>

<style scoped>
.skloader .v-list-item__content {
  padding: 0px;
}
</style>
