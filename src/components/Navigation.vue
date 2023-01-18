<!-- rewrite all the social links to a tagged links  -->

<template>
  <header>
    <nav class="navigation-bar">
      <nav class="navigation-bar__logo-flex">
        <router-link :to="{ name: 'Home' }">
          <img
            id="birb-icon"
            src="../assets/bird.png"
            loading="eager"
            alt="HUTZL logo Icon"
            class="navigationbar__logo"
          />
        </router-link>

        <div class="navigation-bar__links">
          <ul>
            <router-link class="navigation-bar__link" :to="{ name: 'Products' }"
              >Products</router-link
            >
            <router-link class="navigation-bar__link" :to="{ name: 'about' }"
              >About</router-link
            >
            <router-link
              v-if="!user"
              class="navigation-bar__link"
              :to="{ name: 'Login' }"
              >Login/Register</router-link
            >
          </ul>
        </div>
      </nav>
      <div>
        <ul>
          <router-link class="navigation-bar__link is--social" to="#"
            >YT</router-link
          >

          <router-link class="navigation-bar__link is--social" to="#"
            >TT</router-link
          >
          <router-link class="navigation-bar__link is--social" to="#"
            >TW</router-link
          >

          <div
            v-if="user"
            @click="toggleProfileMenu"
            class="profile"
            ref="profile"
          >
            <span>{{ this.$store.state.profileInitials }}</span>
            <div v-show="profileMenu" class="profile__menu">
              <div class="info">
                <div class="options">
                  <div class="option">
                    <router-link class="option" to="#">
                      <p class="navigation-bar__link">Profile</p>
                    </router-link>
                  </div>
                  <div class="option">
                    <router-link class="option" :to="{ name: 'Cart' }">
                      <p class="navigation-bar__link">Cart</p>
                    </router-link>
                  </div>
                  <div class="option">
                    <router-link @click="signOut" class="option" to="#">
                      <p class="navigation-bar__link">Sign Out</p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
    <div class="container">
      <button class="open-button" @click="toggleSidenav">Menu</button>
      <div
        class="sidenav"
        v-bind:class="{ 'is-open': isOpen }"
        @click="toggleSidenav"
      >
        <div class="sidenav-content">
          <router-link to="/" class="sidenav-item">Home</router-link>
          <router-link to="/about" class="sidenav-item">About</router-link>
          <router-link to="/contact" class="sidenav-item">Contact</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  name: "navigation",

  data() {
    return {
      profileMenu: null,
      isOpen: false,
    };
  },

  methods: {
    signOut() {
      firebase.auth().signOut();
    },
    toggleSidenav() {
      this.isOpen = !this.isOpen;
    },
    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },
  },
  // eslint-disable-next-line
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
