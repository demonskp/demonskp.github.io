export default [
  {
    path: "/game",
    name: "game-index",
    component: () => import("../../views/game/index.vue"),
  },
  {
    path: "/game/link-game",
    name: "link-game",
    component: () => import("../../views/game/link-game/index.vue"),
  },
  {
    path: "/game/link-game/settings",
    name: "link-game-settings",
    component: () => import("../../views/game/link-game/settings/index.vue"),
  },
  {
    path: "/game/zelda-game",
    name: "zelda-game",
    component: ()=>import("@/views/game/zelda-game/index.vue")
  }
];
