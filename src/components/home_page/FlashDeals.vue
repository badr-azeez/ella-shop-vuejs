<template>
  <div class="products pa-3">
    <v-container fluid>
      <div class="d-flex my-3 py-3 align-center justify-space-between">
        <h2 class="text-red text-h3">Flash Deals</h2>
      </div>
      <swiper
        :breakpoints="breakpoints"
        :slidesPerView="4"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination',
        }"
        :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
        :modules="modules"
        class="mySwiper"
        :autoplay="{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="product in products" :key="product.id">
          <v-card
            class="mx-auto my-2 position-relative"
            max-width="374"
            elevation="10"
          >
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
                >
              </v-img>
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
                  product.description.length <= 50
                    ? product.description
                    : product.description.slice(0, 50) + "..."
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
                  @click="
                    $router.push({
                      name: 'GetSingleProductId',
                      params: { productId: product.id },
                    })
                  "
                  class="rounded-pill py-1 pa-6"
                  variant="outlined"
                  >Choose Options</v-btn
                >
              </div>
            </v-card-text>
            <v-divider class="mx-4 mb-1"></v-divider>
          </v-card>
        </swiper-slide>
        <div class="swiper-prev"></div>
        <div class="swiper-next"></div>
        <div class="parent">
          <div class="swiper-pagination d-flex justify-center"></div>
        </div>
      </swiper>
    </v-container>
  </div>
</template>

<style scoped>
.products .parent {
  margin-top: 50px !important;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  data: () => ({
    showItem: {},
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
};
</script>
