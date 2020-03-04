import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    name: "chooseboard",
    component: Home
  },
  {
    path: "/app",
    name: "app",
    component: () => import("../views/app.vue")
  },
  {
    path: "/app/details",
    name: "appdetails",
    component: () => import("../views/app.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
