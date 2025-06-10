<script setup>
import TheButton from '@/components/TheButton.vue'
import TextField from '@/components/TextField.vue'

async function fetchMoives() {
  const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=batman')
  const data = await res.json()
  console.log(data)
}
</script>

<template>
  <TextField />
  <TheButton
    color="primary"
    @click="fetchMoives">
    검색
  </TheButton>
</template>

<style scoped></style>
