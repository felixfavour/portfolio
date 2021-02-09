<template>
  <div class="body">
    <QuotePurger />
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
  }
  .container {
    padding: 0 15vw;
  }
  .ellipse {
    position: absolute;
    overflow: hidden;
    /* animation: gallavant 5s forwards; */
  }
  .ellipse.two {
    top: 20%;
    right: 0;
  }
  .ellipse.two img {
    width: 500px;
    /* animation: gallavant 5s forwards; */
  }

  @keyframes gallavant {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(300px);
    }
  }
</style>
