<script setup>
import MovieItem from '@/components/movies/MovieItem.vue'
import { useMovieStore } from '@/stores/movie'

const movieStore = useMovieStore()
</script>

<template>
  <div class="movie-list">
    <ul>
      <MovieItem
        v-for="movie in movieStore.movies"
        :key="movie.imdbID"
        :movie="movie" />
    </ul>
  </div>
</template>

<style scoped></style>
