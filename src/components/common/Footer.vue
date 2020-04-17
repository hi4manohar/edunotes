<template>
  <v-footer
    color="white lighten-1"
    class="d-flex justify-space-between py-2 px-5"
    fixed
  >
    <router-link to="/content">
      <div class="footbtn" :class="[active === 'home' ? 'active' : '']" ripple>
        <v-icon size="25">mdi-home</v-icon><span class="caption">Home</span>
      </div>
    </router-link>
    <router-link to="/question">
      <div
        class="footbtn enc"
        :class="[active === 'question' ? 'active' : '']"
        ripple
      >
        <v-icon size="25">mdi-book-multiple</v-icon><span class="caption">Books/Notes</span>
      </div>
    </router-link>

    <router-link to="answers" ripple>
      <div
        class="footbtn enc"
        :class="[active === 'enc' ? 'active' : '']"
        ripple
      >
        <v-icon size="25">mdi-book-open-page-variant </v-icon><span class="caption">Answers</span>
      </div>
    </router-link>

    <router-link to="syllabus">
      <div
        class="footbtn"
        :class="[active === 'syllabus' ? 'active' : '']"
        ripple
      >
        <v-icon size="25">mdi-timer</v-icon><span class="caption">Syllabus</span>
      </div>
    </router-link>
  </v-footer>
</template>

<script>
export default {
  props: ["active"],
  name: "Footer",
  data: () => ({})
};
</script>
<style scoped="">
.v-footer {
  box-shadow: 0px 0px 2px #888;
}
.footbtn.active i,
.footbtn.active {
  color: #1565c0;
}
.v-btn {
  font-size: 10px;
  border-radius: 50%;
}
.footbtn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 10px;
  padding: 0px 0px;
  color: #616161;
}
.enc {
  width: 55px;
}
.footbtn i {
  font-size: 22px;
  display: block !important;
}
</style>
