<template>
  <v-container
    class="text-center"
    fill-height
    style="height: calc(100vh - 58px);"
  >
    <v-row align="center">
      <v-col>
        <h1 class="headline primary--text mb-3">We&rsquo;ll be back soon!</h1>

        <p>
          Sorry for the inconvenience but we&rsquo;re performing some
          maintenance at the moment. If you need to you can always
          <a href="mailto:hi4manohar@gmail.com?Subject=Maintainance Issues"
            >contact us</a
          >, otherwise we&rsquo;ll be back online shortly!
        </p>
        <p>&mdash; The Team</p>

        <a @click="$router.go()">
          <v-btn color="primary" outlined>
            Get me out of here!
          </v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Maintainance"
};
</script>

<style scoped="">
.v-content {
  margin-top: 56px;
  height: calc(100vh - 56px);
  overflow: auto;
  padding: 10px;
}
</style>
