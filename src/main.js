import { createApp } from "vue";
import App from "./App.vue";
import ProgressBar from "./components/ProgressBar.vue";

const app = createApp(App);

app.component("progress-bar", ProgressBar);
app.mount("#app");
