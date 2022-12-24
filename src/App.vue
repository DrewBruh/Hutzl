<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navigation" />
      <router-view />
      <Footer v-if="!navigation" />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
        console.log(this.$store.state.profileEmail);
      }
    });
    this.checkRoute();

    console.log(firebase.auth().currentUser);
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>
<!-- when you're importing your styles ffrom these things, remember use style lang  -->
<style lang="scss">
@import "@/scss/main.scss";
</style>
