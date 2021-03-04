<template>
  <div class="body">
    <QuotePurger v-if="false" />
    <Header />
    <div class="ellipse one">
      <img src="~assets/bitmaps/ellipse1.png">
    </div>
    <div class="ellipse two">
      <img src="~assets/bitmaps/ellipse2.png">
    </div>
    <!-- <div class="ellipse three">
      <img src="~assets/bitmaps/ellipse1.png">
    </div>
    <div class="ellipse four">
      <img src="~assets/bitmaps/ellipse2.png">
    </div> -->
    <div class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style>
  .body {
    /* height: 100vh; */
    max-height: 100vh;
    max-width: 100vw;
  }
  .container {
    padding: 0 10vw;
  }
  .ellipse {
    display: none;
    top: 0%;
    opacity: 0.6;
    left: 0%;
    position: absolute;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
  .ellipse.one img {
    width: 300px;
    /* background: #000; */
    animation: gallavant 10s forwards infinite;
  }
  .ellipse.two img {
    width: 300px;
    animation: gallavant 10s forwards infinite;
  }

  @keyframes gallavant {
    0% {
      margin-left: 0px;
      margin-top: 0px;
      transform: scale(1.5);
    }
    30% {
      margin-left: 100px;
      margin-top: 200px;
      transform: scale(1);
    }
    50% {
      margin-left: 100px;
      margin-top: 400px;
      transform: scale(1.5);
    }
    75% {
      margin-left: 300px;
      margin-top: 200px;
      transform: scale(1);
    }
    75% {
      margin-left: 300px;
      margin-top: 500px;
      transform: scale(2.5);
    }
    100% {
      margin-left: 0px;
      margin-top: 0px;
      transform: scale(1.5);
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      padding: 0 5vw;
    }
  }
</style>
