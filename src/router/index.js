import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "news",

    component: () =>
      import(/* webpackChunkName: "news" */ "../views/NewsView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",

    component: () =>
      import(/* webpackChunkName: "jobs" */ "../views/JobsView.vue"),
  },
  {
    path: "/ask",
    name: "ask",

    component: () =>
      import(/* webpackChunkName: "ask" */ "../views/AskView.vue"),
  },
  {
    path: "/user/:id",
    name: "user",

    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserView.vue"),
  },
  {
    path: "/item/:id",
    name: "item",

    component: () =>
      import(/* webpackChunkName: "item" */ "../views/ItemView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
