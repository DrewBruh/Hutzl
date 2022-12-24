<template>
  <div class="work-heading">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
