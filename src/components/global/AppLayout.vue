<template>
  <div class="layout">
    <v-layout class="position-relative">
      <card-drawer :currentWindowWidth="currentWindowWidth"></card-drawer>
      <open-menu :currentWindowWidth="currentWindowWidth"></open-menu>
      <ResponseNav v-if="currentWindowWidth <= 990" />
      <AppNav v-if="$route.name != 'checkout' && currentWindowWidth >= 990" />
      <FixedNav v-if="$route.name != 'checkout' && currentWindowWidth >= 990" />

      <v-main>
        <slot></slot>
      </v-main>

      <AppFooter v-if="$route.name != 'checkout'" />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "@/components/global/AppNav.vue";
import FixedNav from "./FixedNav.vue";
import CardDrawer from "@/components/global/CartDrawer.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import ResponseNav from "../home_page/ResponseNav.vue";
import OpenMenu from "./OpenMenu.vue";
export default {
  components: {
    AppNav,
    CardDrawer,
    AppFooter,
    FixedNav,
    ResponseNav,
    OpenMenu,
  },
  data: () => ({
    currentWindowWidth: window.innerWidth,
  }),
  methods: {
    detectWindow() {
      this.currentWindowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.detectWindow);
  },
};
</script>
