<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register" id="login-register">
        Already Have an Account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Log In</router-link
        >
      </p>

      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
        </div>
        <div class="input" id="last-name">
          <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <div class="input">
          <input type="text" placeholder="User-Name" v-model="userName" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="input" id="password">
          <input type="text" placeholder="Password" v-model="password" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Register</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      error: "",
      errorMsg: "",
    };
  },
  methods: {
    //creating an accunt
    async register() {
      //makes sure no fields are empty
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.userName !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;

        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
        });
        this.$router.push({ name: "Login" });
        return;
      }
      this.error = true;
      this.errorMsg = "Fill all fields";
      return;
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
