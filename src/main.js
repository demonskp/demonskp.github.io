import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "element-plus/dist/index.css";
import "./assets/main.css";
import "./assets/css/var.less";

const app = createApp(App);

app.use(router);

app.mount("#app");
