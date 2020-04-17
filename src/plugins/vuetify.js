import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" //'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
});
