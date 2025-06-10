<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: red;
  font-weight: bold;
}
</style>
