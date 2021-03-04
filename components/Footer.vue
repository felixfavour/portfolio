<template>
  <div class="footer-container">
    <div class="footer-socials">
      <a href="/">
        <img src="~assets/icons/github.svg" alt="">
      </a>
      <a href="/">
        <img src="~assets/icons/linkedin.svg" alt="">
      </a>
      <a href="/">
        <img src="~assets/icons/so.svg" alt="">
      </a>
      <a href="/">
        <img src="~assets/icons/dribble.svg" alt="">
      </a>
    </div>
    <div class="footer-contact">
      <!-- <nuxt-link v-if="$route.name.includes('stories')" to="/">
        Return to Home
      </nuxt-link> -->
      <span>Designed and Built by <b>Favour Felix</b></span>
      <div class="bar" />
      <a href="mailto:felixfavour0@gmail.com">
        felixfavour0@gmail.com
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .footer-container {
    background-color: #FFDEAC;
    height: 8vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    /* padding: 0 10vw; */
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .footer-socials {
    flex-basis: 40%;
    padding-left: 10vw;
    justify-content: space-between;
  }
  .footer-socials img {
    width: 30px;
    margin-right: 24px;
  }
  .footer-contact {
    flex-basis: 60%;
    display: flex;
    padding-right: 10vw;
    justify-content: flex-end;
  }
  .footer-contact a {
    color: #000;
    font-size: 18px;
    text-decoration: none;
    transition: .4s;
  }
  .footer-contact a:hover {
    color: #DE8500;
  }
  .footer-contact .bar {
    border: 1px solid #DE8500;
    border-radius: 18px;
    transform: rotate(-1.82deg);
    margin: 0 16px;
  }

  @media screen and (max-width: 1024px) {
    .footer-socials {
      padding-left: 5vw;
    }
    .footer-contact {
      padding-right: 5vw;
    }
  }

  @media screen and (max-width: 500px) {
    .footer-container {
      flex-direction: column;
      height: 10vh;
    }
    .footer-socials {
      padding: 8px 0;
      padding-top: 16px;
    }
    .footer-socials img {
      width: 20px;
      margin-right: 24px;
    }
    .footer-contact {
      padding: 8px 0;
    }
    .footer-contact a {
      font-size: 15px;
    }
  }
</style>
