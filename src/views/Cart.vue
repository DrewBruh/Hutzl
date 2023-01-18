<template>
  <div class="Cart">
    <div v-if="products.length > 0">
      <div v-for="(product, index) in products" :key="index">
        <div>{{ product.name }}</div>
        <div>
          <button @click="incrementQuantity(index)">+</button>
          <button @click="decrementQuantity(index)">-</button>

          <p>Quantity: {{ product.quantity }}</p>
        </div>
        <div>{{ product.price }}</div>
        <button @click="removeItem(index)">Remove</button>
      </div>
      <div>Total: {{ total }}</div>
      <button @click="checkout">Checkout</button>
    </div>
    <div v-else>
      <p>No products in cart</p>
    </div>
  </div>
</template>

<script>
// import { StripeCheckout } from "vue-stripe";

export default {
  components: {
    // StripeCheckout,
  },
  //The JSON parse turns the quantity into a string which results in NaN how
  data() {
    let parsedProduct = this.$route.query.product
      ? JSON.parse(this.$route.query.product)
      : null;
    return {
      products: parsedProduct
        ? [{ ...parsedProduct, quantity: Number(parsedProduct.quantity) || 1 }]
        : [],
    };
  },

  computed: {
    total() {
      if (!Array.isArray(this.products) || this.products.length === 0) return 0;
      return this.products.reduce((acc, product) => {
        if (isNaN(product.price) || isNaN(product.quantity)) return acc;
        return acc + product.price * product.quantity;
      }, 0);
    },
  },

  methods: {
    incrementQuantity(index) {
      if (isNaN(this.products[index].quantity))
        this.products[index].quantity = 1;

      if (this.products[index].quantity < 2) {
        this.products[index].quantity++;
      } else {
        console.log("Quantity cannot be more than 2");
      }
    },
    decrementQuantity(index) {
      if (isNaN(this.products[index].quantity))
        this.products[index].quantity = 1;
      if (this.products[index].quantity > 1) {
        this.products[index].quantity--;
      } else {
        this.products[index].quantity = 1;
      }
    },
    removeItem(index) {
      this.products.splice(index, 1);
    },
    checkout() {
      this.$refs.stripe.open({
        amount: this.total * 100,
        currency: "USD",
      });
    },
  },
};
</script>
