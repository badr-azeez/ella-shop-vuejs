import { defineStore } from "pinia";

export const ProductsModule = defineStore("products", {
  state: () => {
    return {
      products: null,
      newProducts: null,
      categories: [
        {
          title: "Laptops",
          router: "laptops",
        },
        {
          title: "Mens Shoes",
          router: "mens-shoes",
        },
        {
          title: "Mens Watches",
          router: "mens-watches",
        },
        {
          title: "Vehicle",
          router: "vehicle",
        },
        {
          title: "Smartphones",
          router: "smartphones",
        },
        {
          title: "Motorcycle",
          router: "motorcycle",
        },
      ],
      categoryProduct: [],
      productItem: {},
    };
  },
  actions: {
    getProducts() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products.slice(0, 16);
          this.newProducts = data.products.filter(
            (el) => el.category == "furniture"
          );
        });
    },
    getProductByCategory(category) {
      return fetch(`https://dummyjson.com/products/category/${category}`).then(
        (res) =>
          res.json().then((data) => {
            this.categoryProduct = data.products;
          })
      );
    },
    getSingleProduct(productID) {
      return fetch(`https://dummyjson.com/product/${productID}`).then((res) =>
        res.json().then((data) => {
          this.productItem = data;
        })
      );
    },
  },
});
