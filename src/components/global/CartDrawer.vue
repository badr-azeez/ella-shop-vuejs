<template>
  <div class="app-card">
    <v-navigation-drawer
      :width="currentWindowWidth < 580 ? 300 : 450"
      temporary
      v-model="drawer"
      location="end"
    >
      <v-card elevation="0">
        <v-card-title class="font-weight-black d-flex justify-space-between">
          <span>Shopping Cart</span>
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>
        <v-card-title class="font-weight-black"
          >{{ cartItems?.length }} Items</v-card-title
        >
        <v-card-text v-if="cartItems?.length">
          <div
            class="items"
            :style="`height:${
              currentWindowWidth < 580 ? '530px' : '500px'
            } ; overflow-y: auto; overflow-x: hidden`"
          >
            <div class="mt-md-3" v-for="item in cartItems" :key="item.id">
              <v-row>
                <v-col cols="12" md="4">
                  <v-img
                    :src="item.thumbnail"
                    cover
                    :class="`${
                      currentWindowWidth < 580 ? 'w-50 mx-auto' : 'w-100'
                    }`"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="8">
                  <router-link
                    :to="{
                      name: 'GetSingleProductId',
                      params: { productId: item.id },
                    }"
                    class="text-decoration-none text-blue-accent-4"
                  >
                    <p class="text-h6">
                      {{ item.title }} -
                      <span class="font-weight-black">{{ item.category }}</span>
                    </p>
                  </router-link>
                  <p class="my-1 text-black text-h6 font-weight-black">
                    $
                    <span>{{
                      (
                        (item.price * (100 - item.discountPercentage)) /
                        100
                      ).toFixed(2)
                    }}</span>
                  </p>
                  <div class="d-flex ga-10 align-center">
                    <v-number-input
                      :model-value="item.quantity"
                      :reverse="false"
                      controlVariant="split"
                      :min="1"
                      :hideInput="false"
                      :inset="false"
                      variant="solo-filled"
                      density="compact"
                      class="mt-3"
                      @update:modelValue="updateQuantity(item.id, $event)"
                    ></v-number-input>
                    <v-icon
                      @click="deleteItem(item.id)"
                      class="cursor-pointer text-h4"
                      >mdi-close</v-icon
                    >
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-card-text>
        <v-card-text v-else>
          <div class="text-center mt-4">
            <p style="font-size: 19px">Your cart is empty</p>
            <v-btn
              @click="drawer = false"
              variant="outlined"
              class="my-5 rounded-pill"
              >Continue Shopping</v-btn
            >
          </div>
        </v-card-text>
        <div
          v-if="cartItems?.length"
          class="total-actions w-100"
          style="position: fixed; bottom: 0px; left: 0px"
        >
          <div
            class="d-flex justify-space-between pa-3 text-h6 font-weight-black"
          >
            <p>Total</p>
            <p>${{ totalPrice() }}</p>
          </div>
          <v-card-actions class="d-flex flex-column">
            <div class="w-100">
              <v-btn
                color="light-blue-darken-3"
                height="60"
                variant="elevated"
                class="w-100 rounded-pill mx-1 text-h5"
                @click="dialog = true"
                >Checkout</v-btn
              >
              <v-btn
                color="white"
                height="60"
                variant="elevated"
                class="w-100 rounded-pill mx-1 mt-4 text-h5"
                @click="$router.push({ name: 'cart_page' })"
                >View Cart</v-btn
              >
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </v-navigation-drawer>
  </div>
  <SuccessCheckOut :dialog="dialog" />
</template>

<script>
import { cartStore } from "@/stores/Cart";
import { mapActions, mapState } from "pinia";
import { VNumberInput } from "vuetify/labs/VNumberInput";
import SuccessCheckOut from "../dialog/SuccessCheckOut.vue";
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
    dialog: false,
  }),
  props: {
    currentWindowWidth: {
      type: Number,
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "deleteItem",
      "updateQuantity",
      "getCartItems",
      "emptyCartItems",
    ]),
    totalPrice() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total +=
          ((item.price * (100 - item.discountPercentage)) / 100) *
          item.quantity;
      });
      return total.toFixed(2);
    },
    doCheckOut() {
      this.emptyCartItems();
      this.$router.push({ name: "home" });
    },
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
    this.getCartItems();
  },
  components: { VNumberInput, SuccessCheckOut },
};
</script>
