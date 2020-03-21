<template>
  <div>
    <v-app-bar app clipped-right color="#1565C0" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" white />
      <v-toolbar-title title class="pl-2">{{ pagetitle }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" width="85%" app>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["pagetitle"],
  name: "Header",
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    item: 0,
    items: [
      { text: "Change Board", icon: "mdi-account-cog-outline" },
      { text: "Change Class", icon: "mdi-account-cog-outline" },
      { text: "About Us", icon: "mdi-star" },
      { text: "Notifications", icon: "mdi-bell-outline" },
      { text: "Help", icon: "mdi-help-circle-outline" }
    ],
    names: [
      { title: "Photos", subtitle: "Jan 9, 2014" },
      { title: "Recipes", subtitle: "Jan 17, 2014" },
      { title: "Work", subtitle: "Jan 28, 2014" }
    ]
  })
};
</script>
<style scoped="">
.v-navigation-drawer {
  max-width: 300px;
}
</style>
