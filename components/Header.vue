<template>
  <div class="header-container">
    <div class="logo" />
    <div class="nav-actions">
      <div class="action">
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <div class="bar home" />
      </div>
      <div class="action">
        <nuxt-link to="/">
          About Me
        </nuxt-link>
        <div class="bar about" />
      </div>
      <div class="action">
        <nuxt-link to="/">
          Field Trips
        </nuxt-link>
        <div class="bar trips" />
      </div>
      <div class="action">
        <a style="color: #DE8500" href="/">
          CV / Resume
          <span class="material-icons">cloud_download</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeActive: false
    }
  }
}
</script>

<style scoped>
  .header-container {
    background: #FFF;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 10vw;
  }
  .logo {
    width: 10px;
    height: 50px;
    flex-basis: 30%;
    justify-content: flex-start;
    background: url('~assets/bitmaps/header-logo.png') no-repeat left;
  }
  .nav-actions {
    flex-basis: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .action {
    height: 10px;
    transition: .4s;
  }
  .action a {
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: .4s;
    justify-content: center;
    font-weight: 400;
    font-size: 18px;
    color: #000;
  }
  .bar {
    margin: auto;
    margin-top: 8px;
    display: none;
    transition: .4s;
    width: 30px;
    height: 4px;
    background: #DE8500;
    animation: fadein .3s;
    border-radius: 16px;
  }
  .action a:hover + .bar {
    display: block;
    transition: .4s;
  }
  /* .action a:hover {
    border-bottom: 3px outset #DE8500;
  } */
  .action a span {
    margin-left: 4px;
  }

  /* Animations */

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateX(-10vw);
      -webkit-transform: translateX(-10vw);
      -moz-transform: translateX(-10vw);
      -ms-transform: translateX(-10vw);
      -o-transform: translateX(-10vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0vw);
      -webkit-transform: translateX(0vw);
      -moz-transform: translateX(0vw);
      -ms-transform: translateX(0vw);
      -o-transform: translateX(0vw);
    }
  }
</style>
