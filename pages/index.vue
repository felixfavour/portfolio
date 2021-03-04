<template>
  <div class="home-container">
    <div class="banner">
      <div class="text">
        <div class="text text-1 fadein">
          Hello, I am
        </div>
        <div :visibility="texts[0] !== undefined" class="text text-2 fadein">
          Favour Felix
        </div>
        <div :visibility="texts[1] !== undefined" class="text text-2 fadein below">
          I enjoy building software.
        </div>
        <div :visibility="texts[2] !== undefined" class="text text-3 fadein">
          Helping people with efficient and intuitive computer software has always been the dream. These days I live 'the dream' at <a target="blank" href="http://acumen.digital">Acumen Digital</a>
        </div>
        <div class="button">
          <button>
            <div class="text">
              Say Hello!
            </div>
          </button>
          <div class="material-icons">
            arrow_forward
          </div>
        </div>
      </div>
      <div class="image">
        <div class="personal-image-sill" />
        <div class="personal-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      texts: []
    }
  },
  mounted () {
    console.log(this.texts[0])
    // this.textSequentialAnimator()
  },
  methods: {
    textSequentialAnimator () {
      window.setInterval(() => {
        this.texts.push(1)
      }, 800)
    }
  }
}
</script>

<style scoped>
.home-container {
  height: 80vh;
}
.banner {
  display: flex;
  height: 90%;
  justify-content: space-between;
}
.banner > .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 50%;
}
.banner > .text > .text {
  opacity: 0;
}
.banner > .text > .text[visibility = "true"] {
  visibility: visible;
}
.banner > .text > .text[visibility = "false"] {
  visibility: hidden;
  color: pink;
}
.banner > .image {
  margin-top: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 40%;
}
.banner .personal-image {
  width: 350px;
  position: absolute;
  height: 550px;
  background: url('~assets/bitmaps/banner-2-min.png') no-repeat;
  filter: drop-shadow(0px 38px 56px rgba(0, 0, 0, 0.25));
}
.banner .personal-image-sill {
  width: 350px;
  height: 550px;
  background: url('~assets/bitmaps/banner-2-sill.png') no-repeat;
  box-sizing: border-box;
  filter: drop-shadow(0px 38px 56px rgba(0, 0, 0, 0.25));
  transform: translate(-35px, 10px);
  animation: reveal 1s forwards;
}
.text-1 {
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 40px;
}
.text-2 {
  margin: 12px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 70px;
}
.text-2.below {
  margin-top: 0;
  color: #9E5F00;
}
.text a {
  color: #9E5F00;
  text-decoration: none;
  font-weight: bold;
}
.text-3 {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  width: 500px;
  line-height: 33px;
}
button {
  cursor: pointer;
  transition: .4s;
}
.button {
  position: relative;
  display: inline-block;
  width: 190px;
  height: 50px;
}
.material-icons {
  position: absolute;
  top: 62px;
  right: 26px;
  transition: .4s;
}
button:hover + .material-icons {
  transform: translate(10px, 0);
}
.banner button {
  margin-top: 50px;
  display: flex;
  justify-content: left;
  padding-left: 24px;
  align-items: center;
  font-size: 18px;
  border: 2px solid;
  font-weight: 700;
  background: #DE8500;
  width: 190px;
  height: 50px;
}

@keyframes reveal {
  from {
    transform: translate(-35px, 10px);
  }
  to {
    transform: translate(-95px, 10px);
  }
}

@media screen and (max-width: 1024px) {
.text-1 {
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 40px;
}
.text-2 {
  margin: 12px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 70px;
}
.text-3 {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  width: 400px;
  line-height: 33px;
}
  .banner .personal-image {
    width: 450px;
    height: 450px;
    background-size: cover;
  }
  .banner .personal-image-sill {
    width: 450px;
    height: 450px;
    background-size: cover;
  }
}
</style>
