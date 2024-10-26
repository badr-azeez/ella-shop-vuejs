import { createApp } from "vue";

import router from "./router";

// Config Pinia
import { createPinia } from "pinia";

// conig mitt

import mitt from "mitt";

const Emitter = mitt();

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
import App from "./App.vue";
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .provide("Emitter", Emitter)
  .use(vuetify)
  .use(router)
  .use(createPinia())
  .mount("#app");
