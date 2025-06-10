<script setup>
import { RouterView } from 'vue-router'
import SearchBar from '@/components/movies/SearchBar.vue'
import MovieList from '@/components/movies/MovieList.vue'
</script>

<template>
  <SearchBar />
  <MovieList />
  <RouterView />
</template>

<style scoped></style>
