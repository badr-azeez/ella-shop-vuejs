import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/",
    name: "products_category",
    component: () => import("@/views/ProductsCategory.vue"),
  },
  {
    path: "/products/:productId",
    name: "GetSingleProductId",
    component: () => import("@/views/ProductItem.vue"),
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("@/views/CartPage.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/CheckOut.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
