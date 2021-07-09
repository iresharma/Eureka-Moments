import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/qPage",
    name: "q-page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/qPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, __, next) => {
  if (localStorage.getItem("logged")) {
    if (to.name === "Home") return router.push("/about");
    return next();
  }
  if (to.name === "Home") return next();
  return router.push({ name: "Home" });
});

export default router;
