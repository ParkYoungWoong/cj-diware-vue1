<script setup>
import { RouterLink } from 'vue-router'

defineProps(['movie'])
</script>
<template>
  <li>
    <!-- http://localhost:5173/movies/tt1234567 -->
    <RouterLink :to="`/movies/${movie.imdbID}`">
      <div>{{ movie.Title }}</div>
      <img
        :src="movie.Poster"
        :alt="movie.Title"
        width="100" />
    </RouterLink>
  </li>
</template>
