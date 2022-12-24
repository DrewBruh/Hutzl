<template>
  <div class="product-layout">
    <h1 class="product-header">{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <div class="product-pricing">
      <p>Price: $ {{ product.price }}</p>
    </div>
    <div class="product-gallery">
      <img src="https://i.imgur.com/peEFiFE.jpg" />
    </div>
    <!-- <img :src="product.imageUrl" /> -->
  </div>
</template>

<script>
import db from "../firebase/firebaseInit";

export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    db.collection("products")
      .doc("product-id")
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.product = doc.data();
        } else {
          console.log("Product not found");
        }
      })
      .catch((error) => {
        console.log("Error getting product:", error);
      });
  },
};
</script>
