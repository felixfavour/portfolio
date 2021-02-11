<template>
  <div class="home-container">
    <div class="banner">
      <div class="text">
        <div class="text-1">
          Hello, I am
        </div>
        <div class="text-2">
          Favour Felix
        </div>
        <div class="text-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsam doloremque veritatis incidunt repellat deserunt delectus! Alias reiciendis quidem aut.
        </div>
        <div class="button">
          <button>
            <div class="text">
              Say Hello!
            </div>
            <div class="span material-icons">
              arrow_forward
            </div>
          </button>
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
export default {}
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
.text-1 {
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 40px;
}
.text-2 {
  margin: 12px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 70px;
}
.text-3 {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  width: 400px;
  line-height: 33px;
}
.banner button {
  margin-top: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  border: 2px solid;
  font-weight: 700;
  background: #DE8500;
  width: 190px;
  height: 45px;
}
.banner > .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 45%;
}
.banner > .image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 45%;
}
.banner .personal-image {
  width: 550px;
  position: absolute;
  height: 550px;
  background: url('~assets/bitmaps/banner-2-min.png') no-repeat;
  filter: drop-shadow(0px 38px 56px rgba(0, 0, 0, 0.25));
}
.banner .personal-image-sill {
  width: 550px;
  height: 550px;
  background: url('~assets/bitmaps/banner-2-sill.png') no-repeat;
  box-sizing: border-box;
  filter: drop-shadow(0px 38px 56px rgba(0, 0, 0, 0.25));
  transform: translate(-35px, 10px);
  animation: reveal 1s forwards;
}

@keyframes reveal {
  from {
    transform: translate(-35px, 10px);
  }
  to {
    transform: translate(-95px, 10px);
  }
}
</style>
