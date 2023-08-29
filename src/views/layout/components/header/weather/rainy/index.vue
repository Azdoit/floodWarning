<template>
  <div class="weather">
    <div class="rainy"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.weather {
  position: relative;
  width: 70px;
  height: 70px;
}
.rainy:before {
  content: '';
  position: absolute;
  top: 35%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  box-shadow: #fff 11px -7.5px 0 3px, #fff 28.5px -3px 0 1px,
    #fff 43.5px 2px 0 -2px, #fff 16.5px 3px 0 3px, #fff 30.5px 3px 0 1px,
    #ccc 14.5px -11.5px 0 3px, #ccc 32px -7px 0 1px, #ccc 47px -2px 0 -2px;
  z-index: 2;
}

.rainy:after {
  content: '';
  position: absolute;
  top: 35%;
  left: 20%;
  width: 2px;
  height: 7px;
  background: #fff;
  border-radius: 1px;
  box-shadow: #fff 12.5px -5px 0, #fff 25px 0 0, #fff 37.5px -5px 0,
    #fff 0 12.5px 0, #fff 12.5px 7.5px 0, #fff 25px 12.5px 0,
    #fff 37.5px 7.5px 0, #fff 0 25px 0, #fff 12.5px 20px 0, #fff 25px 25px 0,
    #fff 37.5px 20px 0;
  animation: rainDrop 2s linear infinite;
}

@keyframes rainDrop {
  0% {
    transform: translate(0, 0) rotate(10deg);
  }
  100% {
    transform: translate(-2px, 12px) rotate(10deg);
    box-shadow: #fff 12.5px -5px 0, #fff 25px 0 0, #fff 37.5px -5px 0,
      #fff 0 12.5px 0, #fff 12.5px 7.5px 0, #fff 25px 12.5px 0,
      #fff 37.5px 7.5px 0, rgba(255, 255, 255, 0) 0 25px 0,
      rgba(255, 255, 255, 0) 12.5px 20px 0, rgba(255, 255, 255, 0) 25px 25px 0,
      rgba(255, 255, 255, 0) 37.5px 20px 0;
  }
}
</style>
