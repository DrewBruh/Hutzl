<template>
  <div class="reset-password">
    <Modal v-if="modalActive" v-on:close-modal="closeModal" />
    <!-- <Loading /> -->
    <div class="form-wrap">
      <form class="reset">
        <p>Reset Password</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
          </div>
        </div>
        <button id="closeButton">Reset</button>
      </form>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
// import Loading from "../components/Loading";
export default {
  name: "ForgotPassword",
  data() {
    return {
      modalActive: true,
      modalMessage: "",
    };
  },
  components: {
    Modal,
    // Loading,
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
