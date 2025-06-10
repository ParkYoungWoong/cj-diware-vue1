<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import TheButton from '@/components/TheButton.vue'
import TextField from '@/components/TextField.vue'

const searchText = ref('')
const movies = ref([])

async function fetchMoives() {
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&s=${searchText.value}`
  )
  const { Search } = await res.json()
  movies.value = Search
}
</script>

<template>
  <div class="search-bar">
    <TextField
      v-model="searchText"
      @keydown.enter="fetchMoives" />
    <TheButton
      color="primary"
      @click="fetchMoives">
      검색
    </TheButton>
  </div>
  <div class="movie-list">
    <ul>
      <li
        v-for="movie in movies"
        :key="movie.imdbID">
        <!-- http://localhost:5173/movies/tt1234567 -->
        <RouterLink :to="`/movies/${movie.imdbID}`">
          <div>{{ movie.Title }}</div>
          <img
            :src="movie.Poster"
            :alt="movie.Title"
            width="100" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
