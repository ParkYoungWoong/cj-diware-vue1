<script setup>
import { useCountStore } from '@/stores/count'

const countStore = useCountStore()
</script>

<template>
  <h1>About Page!</h1>
  <h2 @click="countStore.increase">
    {{ countStore.count }}
  </h2>
</template>
