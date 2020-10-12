<template>
  <v-footer
    color="white lighten-1"
    class="d-flex justify-space-between py-2 px-5"
    fixed
    id="footerc"
  >
    <router-link to="/homelist">
      <div class="footbtn" :class="[active === 'home' ? 'active' : '']" ripple>
        <v-icon size="25">mdi-home</v-icon><span class="caption">Home</span>
      </div>
    </router-link>
    <router-link to="/ask">
      <div class="footbtn" :class="[active === 'ask' ? 'active' : '']" ripple>
        <v-icon size="25">mdi-frequently-asked-questions </v-icon
        ><span class="caption">Ask Me</span>
      </div>
    </router-link>
    <router-link to="/books">
      <div
        class="footbtn enc"
        :class="[active === 'books' ? 'active' : '']"
        ripple
      >
        <v-icon size="25">mdi-book-multiple</v-icon
        ><span class="caption">Books/Notes</span>
      </div>
    </router-link>

    <router-link to="/answers" ripple>
      <div
        class="footbtn enc"
        :class="[active === 'enc' ? 'active' : '']"
        ripple
      >
        <v-icon size="25">mdi-book-open-page-variant </v-icon
        ><span class="caption">Answers</span>
      </div>
    </router-link>
  </v-footer>
</template>

<script>
export default {
  props: ["active"],
  name: "Footer",
  data: () => ({
    isDesktop: false,
  }),

  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true });    
  },

  watch: {
    // whenever question changes, this function will run
    isDesktop: function (newval) {
      if( newval ) {
        document.getElementById("footerc").style.width = "100%";
        document.getElementById("footerc").style['max-width'] = "calc(100% - 300px)";
        document.getElementById("footerc").style['left'] = "auto";
      } else {
        document.getElementById("footerc").style['left'] = "auto";
        document.getElementById("footerc").style['max-width'] = "100%";
      }
    }
  },

  methods: {
    onResize () {
      this.isDesktop = window.innerWidth > 1264;
    },
  },
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
