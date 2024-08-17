/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// const pinia = createPinia();

// Components
import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
// Composables

import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.use(pinia);
app.mount("#app");
