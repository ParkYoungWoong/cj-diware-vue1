<script setup>
import TheLoader from '@/components/TheLoader.vue'

// defineProps(['color', 'loading']
defineProps({
  color: {
    type: String,
    default: 'secondary'
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :class="{
      [color]: true
    }">
    <template v-if="!loading">
      <slot></slot>
    </template>
    <TheLoader v-else />
  </button>
</template>

<style scoped>
button {
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.primary {
  background-color: royalblue;
}
.secondary {
  background-color: lightgray;
}
.danger {
  background-color: red;
}
</style>
