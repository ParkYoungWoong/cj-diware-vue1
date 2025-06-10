import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state() {
    return {
      searchText: '',
      movies: []
    }
  },
  actions: {
    // fetchMovies: async function () {}
    async fetchMoives() {
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&s=${this.searchText}`
      )
      const { Search } = await res.json()
      this.movies = Search
    }
  }
})

// 화살표 함수 vs 일반 함수 차이
// this 키워드
