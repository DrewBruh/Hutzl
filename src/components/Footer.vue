//todo: turn all router linked areas from a tags to router-link, alongside
re-routing them

<template>
  <footer class="footer">
    <div id="footer-node" class="footer__main">
      <router-link
        class="footer__main-link"
        id="footer-home"
        :to="{ name: 'Home' }"
      >
        Home</router-link
      >

      <router-link class="footer__main-link" :to="{ name: 'about' }">
        About</router-link
      >

      <router-link class="footer__main-link" :to="{ name: 'Products' }">
        Products</router-link
      >
    </div>

    <div id="footer-social-node">
      <div id="footer-caption-social-node">
        <div class="footer__caption">Socials</div>
        <a
          href="https://vimeo.com/admilk"
          target="_blank"
          class="arrow-button is--footer-social w-inline-block"
          ><div class="arrow-button__text">Tiktok</div></a
        >
        <a
          href="https://www.instagram.com/drinkadmilk/"
          target="_blank"
          class="arrow-button is--footer-social w-inline-block"
          ><div class="arrow-button__text">Instagram</div></a
        >
        <a
          href="https://twitter.com/drinkadmilk"
          target="_blank"
          class="arrow-button is--footer-social w-inline-block"
          ><div class="arrow-button__text">Twitter</div></a
        >
      </div>
      <div id="footer-contact-node">
        <div class="footer__caption">Contact</div>
        <a
          href="mailto:hutzlguy@gmail.com"
          class="arrow-button is--footer-social w-inline-block"
        >
          <div class="arrow-button__text">hutzlguy@gmail.com</div></a
        >
        <a
          href="tel:+14143084629"
          class="arrow-button is--footer-social w-inline-block"
          ><div class="arrow-button__text">414.308.4629</div></a
        >
      </div>
    </div>

    <div class="footer__cycle-text" id="footer-text" style="filter: invert(0%)">
      Never mind whats impossible
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
