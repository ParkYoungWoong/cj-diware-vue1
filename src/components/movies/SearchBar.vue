<script setup>
import TheButton from '@/components/TheButton.vue'
import TextField from '@/components/TextField.vue'
import { useMovieStore } from '@/stores/movie'

const movieStore = useMovieStore()
</script>

<template>
  <div class="search-bar">
    <TextField
      v-model="movieStore.searchText"
      @keydown.enter="movieStore.fetchMoives" />
    <TheButton
      color="primary"
      @click="movieStore.fetchMoives">
      검색
    </TheButton>
  </div>
</template>
