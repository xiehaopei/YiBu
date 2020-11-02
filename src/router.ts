import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();

const router = createRouter({
  history: history,
  routes: [
    { path: "/", redirect: "/entry" },
    { path: "/entry", component: () => import("./views/Entry.vue") },
    {
      path: "/home",
      component: () => import("./views/Home.vue"),
      children: [
        { path: "/home", redirect:"/home/welcome" },
        { path: "welcome", component: () => import("./components/pages/Welcome.vue") },
        { path: "archives", component: () => import("./components/pages/Archives.vue") },
        { path: "guestbook", component: () => import("./components/pages/Guestbook.vue") },
        { path: "links", component: () => import("./components/pages/Links.vue") },
        { path: "about", component: () => import("./components/pages/About.vue") },
      ],
    },
  ],
});

export default router;
