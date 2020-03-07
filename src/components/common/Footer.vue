<template>
  <v-footer
    color="white lighten-1"
    class="d-flex justify-space-between pa-2"
    fixed
  >
    <router-link to="/content">
      <div class="footbtn" :class="[active === 'home' ? 'active' : '']" ripple>
        <v-icon>mdi-home</v-icon>Home
      </div>
    </router-link>
    <router-link to="/question">
      <div class="footbtn" :class="[active === 'question' ? 'active' : '']" ripple>
        <v-icon>mdi-head-question</v-icon>Question
      </div>
    </router-link>

    <router-link to="encyclopedia">
      <div class="footbtn" :class="[active === 'enc' ? 'active' : '']" ripple>
        <v-icon>mdi-book-open-page-variant </v-icon>Encyclopedia
      </div>
    </router-link>

    <router-link to="notes">
      <div class="footbtn" :class="[active === 'notes' ? 'active' : '']" ripple>
        <v-icon>mdi-note-multiple</v-icon>Notes
      </div>
    </router-link>

    <router-link to="settings">    
      <div class="footbtn" :class="[active === 'settings' ? 'active' : '']" ripple>
        <v-icon>mdi-settings-outline </v-icon>Settings
      </div>
    </router-link>
  </v-footer>
</template>

<script>
export default {
  props: ['active'],
  name: "Footer",
  data: () => ({
    links: ["Home", "About", "Team", "Services"]
  })
};
</script>
<style scoped="">
.v-footer {
  box-shadow: 0px 0px 2px #888;
}
.footbtn.active i, .footbtn.active  {
  color: blue;
}
.v-btn {
  font-size: 10px;
  border-radius: 50%;
}
.footbtn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  font-size: 10px;
  padding: 2px 0px;
  color: rgba(0, 0, 0, 0.6);
}
.footbtn i {
  font-size: 18px;
}
</style>
