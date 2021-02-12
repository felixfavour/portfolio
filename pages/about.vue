<template>
  <div class="about-container">
    <div class="image">
      <div class="ndubuisi" />
      <div class="content-body">
        I tried modelling the guy in the <b>homepage</b> into some caricature.
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        The Stuff
      </div>
      <div class="content-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium necessitatibus deleniti facilis consequatur illo nostrum impedit tempora ipsa quae! Consequatur nobis obcaecati animi minus voluptate minima dolor beatae ipsa ipsum aliquam magnam, sunt nihil ab sequi doloremque amet autem mollitia itaque voluptatem accusantium libero illum rerum atque distinctio? Culpa distinctio dicta ipsam officiis? Labore sapiente cumque in illo non aspernatur distinctio libero amet! Officia, sapiente! Ea animi explicabo provident sequi quasi pariatur tempora deserunt doloremque beatae suscipit quisquam ullam minima sapiente vitae fuga incidunt nobis, maiores omnis ab. Necessitatibus corrupti, temporibus aspernatur nesciunt repellat fugiat quam dolores modi eligendi!
      </div>
      <div class="content-header">
        The Stuff
      </div>
      <div class="content-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium necessitatibus deleniti facilis consequatur illo nostrum impedit tempora ipsa quae! Consequatur nobis obcaecati animi minus voluptate minima dolor beatae ipsa ipsum aliquam magnam, sunt nihil ab sequi doloremque amet autem mollitia itaque voluptatem accusantium libero illum rerum atque distinctio? Culpa distinctio dicta ipsam officiis? Labore sapiente cumque in illo non aspernatur distinctio libero amet! Officia, sapiente! Ea animi explicabo provident sequi quasi pariatur tempora deserunt doloremque beatae suscipit quisquam ullam minima sapiente vitae fuga incidunt nobis, maiores omnis ab. Necessitatibus corrupti, temporibus aspernatur nesciunt repellat fugiat quam dolores modi eligendi!
      </div>
      <div class="content-header">
        The Stuff
      </div>
      <div class="content-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium necessitatibus deleniti facilis consequatur illo nostrum impedit tempora ipsa quae! Consequatur nobis obcaecati animi minus voluptate minima dolor beatae ipsa ipsum aliquam magnam, sunt nihil ab sequi doloremque amet autem mollitia itaque voluptatem accusantium libero illum rerum atque distinctio? Culpa distinctio dicta ipsam officiis? Labore sapiente cumque in illo non aspernatur distinctio libero amet! Officia, sapiente! Ea animi explicabo provident sequi quasi pariatur tempora deserunt doloremque beatae suscipit quisquam ullam minima sapiente vitae fuga incidunt nobis, maiores omnis ab. Necessitatibus corrupti, temporibus aspernatur nesciunt repellat fugiat quam dolores modi eligendi!
      </div>
      <div class="content-header">
        The Stuff
      </div>
      <div class="content-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium necessitatibus deleniti facilis consequatur illo nostrum impedit tempora ipsa quae! Consequatur nobis obcaecati animi minus voluptate minima dolor beatae ipsa ipsum aliquam magnam, sunt nihil ab sequi doloremque amet autem mollitia itaque voluptatem accusantium libero illum rerum atque distinctio? Culpa distinctio dicta ipsam officiis? Labore sapiente cumque in illo non aspernatur distinctio libero amet! Officia, sapiente! Ea animi explicabo provident sequi quasi pariatur tempora deserunt doloremque beatae suscipit quisquam ullam minima sapiente vitae fuga incidunt nobis, maiores omnis ab. Necessitatibus corrupti, temporibus aspernatur nesciunt repellat fugiat quam dolores modi eligendi!
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .about-container {
   display: flex;
   height: 72vh;
   margin: 4vh 0;
 }
 .image {
   flex-basis: 35%;
 }
 .image .content-body {
   width: 300px;
 }
 .ndubuisi {
   margin-top: 10vh;
   width: 300px;
   height: 300px;
   background: url('~assets/bitmaps/ndubuisi.png') no-repeat;
   background-size: cover;
   border: 10px solid;
 }
 .content {
   flex-basis: 65%;
   max-height: 65vh;
   overflow-y: scroll;
 }
 .content-header {
    margin-top: 28px;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 23px;
 }
 .content-body {
    margin-top: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 35px;
 }
</style>
