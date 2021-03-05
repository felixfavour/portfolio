<template>
  <div class="stories-container">
    <div class="text">
      No stories here<span class="full-stop">.</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .stories-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 70px;
    width: 600px;
  }
  .full-stop {
    font-size: 100px;
    color: #DE8500;
  }
</style>
