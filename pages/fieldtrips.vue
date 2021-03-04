<template>
  <div class="ft-container">
    <div class="ft-header">
      <button :class="(mode === 'wf' ? 'active' : '')" @click="mode = 'wf'">
        Work Field
      </button>
      <button :class="'second ' + (mode === 'vf' ? 'active' : '')" @click="mode = 'vf'">
        Volunteering Field
      </button>
    </div>
    <div class="ft-body">
      <div v-if="mode === 'wf'" class="field">
        <button @click="scrollXNegative" class="move left">
          <span class="material-icons">
            arrow_back_ios
          </span>
        </button>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Software Engineer, Google
          </div>
          <div class="year">
            2004
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Software Engineer, Google
          </div>
          <div class="year">
            2004
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Software Engineer, Google
          </div>
          <div class="year">
            2004
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Software Engineer, Google
          </div>
          <div class="year">
            2004
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Software Engineer, Google
          </div>
          <div class="year">
            2004
          </div>
        </div>
        <button @click="scrollX" class="move right">
          <span class="material-icons">
            arrow_forward_ios
          </span>
        </button>
      </div>
      <div v-if="mode === 'vf'" class="field">
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Software Engineer, Google
          </div>
          <div class="year">
            2004
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Software Engineer, Google
          </div>
          <div class="year">
            2004
          </div>
        </div>
        <!-- <button class="move-right">
          <span class="material-icons">
            arrow_right
          </span>
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mode: 'wf'
    }
  },
  methods: {
    scrollX () {
      const field = document.querySelector('div.ft-body > div')
      field.scrollBy(800, 0)
    },
    scrollXNegative () {
      const field = document.querySelector('div.ft-body > div')
      field.scrollBy(-800, 0)
    }
  }
}
</script>

<style scoped>
  .ft-header {
    margin-top: 24px;
    height: 100px;
  }
  .ft-header button {
    margin-right: 36px;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 23px;
    transition: .4s;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .ft-header button.active {
    background: #DE8500;
    border-radius: 42px;
    padding: 8px 32px;
    animation: fromright .5s forwards;
  }
  .ft-header button.second.active {
    background: #DE8500;
    border-radius: 42px;
    padding: 8px 32px;
    animation: fromleft .5s forwards;
  }
  .field {
    display: -moz-box;
    display: -webkit-box;
    width: 80vw;
    overflow-x: auto;
  }
  .move {
    position: absolute;
    z-index: 1;
    margin-top: 140px;
    background: #FFFFFF;
    box-shadow: 0px 2px 19px -2px rgba(0, 0, 0, 0.25);
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: #DE8500;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .move.right {
    right: 9vw;
  }
  .move.left {
    left: 8.5vw;
  }
  .field .ft-card {
    width: 400px;
    height: 410px;
    margin-right: 36px;
    animation: fromright .5s forwards;
  }
  .field .ft-card img {
    width: 400px;
  }
  .ft-card .role {
    margin-top: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
  }
  .ft-card .year {
    margin-top: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    color: #DE8500;
  }

  @keyframes fromright {
    from {
      transform: translate(60px, 0);
    }
    to {
      transform: translate(0px, 0);
    }
  }

  @keyframes fromleft {
    from {
      transform: translate(-60px, 0);
    }
    to {
      transform: translate(0px, 0);
    }
  }

  @media screen and (max-width: 1024px) {
  .move.right {
    right: 2vw;
  }
  .move.left {
    left: 2vw;
  }
  .field {
    width: 90vw;
  }
  .field .ft-card {
    width: 300px;
    margin-right: 20px;
  }
  .field .ft-card img {
    width: 300px;
  }
  }
</style>
