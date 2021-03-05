<template>
  <div :class="'header-container ' + (hamOpen ? 'fullHeight' : '')">
    <div class="main-header">
      <a class="logo" href="/">
        <img src="~assets/bitmaps/header-logo.png" alt="">
      </a>
      <button :class="'hamburger clear-btn ' + (hamOpen ? 'open' : '')" @click="toggleHamState">
        <span />
        <span />
        <span />
        <span />
      </button>
    </div>
    <div :class="'nav-actions ' + (hamOpen ? 'sidebarEnter' : 'sidebarExit')">
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
        <a style="color: #FFDEAC" target="_blank" href="https://1drv.ms/b/s!AmKSIfAstaFL2DFR54DLXMviQzum">
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
      headerVisible: true,
      hamOpen: false
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler (_to, _fro) {
        this.hamOpen = false
      }
    }
  },
  methods: {
    toggleHamState () {
      if (this.hamOpen) {
        this.hamOpen = false
      } else {
        this.hamOpen = true
      }
    }
  }
}
</script>

<style scoped>
.header-container.fullHeight {
  height: 100vh;
}
  .header-container .main-header {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5vw;
  }
  .logo {
    width: 100%;
    flex-basis: 100%;
  }
  .nav-actions {
    background: #9E5F00;
    position: fixed;
    right: 0;
    left: 0;
    padding: 0 5vw;
    top: 10vh;
    bottom: 0;
  }
  .nav-actions .action {
    margin: 32px 0;
    /* border-bottom: 1px solid #FFF; */
  }
  .nav-actions .action a {
    font-size: 24px;
    color: #FFF;
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
    background: #FFDEAC;
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
  .material-icons {
    margin-left: 8px;
  }

  /* Hamburger Styles */
  .hamburger {
    width: 50px;
    height: 30%;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  .hamburger span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #9E5F00;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  .hamburger span:nth-child(1) {
    top: 0px;
  }

  .hamburger span:nth-child(2),.hamburger span:nth-child(3) {
    top: 10px;
    width: 80%;
    left: 20%;
  }

  .hamburger span:nth-child(4) {
    top: 20px;
    width: 60%;
    left: 40%;
  }

  .hamburger.open span:nth-child(1) {
    top: 10px;
    width: 0%;
    left: 50%;
  }

  .hamburger.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .hamburger.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .hamburger.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
</style>
