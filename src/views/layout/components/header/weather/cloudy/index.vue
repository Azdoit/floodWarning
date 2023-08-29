<template>
  <div class="cloudy"></div>
</template>

<script setup></script>

<style scoped>
.cloudy:before {
  content: '';
  position: absolute;
  top: 35%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 15px; /* 修改宽度为15px */
  height: 15px; /* 修改高度为15px */
  background: #fff;
  border-radius: 50%;
  box-shadow: #fff 9px -6px 0 2.25px, #fff 23.625px -2.25px 0 0.75px,
    #fff 35.625px 1.5px 0 -1.5px, #fff 13.875px 2.25px 0 2.25px,
    #fff 22.875px 2.25px 0 0.75px, #ccc 10.875px -8.625px 0 2.25px,
    #ccc 24px -5.25px 0 0.75px, #ccc 35.625px -1.5px 0 -1.5px;
  z-index: 2;
}

.cloudy:before {
  animation: cloudMove 2s linear infinite;
}

@keyframes cloudMove {
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
