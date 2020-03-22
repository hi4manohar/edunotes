<template>
  <v-app>
    
    <h1>Welcome to Edunotes</h1>
  </v-app>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null
    };
  }
};
</script>
