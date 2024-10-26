<template>
  <div class="home">
    <UpperPanel />
    <TheFeatures />
    <TopOffers />
    <FlashDeals :products="products" />
    <TopCategories />
    <NewProducts :products="newProducts" />
  </div>
</template>

<script>
import UpperPanel from "@/components/home_page/UpperPanel.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import FlashDeals from "@/components/home_page/FlashDeals.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import { ProductsModule } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    UpperPanel,
    TheFeatures,
    TopOffers,
    FlashDeals,
    TopCategories,
    NewProducts,
  },
  computed: {
    ...mapState(ProductsModule, ["products", "newProducts"]),
  },

  methods: {
    ...mapActions(ProductsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
