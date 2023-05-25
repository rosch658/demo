import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import vipModule from "./vuex/index.js";
import ProgressBar from "./components/ProgressBar.vue";

const app = createApp(App);
const store = createStore(vipModule);

app.component("progress-bar", ProgressBar);
app.use(store);
app.mount("#app");
