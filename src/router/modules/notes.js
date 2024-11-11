import { notes } from "@/datas/notes";

export default [
  {
    path: "/notes",
    component: () => import("@/views/notes/layout.vue"),
    children:[
      {
        path: '/notes',
        name: 'notes-list',
        component: () => import("../../views/notes/list/index.vue"),
      },
      {
        path: '/notes/detail/:id',
        name: 'notes-detail',
        component: () => import("../../views/notes/detail/index.vue"),
        children: notes.map(item=>({
          path: `/notes/detail/${item.id}`,
          component: item.component,
          meta: item,
        }))
      }
    ]
  },
];
