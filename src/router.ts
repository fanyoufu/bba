import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/chapter/:id",
      name: "chapter",
      // route level code-splitting
      // this generates a separate chunk (chapter.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "chapter" */ "./views/Chapter.vue")
    },
    {
      path: "/courselist",
      name: "courselist",
      // route level code-splitting
      // this generates a separate chunk (courselist.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "course" */ "./views/CourseList.vue")
    },
    {
      path: "/course/:id",
      name: "course",
      // route level code-splitting
      // this generates a separate chunk (chapter.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "chapter" */ "./views/Course.vue")
    }
  ]
});
