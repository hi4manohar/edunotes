/* eslint-disable */ import Vue from "vue"; import VueRouter from "vue-router";
const Home = () => import( "../views/Home"); const HomeList = () => import(
"../views/HomeList"); const ArticleContent = () => import(
"../views/Articles/ArticleContent"); const CategoryArticle = () => import(
"../views/Articles/CategoryArticle"); const Books = () => import(
"../views/books/Books"); const BookDescription = () => import(
"../views/books/BookDescription"); const Answers = () => import(
"../views/Answers"); const AnswersContent = () => import(
"../views/AnswersContent"); const Ask = () => import( "../views/Ask"); const
Syllabus = () => import( "../views/Syllabus"); const SubjectPosts = () =>
import( "../views/SubjectPosts"); const Notifications = () => import(
"../views/Notifications"); const ChapterPosts = () => import(
"../views/ChapterPosts"); const WriteAnswer = () => import(
"../views/WriteAnswer"); const Notfound = () => import("../views/Notfound");
const Pdf = () => import("../views/Pdf"); const ArticleList = () =>
import("../views/Articles/ArticleList"); Vue.use(VueRouter); const routes = [ {
path: "/", name: "Home", component: Home }, { path: "/about", name: "About",
component: () => import("../views/About.vue") }, { path: '/homelist', name:
'HomeList', component: HomeList }, { path: "/home/:viewtype", name: "Welcome",
component: Home }, { path: "/content", name: "ArticleList", component:
ArticleList }, { path: "/content/:category", name: "CategoryArticle", component:
CategoryArticle }, { path: "/post/:articleid", name: "ArticleContent",
component: ArticleContent }, { path: "/books", name: "Books", component: Books
}, { path: "/books/:bookid", name: "BookDescription", component: BookDescription
}, { path: "/answers", name: "Answers", component: Answers }, { path:
"/answers/:articleid", name: "AnswersContent", component: AnswersContent, meta:
{ transition: "flip-x" } }, { path: "/ask", name: "Ask", component: Ask }, {
path: "/syllabus", name: "Syllabus", component: Syllabus }, { path:
"/syllabus/:subjects", name: "SubjectPosts", component: SubjectPosts }, { path:
"/syllabus/chapters/:chapter", name: "ChapterPosts", component: ChapterPosts },
{ path: "/write/:quid", name: "WriteAnswer", component: WriteAnswer }, { path:
"/notifications", name: "Notifications", component: Notifications }, { path:
"/pdf", name: "Pdf", component: Pdf }, { path: "*", name: "404", component:
Notfound } ]; export const router = new VueRouter({ base: process.env.BASE_URL,
scrollBehavior (to, from, savedPosition) { console.log('hi'); if( to.name ===
'BookDescription' || to.name === 'ArticleContent' ) { return { x: 0, y: 0 }; }
if (savedPosition) { return savedPosition } }, routes }); router.beforeEach((to,
from, next) => { // check if width of the display // if (window.innerWidth >
1028) { // return false; // } // redirect to login page if not logged in and
trying to access a restricted page const publicPages = ["/"]; const authRequired
= !publicPages.includes(to.path); const loggedIn =
localStorage.getItem("token_id"); if (authRequired && !loggedIn) { return
next("/"); } next(); }); export default router;
