<template>
  <app-layout class="position-relative">
    <router-view />
    <QuickView />
  </app-layout>
  <v-snackbar
    location="button"
    v-model="snackbar"
    timer="true"
    timeout="4000"
    multi-line
  >
    <p class="text-h6">{{ text }}</p>

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import AppLayout from "@/components/global/AppLayout.vue";
import QuickView from "@/components/home_page/QuickView.vue";

export default {
  components: { AppLayout, QuickView },
  data: () => ({
    snackbar: false,
    text: ``,
  }),
  inject: ["Emitter"],
  mounted() {
    this.Emitter.on("openSnackbar", (text) => {
      this.snackbar = true;
      this.text = text;
    });
  },
};
</script>
