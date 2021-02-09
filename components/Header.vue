<template>
  <div class="header-container">
    <div class="logo" />
    <div class="nav-actions">
      <div class="action">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </div>
      <div class="action">
        <nuxt-link to="/">
          About Me
        </nuxt-link>
      </div>
      <div class="action">
        <nuxt-link to="/">
          Field Trips
        </nuxt-link>
      </div>
      <div class="action">
        <a href="/">
          CV / Resume
          <span class="material-icons">cloud_download</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
    flex-basis: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .action a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 18px;
    color: #000;
  }
  /* .action a:hover {
    border-bottom: 3px outset #DE8500;
  } */
  .action a span {
    margin-left: 4px;
  }
</style>
