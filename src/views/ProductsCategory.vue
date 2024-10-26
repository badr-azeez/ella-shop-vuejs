<template>
  <div class="category-products mt-8 mb-5">
    <v-container fluid>
      <h2 class="text-center text-h4 my-8">{{ this.$route.query.title }}</h2>
      <v-card elevation="0" :loading="loading" class="mb-3 py-4">
        <v-row v-if="loading">
          <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 4" :key="i">
            <v-skeleton-loader
              :elevation="1"
              type="card,article,button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="product in categoryProduct"
            :key="product.id"
          >
            <v-card class="mx-auto my-2" max-width="374" elevation="10">
              <v-hover v-slot="{ isHovering, props }">
                <v-img
                  height="250"
                  :src="
                    showItem[product.title]
                      ? showItem[product.title]
                      : product.thumbnail
                  "
                  :style="`transition: 0.4s all ease-in-out; scale: ${
                    isHovering ? 1.05 : 1
                  } `"
                  cover
                  v-bind="props"
                >
                  <v-btn
                    @click="openQuickView(product)"
                    :style="`position: absolute; top: 50%; left: 30%; display: ${
                      isHovering ? 'block' : 'none'
                    };`"
                    >Quick View</v-btn
                  ></v-img
                >
              </v-hover>
              <v-card-item>
                <v-card-title>{{ product.title }}</v-card-title>
              </v-card-item>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :model-value="product.rating"
                    color="amber"
                    density="compact"
                    size="small"
                    half-increments
                    readonly
                  ></v-rating>
                  <div class="text-grey ms-4">{{ product.rating }}</div>
                </v-row>
                <div class="my-4 text-subtitle-1">
                  <del class="text-red">${{ product.price }}</del> From $
                  {{
                    (
                      (product.price * (100 - product.discountPercentage)) /
                      100
                    ).toFixed(2)
                  }}
                </div>
                <div>
                  {{
                    product.description.length <= 60
                      ? product.description
                      : product.description.slice(0, 60) + "..."
                  }}
                </div>
                <v-btn-toggle mandatory v-model="showItem[product.title]">
                  <v-btn
                    v-for="(img, i) in product.images"
                    :value="product.images[i]"
                    :key="i"
                    size="x-small"
                    density="compact"
                    variant="outlined"
                  >
                    <img
                      :src="img"
                      width="30"
                      height="30"
                      style="border-radius: 50%"
                    />
                  </v-btn>
                </v-btn-toggle>
                <div class="my-3 d-flex justify-center">
                  <v-btn
                    class="rounded-pill py-1 pa-6"
                    @click="
                      $router.push({
                        name: 'GetSingleProductId',
                        params: { productId: product.id },
                      })
                    "
                    variant="outlined"
                    >Choose Options</v-btn
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { ProductsModule } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
export default {
  data: () => ({
    showItem: [],
    loading: false,
  }),
  inject: ["Emitter"],
  methods: {
    ...mapActions(ProductsModule, ["getProductByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(ProductsModule, ["categoryProduct"]),
  },
  async mounted() {
    if (!this.$route.query.category) {
      return this.$router.push({ name: "home" });
    }
    this.loading = true;
    await this.getProductByCategory(this.$route.query.category);
    this.loading = false;
  },
  watch: {
    async $route() {
      this.loading = true;
      await this.getProductByCategory(this.$route.query.category);
      this.loading = false;
    },
  },
};
</script>
