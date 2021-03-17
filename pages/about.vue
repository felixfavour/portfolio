<template>
  <div class="about-container">
    <div class="image fadein">
      <div class="ndubuisi" />
      <!-- <div class="content-body">
        I tried modelling the guy in the <b>homepage</b> into some caricature.
      </div> -->
    </div>
    <div class="content fadein">
      <!-- <div class="content-header">
        Who is Favour?
      </div> -->
      <div class="content-body">
        <span class="large">Hello! My name is Favour Felix,</span> I am a Software Engineer based in Lagos, Nigeria. I am also a wonderful designer, self-proclaimed anyways. As much as I love building <b>wonderful applications</b> on the web and on mobile, I am very passionate about <b>design</b>. I'm a firm believer of the fact that a User Interface should be beautiful and functional, emphasis on functional. <br> Most importantly, I am a <b>Christian</b>, I love to put God first in all of my dealings, and I hope people see that in the way I show love to anybody and everybody.
      </div>
      <div class="content-header">
        My Skills
      </div>
      <div class="content-body">
        In my journey of over three years "pressing computer", I have successfully picked up a lot of skills on my way and mastered a few.
        <div class="flex">
          <ul>
            <li>HTML<b> / </b>CSS<b> / </b>Javascript</li>
            <li>Java</li>
            <li>Android (Kotlin and Java)</li>
            <li>Vue.js/Nuxt.js</li>
          </ul>
          <ul>
            <li>Adobe (Illustrator<b> / </b>Photoshop)</li>
            <li>Figma<b> / </b>Adobe XD</li>
            <li>Firebase<b> / </b>Cloud Firestore</li>
            <li>PostgreSQL<b> / </b>SQLite </li>
          </ul>
        </div>
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
   justify-content: space-around;
   height: 72vh;
   margin: 4vh 0;
 }
 .image {
   flex-basis: 30%;
 }
 .image .content-body {
   width: 300px;
 }
 .large {
   font-size: 22px;
   font-weight: 500;
 }
 .ndubuisi {
   margin-top: 5vh;
   width: 300px;
   height: 300px;
   background: url('~assets/bitmaps/ndubuisi.png') no-repeat;
   background-size: cover;
   border: 10px solid;
   transition: .5s;
   border-radius: 24px;
 }
 .content {
   flex-basis: 60%;
   max-height: 65vh;
   overflow-y: auto;
 }
 .content b {
   color: #DE8500;
   font-weight: 500;
 }
 .content-header {
    margin-top: 36px;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 23px;
 }
 .content-body {
    margin-top: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 35px;
 }
 .flex {
   display: flex;
   justify-content: space-between;
 }
 .flex ul {
   flex-basis: 50%;
   padding: 0;
   list-style-type: none;
 }
 .flex li::before {
   font-family: 'Material Icons';
   content: 'radio_button_checked';
   margin-right: 12px;
   color: #DE8500;
 }

  @media screen and (max-width: 1440px) {
    /* .image {
      flex-basis: 30%;
    } */
    .ndubuisi {
      margin-top: 10vh;
      width: 230px;
      height: 230px;
      background: url('~assets/bitmaps/ndubuisi.png') no-repeat;
      background-size: cover;
      border: 7px solid;
    }
    /* .content {
      flex-basis: ;
    } */
    .image .content-body {
      width: 230px;
    }
    .image img {
      width: 100%;
    }
    .content-header {
        margin-top: 36px;
        margin-bottom: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 23px;
    }
    .content-body {
        margin-top: 8px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 35px;
    }
  }

  @media screen and (max-width: 1024px) {
    /* .image {
      flex-basis: 30%;
    } */
    .ndubuisi {
      margin-top: 10vh;
      width: 230px;
      height: 230px;
      background: url('~assets/bitmaps/ndubuisi.png') no-repeat;
      background-size: cover;
      border: 7px solid;
    }
    .image .content-body {
      width: 230px;
    }
    .image img {
      width: 100%;
    }
    .content-header {
        margin-top: 36px;
        margin-bottom: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 23px;
    }
    .content-body {
        margin-top: 8px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 35px;
    }
  }

  @media screen and (max-width: 768px) {
    .image {
      flex-basis: 30%;
    }
    .ndubuisi {
      margin-top: 10vh;
      width: 180px;
      height: 180px;
      background: url('~assets/bitmaps/ndubuisi.png') no-repeat;
      background-size: cover;
      border: 7px solid;
      transition: .5s;
    }
    .image .content-body {
      width: 180px;
    }
    .image img {
      width: 100%;
    }
    .flex {
      flex-wrap: wrap;
    }
    .flex ul:nth-of-type(1) {
      margin-top: 24px;
    }
    .flex ul {
      flex-basis: 100%;
      padding: 0;
      list-style-type: none;
      margin: 0;
    }
  }

  @media screen and (max-width: 500px) {
    .about-container {
      flex-direction: column;
    }
    .ndubuisi {
      margin: 0;
    }
  }
</style>
