import { createRouter, createWebHashHistory } from "vue-router";
import game from "./modules/game";
import notes from "./modules/notes";
import cats from "./modules/cats";

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
        {
          path: "/",
          name: "/",
          component: ()=>import("../layout/Layout.vue"),
          children: [
            ...game,
            ...notes,
            ...cats,
          ]
        },
      ],
    },
  ],
});

export default router;
