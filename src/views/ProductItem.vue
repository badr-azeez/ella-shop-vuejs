<template>
  <div class="product-item mt-8 mb-5 py-8">
    <v-container fluid>
      <v-row>
        <v-col v-if="loading" cols="12" md="5">
          <v-skeleton-loader type="image,image,image,image"></v-skeleton-loader>
        </v-col>

        <v-col v-if="!loading" cols="12" md="5">
          <img
            :src="openItem ? openItem : productItem.thumbnail"
            width="100%"
            height="500"
          />
          <v-tabs v-model="openItem" fixed-tabs height="100">
            <v-tab v-for="(img, i) in productItem.images" :key="i" :value="img">
              <img :src="img" height="100" />
            </v-tab>
          </v-tabs>
        </v-col>

        <v-col v-if="loading" cols="12" md="7">
          <v-skeleton-loader
            type="article,article,article,article"
          ></v-skeleton-loader>
        </v-col>

        <v-col v-if="!loading" cols="12" md="7">
          <div class="title">
            <p class="text-h4">
              ({{ productItem.title }})
              <span class="font-weight-black"
                >Sample - {{ productItem.category }} For Sale</span
              >
            </p>
          </div>
          <div class="rating-stock d-flex align-center ga-5 mt-4 text-h6">
            <v-rating
              :length="5"
              :size="32"
              :model-value="productItem.rating"
              color="orange"
              disabled
            />
            <span>Stock: {{ productItem.stock }}</span>
          </div>
          <div class="description mt-4">
            <p class="text-capitalize text-h6">
              {{ productItem.description }}
            </p>
          </div>
          <div class="brand mt-4">
            <p class="text-h6">
              Brand :
              <span class="font-weight-black">{{ productItem.brand }}</span>
            </p>
          </div>
          <div class="available mt-4">
            <p class="text-h6">
              Availability :
              <span class="font-weight-black">{{
                productItem.availabilityStatus
              }}</span>
            </p>
          </div>
          <div class="price mt-4 text-h6">
            <del class="text-red">${{ productItem.price }}</del> From $
            <span class="font-weight-black">
              {{
                (
                  (productItem.price * (100 - productItem.discountPercentage)) /
                  100
                ).toFixed(2)
              }}
            </span>
          </div>
          <div class="quantity mt-4 w-50 w-md-25">
            <p class="mb-4 text-h6">Quantity</p>
            <v-number-input
              :model-value="quantity"
              :reverse="false"
              controlVariant="split"
              :min="1"
              :hideInput="false"
              :inset="false"
              variant="solo-filled"
              density="compact"
              @update:modelValue="updateQuantity"
            ></v-number-input>
          </div>
          <p style="font-size: 19px" class="my-3 font-weight-black">
            Subtotal :
            <span>{{
              (
                ((productItem.price * (100 - productItem.discountPercentage)) /
                  100) *
                quantity
              ).toFixed(2)
            }}</span>
          </p>
          <div class="add-to-cart">
            <v-btn
              color="black"
              class="rounded-pill w-100 w-sm-25"
              size="large"
              :loading="btnLoading"
              @click="addCartItem(productItem)"
              >Add To Cart</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { VNumberInput } from "vuetify/labs/VNumberInput";
import { ProductsModule } from "@/stores/Products";
import { cartStore } from "@/stores/Cart";
import { mapActions, mapState } from "pinia";
export default {
  data: () => ({
    openItem: "",
    loading: false,
    quantity: 1,
    btnLoading: false,
  }),
  components: { VNumberInput },
  methods: {
    ...mapActions(ProductsModule, ["getSingleProduct"]),
    ...mapActions(cartStore, ["addItem"]),
    updateQuantity(value) {
      this.quantity = value;
    },
    addCartItem(productItem) {
      this.btnLoading = true;

      productItem.quantity = this.quantity;
      this.addItem(productItem);
      setTimeout(() => {
        this.btnLoading = false;
        this.Emitter.emit("openCart");
        this.Emitter.emit("openSnackbar", `${productItem.title} Was Added`);
      }, 500);
    },
  },
  inject: ["Emitter"],
  computed: {
    ...mapState(ProductsModule, ["productItem"]),
  },
  async beforeMount() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
    if (!this.productItem.id) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>
