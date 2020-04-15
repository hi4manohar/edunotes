<template>
    <v-container
      class="text-center"
      fill-height
      style="height: calc(100vh - 58px);"
    >
      <v-row align="center">
        <v-col>
          <h1 class="headline primary--text mb-3">Whoo, App Update :)</h1>

          <p>
          We've updated App with some bug fixes and great features. Do update the app 
          To stay updated.
        </p>
        <p>&mdash; The Team</p>

          <a href="https://play.google.com/store/apps/details?id=com.fresherscode.edunotes">
            <v-btn color="primary" outlined>
              Update The App
            </v-btn>
          </a>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "Maintainance",
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
