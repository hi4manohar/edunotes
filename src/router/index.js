import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ArticleList from "../views/ArticleList";
import ArticleContent from "../views/ArticleContent"
import Question from "../views/Question";
import Encyclopedia from "../views/Encyclopedia";
import Notes from "../views/Notes";
import Syllabus from "../views/Syllabus";
import SubjectPosts from "../views/SubjectPosts";
import Notifications from "../views/Notifications";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: () => import("../views/About.vue") },
  { path: "/home/:viewtype", name: "Welcome", component: Home },
  { path: "/content", name: "ArticleList", component: ArticleList },
  { path: "/post/:articleid", name: "ArticleContent", component: ArticleContent },
  { path: "/question", name: "Question", component: Question },
  { path: "/encyclopedia", name: "Encyclopedia", component: Encyclopedia },
  { path: "/notes", name: "Notes", component: Notes },
  { path: "/syllabus", name: "Syllabus", component: Syllabus },
  { path: "/syllabus/:subjects", name: "SubjectPosts", component: SubjectPosts },
  { path: "/notifications", name: "Notifications", component: Notifications }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // scrollBehavior (to, from, savedPosition) {
  //   console.log(savedPosition);
  //   if (savedPosition) {
  //     console.log('hello')
  //     return savedPosition
  //   } else {
  //     // return { x: 0, y: 100 }
  //   }
  // },
  routes
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token_id");

  if (authRequired && !loggedIn) {
    return next("/");
  }

  next();
});

export default router;
