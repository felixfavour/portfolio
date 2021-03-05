<template>
  <div class="header-container">
    <a class="logo" href="/" />
    <div v-show="!headerVisible" class="material-icons close" @click="headerVisible = true">
      menu
    </div>
    <div class="nav-actions">
      <div class="material-icons close" @click="headerVisible = false">
        close
      </div>
      <div class="action">
        <nuxt-link :class="($route.name === 'index' ? 'active' : '')" to="/">
          Home
        </nuxt-link>
        <div class="bar home" />
      </div>
      <div class="action">
        <nuxt-link :class="($route.name === 'about' ? 'active' : '')" to="/about">
          About Me
        </nuxt-link>
        <div class="bar about" />
      </div>
      <div class="action">
        <nuxt-link :class="($route.name === 'fieldtrips' ? 'active' : '')" to="/fieldtrips">
          Field Trips
        </nuxt-link>
        <div class="bar trips" />
      </div>
      <div class="action">
        <a target="_blank" href="https://stories.favourfelix.com">
          My Stories
          <span class="material-icons">call_made</span>
        </a>
        <div class="bar trips" />
      </div>
      <div class="action">
        <a style="color: #DE8500" target="_blank" href="https://1drv.ms/b/s!AmKSIfAstaFL2DFR54DLXMviQzum">
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
  .header-container {
    background-color: #FFDEAC;
    height: 12vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 10vw;
  }
  .material-icons.close {
    display: none;
  }
  .logo {
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
  .action a.active + .bar {
    display: block;
    transition: .4s;
  }
  /* .action a:hover {
    border-bottom: 3px outset #DE8500;
  } */
  .action a span {
    margin-left: 4px;
  }

  @media screen and (max-width: 1024px) {
    .material-icons.close {
      display: block;
      font-size: 24px;
    }
    .header-container {
      /* flex-direction: column; */
      padding: 0 5vw;
    }
    .logo {
      width: 100%;
      flex-basis: 100%;
    }
    .nav-actions {
      flex-basis: 0%;
      padding: 32px;
      display: none;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      background: #DE8500;
      z-index: 999;
      position: absolute;
      width: 300px;
      height: 100vh;
      right: 0;
      bottom: 0;
      top: 0;
      animation: fromright .5s forwards;
    }
    .nav-actions .action {
      margin: 32px 0;
      /* border-bottom: 1px solid #FFF; */
    }
    .nav-actions .action a {
      font-size: 24px;
      color: #FFF;
    }
  }
</style>
