<template>
  <div class="hloader"></div>
</template>

<style scoped>
.hloader {
  --hloader-color: white;
  --hloader-size: 16px;
  --hloader-weight: 3px;
  --hloader-duration: 1s;
  width: var(--hloader-size);
  height: var(--hloader-size);
  color: var(--hloader-color);
  border: var(--hloader-weight) solid;
  border-top-color: transparent;
  border-radius: 50%;
  animation: hloader var(--hloader-duration) infinite linear;
}
@keyframes hloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
