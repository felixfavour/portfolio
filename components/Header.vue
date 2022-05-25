<template>
  <div class="header-container">
    <a class="logo" href="/" />
    <ul class="nav-actions">
      <div class="bar" />
      <li class="action">
        <nuxt-link :class="($route.name === 'index' ? 'active' : '')" to="/">
          Home
        </nuxt-link>
        <!-- <div class="bar home" /> -->
      </li>
      <li class="action">
        <nuxt-link :class="($route.name === 'about' ? 'active' : '')" to="/about">
          About Me
        </nuxt-link>
        <!-- <div class="bar about" /> -->
      </li>
      <li class="action">
        <nuxt-link :class="($route.name === 'fieldtrips' ? 'active' : '')" to="/fieldtrips">
          Field Trips
        </nuxt-link>
        <!-- <div class="bar trips" /> -->
      </li>
      <li class="action">
        <a target="_blank" href="https://stories.favourfelix.com">
          My Stories
          <span class="material-icons">call_made</span>
        </a>
        <!-- <div class="bar trips" /> -->
      </li>
      <li class="action">
        <a style="color: #DE8500" target="_blank" href="https://1drv.ms/b/s!AmKSIfAstaFL2DFR54DLXMviQzum">
          CV / Resume
          <span class="material-icons">cloud_download</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeActive: false,
      headerVisible: true
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler (_to, _fro) {
        this.headerVisible = false
      }
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
  .header-container {
    background-color: #FFDEAC;
    height: 12vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 10vw;
  }
  .material-icons {
    margin-left: 4px;
    font-size: 18px;
  }
  .logo {
    height: 50px;
    flex-basis: 30%;
    justify-content: flex-start;
    background: url('~assets/bitmaps/header-logo.png') no-repeat left;
  }
  .nav-actions {
    flex-basis: 45%;
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
  .action a:hover {
    transition: .4s;
    color: #DE8500;
  }
  .action a.active {
    transition: .4s;
    color: #DE8500;
  }
  /* .action a:hover {
    border-bottom: 3px outset #DE8500;
  } */
  .action a span {
    margin-left: 4px;
  }

  @media screen and (max-width: 1440px) {
    .nav-actions {
      flex-basis: 50%;
    }
    .action a {
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: .4s;
      justify-content: center;
      font-weight: 400;
      font-size: 16px;
      color: #000;
    }
  }
</style>
