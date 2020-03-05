import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ArticleList from "../views/ArticleList";
import ArticleContent from "../views/ArticleContent";

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
    path: "/app",
    name: "App",
    component: () => import("../views/App.vue")
  },
  {
    path: "/app/details",
    name: "App",
    component: () => import("../views/App.vue")
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
