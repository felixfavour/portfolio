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
      <a href="/">
        Read my stories
      </a>
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
    background: #FFE5BD;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 10vw;
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .footer-socials {
    flex-basis: 40%;
    justify-content: space-between;
  }
  .footer-socials img {
    width: 30px;
    margin-right: 12px;
  }
  .footer-contact {
    flex-basis: 60%;
    display: flex;
    justify-content: end;
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
</style>
