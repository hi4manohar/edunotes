import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ArticleList from "../views/ArticleList";
import ArticleContent from "../views/ArticleContent";
import Question from "../views/Question";
import Encyclopedia from "../views/Encyclopedia";
import Notes from "../views/Notes";
import Settings from "../views/Settings";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/home/:viewtype",
    name: "Welcome",
    component: Home
  },
  {
    path: "/content",
    name: "ArticleList",
    component: ArticleList
  },
  {
    //route: /content/anyarticle name
    path: "/content/:articlename",
    name: "ArticleContent",
    component: ArticleContent
  },
  {
    //route: /content/anyarticle name
    path: "/question",
    name: "Question",
    component: Question
  },
  {
    //route: /content/anyarticle name
    path: "/encyclopedia",
    name: "Encyclopedia",
    component: Encyclopedia
  },
  {
    //route: /content/anyarticle name
    path: "/notes",
    name: "Notes",
    component: Notes
  },
  {
    //route: /content/anyarticle name
    path: "/settings",
    name: "Settings",
    component: Settings
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
