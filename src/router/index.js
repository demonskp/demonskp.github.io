import { createRouter, createWebHashHistory } from "vue-router";
import game from "./modules/game";
import notes from "./modules/notes";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/root.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../views/home/index.vue"),
        },
        ...game,
        ...notes,
      ],
    },
  ],
});

export default router;
