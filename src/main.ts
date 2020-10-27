import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.ts";
import './index.css'

createApp(App).use(router).mount("#app");
