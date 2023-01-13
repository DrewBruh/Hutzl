<template>
  <div class="product-layout">
    <h1 class="product-header">{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <div class="product-pricing">
      <p>Price: $ {{ product.price }}</p>
    </div>
    <div class="product-gallery">
      <img v-if="isProductUrlReady" :src="product.imgUrl" :alt="product.name" />
    </div>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
import db from "../firebase/firebaseInit";

export default {
  data() {
    return {
      product: {},
      isProductUrlReady: false,
    };
  },
  created() {
    db.collection("products")
      .doc("product-id")
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.product = doc.data();
          this.isProductUrlReady = true;
        } else {
          console.log("Product not found");
        }
      })
      .catch((error) => {
        console.log("Error getting product:", error);
      });
  },
  methods: {
    addToCart() {
      console.log(this.product);
      // Transfer the product data to the Cart page
      this.$router.push({
        name: "Cart",
        query: {
          product: JSON.stringify(this.product),
        },
        quantity: 1,
      });
    },
  },
};
</script>
