<template>
  <v-footer
    color="white lighten-1"
    class="d-flex justify-space-between pa-2"
    fixed
  >
    <div class="footbtn" ripple><v-icon>mdi-home</v-icon>Home</div>
    <div class="footbtn" ripple><v-icon>mdi-home</v-icon>About</div>
    <div class="footbtn" ripple><v-icon>mdi-home</v-icon>Notes</div>
    <div class="footbtn" ripple><v-icon>mdi-home</v-icon>Contact</div>
    <div class="footbtn" ripple><v-icon>mdi-home</v-icon>Settings</div>
  </v-footer>
</template>

<script>
export default {
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
