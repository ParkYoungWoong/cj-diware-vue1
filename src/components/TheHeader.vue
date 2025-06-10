<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/movies">Movies</RouterLink>
    <RouterLink to="/signin">Sign In</RouterLink>
  </header>
</template>

<style scoped>
header {
  display: flex;
  gap: 10px;
}
.router-link-exact-active {
  color: red;
  font-weight: bold;
}
</style>
