<template>
  <div class="quote-purger-container">
    <div class="quote-line" />
    <div class="quote">
      To Err is Human, To Forgive is Divine
    </div>
    <div class="quote-line" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.quote-purger-container {
  background: #DE8500;
  color: #FFF;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Major Mono Display', monospace;
}
.quote-line {
  border: 1px solid #FFF;
  margin: 0 16px;
  width: 10vh;
}
</style>
