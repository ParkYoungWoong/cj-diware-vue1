<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TheLoader from '@/components/TheLoader.vue'

const route = useRoute()
const movie = ref(null)

onMounted(() => {
  fetchMovieDetails()
})

async function fetchMovieDetails() {
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&i=${route.params.movieId}`
  )
  movie.value = await res.json()
}
</script>

<template>
  <div
    v-if="movie"
    class="movie-details">
    <div class="poster">
      <img
        :src="movie.Poster.replace('SX300', 'SX1000')"
        :alt="movie.Title" />
    </div>
    <div class="infos">
      <h1>{{ movie.Title }}</h1>
      <p>{{ movie.Plot }}</p>
      <div>
        <h3>Actors</h3>
        <p>{{ movie.Actors }}</p>
      </div>
      <div>
        <h3>Director</h3>
        <p>{{ movie.Director }}</p>
      </div>
      <div>
        <h3>Ratings</h3>
        <p
          v-for="rating in movie.Ratings"
          :key="rating.Source">
          {{ rating.Source }} - {{ rating.Value }}
        </p>
      </div>
    </div>
  </div>
  <TheLoader
    v-else
    color="royalblue" />
</template>

<style scoped>
.movie-details {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
}
.poster {
  flex-shrink: 0;
  width: 500px;
}
.poster img {
  width: 100%;
}
.infos {
  flex-grow: 1;
}
h3 {
  font-size: 18px;
  font-weight: bold;
}
</style>
