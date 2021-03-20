<template>
  <div class="ft-container">
    <div class="ft-header">
      <div :class="'active-state ' + mode" />
      <button title="Personal Projects" :class="(mode === 'wf' ? 'active' : '')" @click="mode = 'wf'">
        Projects
      </button>
      <button title="Professional Experiences" :class="'second ' + (mode === 'vf' ? 'active' : '')" @click="mode = 'vf'">
        Work
      </button>
    </div>
    <div class="ft-body">
      <div v-show="mode === 'wf'" class="field">
        <button class="move left" @click="scrollXNegative">
          <span class="material-icons">
            arrow_back_ios
          </span>
        </button>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/ff.png">
          </div>
          <div class="role">
            Portfolio
          </div>
          <div class="year">
            2021
          </div>
          <div class="info">
            This is my official portfolio, this is the first and only version. I hope to come up with better ideas and rebuild in the long run.
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/ff.png">
          </div>
          <div class="role">
            Okwudili Okonkwo & Co.
          </div>
          <div class="year">
            2021
          </div>
          <div class="info">
            Designed and Developed a website and blog for a legal firm in Nigeria.
            <b><a target="_blank" href="https://okwudililegal.com">okwudilidlegal.com</a></b>
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/pidgipedia.png">
          </div>
          <div class="role">
            Pidgipedia
          </div>
          <div class="year">
            2020
          </div>
          <div class="info">
            Pidgipedia is an app that houses a network of linguists and non-linguists, contributing to a fast-rising vocabulary, Pidgin, the non-linguists get to use the app as a dictionary. Pidgipedia creates a standard for the Pidgin Language and supports the African/Nigerian Heritage.
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/mobotithe.png">
          </div>
          <div class="role">
            Mobotithe
          </div>
          <div class="year">
            2019
          </div>
          <div class="info">
            Mobotithe is an android application for keeping tab of Transactions (essentially, Incomes and Expenses) based on a specific interval provided by the user. Your data can be accessed via the internet/local storage
          </div>
        </div>
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Other Hobby Projects
          </div>
          <div class="year">
            2019
          </div>
          <div class="info">
            There are plenty other projects to look at on
            <b><a target="_blank" href="https://github.com/felixfavour">My Github Profile</a></b>
          </div>
        </div>
        <button class="move right" @click="scrollX">
          <span class="material-icons">
            arrow_forward_ios
          </span>
        </button>
      </div>
      <div v-show="mode === 'vf'" class="field">
        <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/acumen.png">
          </div>
          <div class="role">
            Software Engineer, <b>Acumen Digital</b>
          </div>
          <div class="year">
            2020
          </div>
        </div>
        <!-- <div class="ft-card">
          <div class="card-image">
            <img src="~assets/bitmaps/placeholder.png">
          </div>
          <div class="role">
            Software Engineer, Google
          </div>
          <div class="year">
            2004
          </div>
        </div> -->
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
  head () {
    return {
      title: 'Favour Felix: Experiences',
      meta: [
        {
          name: 'description',
          content:
            'In my journey of over three years "pressing computer", I have successfully picked up a lot of skills on my way and mastered a few. Click to see all of my experiences as a Software Engineer and as a hobby designer.'
        }
      ]
    }
  },
  methods: {
    scrollX () {
      const field = document.querySelector('div.ft-body > div')
      field.scrollBy(300, 0)
    },
    scrollXNegative () {
      const field = document.querySelector('div.ft-body > div')
      field.scrollBy(-300, 0)
    }
  }
}
</script>

<style scoped>
  .info {
    margin-top: 16px;
    line-height: 28px;
  }
  .ft-card a {
    text-decoration: none;
    color: #DE8500;
  }
  .ft-card a:hover {
    border-bottom: 1px solid;
  }
  .ft-header {
    position: relative;
    padding-top: 24px;
    height: 70px;
  }
  .active-state {
    width: 150px;
    height: 50px;
    background: #DE8500;
    border-radius: 24px;
    position: absolute;
    z-index: -1;
    transition: .3s;
  }
  .active-state.vf {
    width: 150px;
    height: 50px;
    background: #DE8500;
    border-radius: 24px;
    position: absolute;
    z-index: -1;
    transition: .3s;
    transform: translateX(190px);
  }
  .ft-header button {
    margin-right: 36px;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 23px;
    height: 50px;
    width: 150px;
    transition: .4s;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #DE8500;
  }
  /* .ft-header button.active {
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
  } */
  .field {
    display: -moz-box;
    display: -webkit-box;
    width: 80vw;
    overflow-x: hidden;
  }
  .move {
    animation: zoomin .5s forwards;
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
    /* height: 550px; */
    margin-right: 36px;
    animation: fromright 1s forwards;
  }
  .field .ft-card img {
    width: 400px;
    height: 200px;
    object-fit: cover;
    border-radius: 24px;
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

  @media screen and (max-width: 768px) {
    .ft-header button  {
      font-size: 17px;
    }
    .active-state, .ft-header button {
      width: 120px;
    }
    .active-state.vf {
      transform: translateX(146px);
    }
  }

  @media screen and (max-width: 500px) {
    .move {
      margin-top: 120px;
    }
    .field {
      /* overflow-x: auto; */
    }
    .field .ft-card img {
      width: 270px;
      height: 160px;
      object-fit: cover;
      border-radius: 24px;
    }
  }

  @media screen and (max-height: 700px) {
    .field {
      padding-bottom: 36px;
    }

  }

  @media screen and (max-width: 350px) {
    .ft-header button  {
      font-size: 15px;
      font-weight: 500;
    }
    .active-state, .ft-header button {
      width: 100px;
    }
    .active-state.vf {
      transform: translateX(116px);
    }
    .field {
      overflow-x: auto;
    }
    .field .ft-card img {
      width: 270px;
      height: 160px;
      object-fit: cover;
      border-radius: 24px;
    }
  }
</style>
