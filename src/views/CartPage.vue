<template>
  <div class="cart-page mt-8 mb-5 py-8">
    <v-container fluid>
      <p class="text-h4 font-weight-black">Your Cart</p>
      <v-row v-if="currentWindowWidth >= 688" class="py-6">
        <v-col cols="12" lg="8">
          <v-table>
            <thead class="bg-grey-lighten-2">
              <tr>
                <th
                  :width="`${currentWindowWidth < 1380 ? '50%' : ''}`"
                  class="font-weight-black"
                >
                  PRODUCT
                </th>
                <th
                  :width="`${currentWindowWidth < 1380 ? '5%' : ''}`"
                  class="font-weight-black"
                >
                  PRICE
                </th>
                <th
                  :width="`${currentWindowWidth < 1380 ? '40%' : ''}`"
                  class="font-weight-black"
                >
                  QUANTITY
                </th>
                <th
                  :width="`${currentWindowWidth < 1380 ? '5%' : ''}`"
                  class="font-weight-black"
                >
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in cartItems" :key="product.id">
                <td class="d-flex mt-4 ga-4 align-center" style="height: 130px">
                  <img
                    :src="product.thumbnail"
                    cover
                    height="130"
                    :width="`${currentWindowWidth < 1050 ? '100' : ''}`"
                  />
                  <router-link
                    :to="{
                      name: 'GetSingleProductId',
                      params: { productId: product.id },
                    }"
                    class="text-decoration-none text-blue-accent-4"
                  >
                    <p style="font-size: 20px">
                      {{ product.title }} - {{ product.category }}
                    </p></router-link
                  >
                </td>
                <td style="font-size: 17px" class="font-weight-black">
                  ${{
                    (
                      (product.price * (100 - product.discountPercentage)) /
                      100
                    ).toFixed(2)
                  }}
                </td>
                <td>
                  <div class="w-100 mt-4">
                    <v-number-input
                      :model-value="product.quantity"
                      :reverse="false"
                      controlVariant="split"
                      :min="1"
                      :hideInput="false"
                      :inset="false"
                      variant="solo-filled"
                      density="compact"
                      @update:modelValue="updateQuantity(product.id, $event)"
                    ></v-number-input>
                  </div>
                </td>
                <td style="font-size: 17px" class="font-weight-black">
                  ${{
                    (
                      ((product.price * (100 - product.discountPercentage)) /
                        100) *
                      product.quantity
                    ).toFixed(2)
                  }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col cols="12" lg="4">
          <p class="font-weight-black text-h5">ORDER SUMMARY</p>
          <v-divider
            :thickness="4"
            color="black"
            class="border-opacity-100"
          ></v-divider>
          <div
            class="d-flex justify-space-between my-6 font-weight-bold text-h6"
          >
            <p>SubTotal</p>
            <p>${{ totalPrice() }}</p>
          </div>
          <div class="location">
            <p class="text-h6 my-6">Get Shipping Estimate</p>
            <v-select
              label="Country"
              :items="[
                'Iraq',
                'United State',
                'Turkey',
                'Saudi Arabia',
                'Egypt',
              ]"
            >
            </v-select>
            <div class="mt-4">
              <v-btn
                class="w-100 rounded-pill mx-1 text-h5"
                color="light-blue-darken-3"
                height="60"
                @click="$router.push({ name: 'checkout' })"
                >Proceed To Checkout</v-btn
              >
              <v-btn
                @click="$router.push({ name: 'home' })"
                variant="outlined"
                class="w-100 my-5 rounded-pill text-h5"
                height="60"
                >Continue Shopping</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
      <div v-if="currentWindowWidth <= 687" class="mobile-items">
        <div class="mt-md-3" v-for="item in cartItems" :key="item.id">
          <v-row>
            <v-col cols="12" md="4">
              <v-img
                :src="item.thumbnail"
                cover
                :class="`${
                  currentWindowWidth <= 687 ? 'w-50 mx-auto' : 'w-100'
                }`"
              ></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <p class="text-h6">{{ item.title }} - {{ item.category }}</p>
              <p class="my-1 text-black font-weight-black text-h6">
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
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="check">
          <p class="font-weight-black text-h5">ORDER SUMMARY</p>
          <v-divider
            :thickness="4"
            color="black"
            class="border-opacity-100"
          ></v-divider>
          <div
            class="d-flex justify-space-between my-6 font-weight-bold text-h6"
          >
            <p>SubTotal</p>
            <p>${{ totalPrice() }}</p>
          </div>
          <div class="location">
            <p class="text-h6 my-6">Get Shipping Estimate</p>
            <v-select
              label="Country"
              :items="[
                'Iraq',
                'United State',
                'Turkey',
                'Saudi Arabia',
                'Egypt',
              ]"
            >
            </v-select>
            <div class="mt-4">
              <v-btn
                class="w-100 rounded-pill mx-1 text-h5"
                color="light-blue-darken-3"
                height="60"
                @click="$router.push({ name: 'checkout' })"
                >Proceed To Checkout</v-btn
              >
              <v-btn
                @click="$router.push({ name: 'home' })"
                variant="outlined"
                class="w-100 my-5 rounded-pill text-h5"
                height="60"
                >Continue Shopping</v-btn
              >
            </div>
          </div>
        </div>
      </div>
      <div class="secure my-4 d-flex align-center ga-3">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 179.94 179.96"
          class="icon icon-shield-check"
          style="width: 30px"
        >
          <path
            d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
          ></path>
          <polygon
            fill="white"
            class="cls-1"
            points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
          ></polygon>
        </svg>
        <p>Secure Shopping Guarantee</p>
      </div>
      <div class="cart-page-cards">
        <img src="@/assets/images/cart-page-cards.webp" width="350" />
      </div>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "@/stores/Cart";
import { VNumberInput } from "vuetify/labs/VNumberInput";
import { mapActions, mapState } from "pinia";
export default {
  methods: {
    ...mapActions(cartStore, ["updateQuantity", "getCartItems"]),
    totalPrice() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total +=
          ((item.price * (100 - item.discountPercentage)) / 100) *
          item.quantity;
      });
      return total.toFixed(2);
    },
    detectWindow() {
      this.currentWindowWidth = window.innerWidth;
    },
  },
  data: () => ({
    currentWindowWidth: window.innerWidth,
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
  components: { VNumberInput },
  mounted() {
    this.getCartItems();
    window.addEventListener("resize", this.detectWindow);
  },
};
</script>
