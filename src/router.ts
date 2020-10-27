import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();

const router = createRouter({
  history: history,
  routes: [
    { path: "/", redirect: "/entry" },
    { path: "/entry", component: () => import("./views/Entry.vue") },
    { path: "/home", component: () => import("./views/Home.vue") },
  ],
});

export default router;
