<template>
  <div class="success-check-out">
    <v-dialog :modelValue="localDialog" width="auto" persistent>
      <v-card max-width="800" class="px-5 py-5">
        <div class="icon text-center my-3">
          <v-icon
            style="
              font-size: 130px;
              border: 1px solid green;
              border-radius: 50%;
            "
            color="success"
            class="my-4"
            >mdi-check</v-icon
          >
          <h2>Order Placed Successfully!</h2>
        </div>
        <p class="text-grey-darken-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          possimus culpa veniam! Molestiae dicta veritatis accusantium,
          voluptates aperiam libero impedit vero facere quis blanditiis
          aspernatur magni repellat quam, dolor voluptatem!
        </p>
        <v-btn
          class="font-weight-black mx-auto my-4"
          color="light-blue-darken-3"
          height="40"
          size="large"
          @click="doCheckOut"
          >Get It</v-btn
        >
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/stores/Cart";
import { mapActions } from "pinia";

export default {
  data: () => ({
    localDialog: false,
  }),
  props: ["dialog"],
  watch: {
    dialog(newVal) {
      this.localDialog = newVal;
    },
  },
  methods: {
    ...mapActions(cartStore, ["emptyCartItems"]),
    doCheckOut() {
      this.emptyCartItems();
      this.$router.push({ name: "home" });
      this.localDialog = false;
    },
  },
};
</script>
