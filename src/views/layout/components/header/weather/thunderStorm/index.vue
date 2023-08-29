<template>
  <div class="weather lightning"></div>
</template>

<script setup></script>

<style scoped>
.weather {
  position: relative;
  display: inline-block;
  width: 180px;
  height: 240px;
  background: #23b7e5;
  border-radius: 8px;
}
.lightning {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background-color: yellow;
  clip-path: polygon(50% 0, 80% 70%, 90% 40%, 60% 100%, 40% 40%, 10% 70%);
  animation: lightning 2s infinite steps(1, end);
  opacity: 0;
}

@keyframes lightning {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
