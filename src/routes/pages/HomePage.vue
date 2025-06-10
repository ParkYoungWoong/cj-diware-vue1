<script setup>
import { useCountStore } from '@/stores/count'

const countStore = useCountStore()
</script>

<template>
  <h1>Home Page!</h1>
  <h2>{{ countStore.count }}</h2>
</template>
