import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
  state: () => {
    return {
      cartItems: [],
    };
  },
  actions: {
    addItem(item) {
      let exist = false;
      for (const cartItem of this.cartItems) {
        if (cartItem.id == item.id) {
          cartItem.quantity += item.quantity;
          exist = true;
          break;
        }
      }
      if (!exist) {
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    deleteItem(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    getCartItems() {
      if (localStorage.getItem("cart-items")) {
        this.cartItems = JSON.parse(localStorage.getItem("cart-items"));
        return this.cartItems;
      }
      return [];
    },
    updateQuantity(id, newValue) {
      this.cartItems.forEach((item) => {
        if (item.id === id) {
          item.quantity = newValue;
        }
      });
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    emptyCartItems() {
      this.cartItems = [];
      localStorage.removeItem("cart-items");
    },
  },
});
