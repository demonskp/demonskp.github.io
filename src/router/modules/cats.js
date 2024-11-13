export default [
  {
    path: "/cats",
    name: "cats-index",
    component: () => import("../../views/cats/index.vue"),
  },
];
