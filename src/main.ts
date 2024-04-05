/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

//Pinia
import { createPinia } from "pinia";

// Composables
import { createApp } from "vue";

const pinia = createPinia();

const app = createApp(App);

registerPlugins(app);

app.use(pinia);

app.mount("#app");
