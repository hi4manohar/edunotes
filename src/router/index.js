/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import HomeList from "../views/HomeList";
import ArticleList from "../views/Articles/ArticleList";
import ArticleContent from "../views/Articles/ArticleContent";
import CategoryArticle from "../views/Articles/CategoryArticle";
import Books from "../views/books/Books";
import BookDescription from "../views/books/BookDescription";
import Answers from "../views/Answers";
import AnswersContent from "../views/AnswersContent";
import Ask from "../views/Ask";
import Syllabus from "../views/Syllabus";
import SubjectPosts from "../views/SubjectPosts";
import Notifications from "../views/Notifications";
import ChapterPosts from "../views/ChapterPosts";
import WriteAnswer from "../views/WriteAnswer";
import Notfound from "../views/Notfound";
import Pdf from "../views/Pdf";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  { path: '/homelist', name: 'HomeList', component: HomeList },
  { path: "/home/:viewtype", name: "Welcome", component: Home },
  { path: "/content", name: "ArticleList", component: ArticleList },
  { path: "/content/:category", name: "CategoryArticle", component: CategoryArticle },
  {
    path: "/post/:articleid",
    name: "ArticleContent",
    component: ArticleContent
  },
  { path: "/books", name: "Books", component: Books },
  {
    path: "/books/:bookid",
    name: "BookDescription",
    component: BookDescription
  },
  { path: "/answers", name: "Answers", component: Answers },
  {
    path: "/answers/:articleid",
    name: "AnswersContent",
    component: AnswersContent,
    meta: { transition: "flip-x" }
  },
  { path: "/ask", name: "Ask", component: Ask },
  { path: "/syllabus", name: "Syllabus", component: Syllabus },
  {
    path: "/syllabus/:subjects",
    name: "SubjectPosts",
    component: SubjectPosts
  },
  {
    path: "/syllabus/chapters/:chapter",
    name: "ChapterPosts",
    component: ChapterPosts
  },
  { path: "/write/:quid", name: "WriteAnswer", component: WriteAnswer },
  { path: "/notifications", name: "Notifications", component: Notifications },
  { path: "/pdf", name: "Pdf", component: Pdf },
  { path: "*", name: "404", component: Notfound }
];

export const router = new VueRouter({
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if( to.name === 'BookDescription' || to.name === 'ArticleContent' ) {
      return { x: 0, y: 0 };
    }
    if (savedPosition) {
      return savedPosition
    }
  },
  routes
});

router.beforeEach((to, from, next) => {

  // check if width of the display
  if (window.innerWidth > 1028) {
    return false;
  }

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
