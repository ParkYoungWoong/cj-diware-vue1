<script setup>
import { ref } from 'vue'
import TheButton from '@/components/TheButton.vue'

const isLoading = ref(false)

async function fetchServerData() {
  // 로딩 시작
  isLoading.value = true

  // 3초 대기
  await new Promise(resolve => {
    setTimeout(resolve, 3000)
  })

  // 로딩 종료
  isLoading.value = false
}
</script>

<template>
  <TheButton
    color="primary"
    :loading="isLoading"
    @click="fetchServerData">
    저장
  </TheButton>
  <TheButton color="secondary">취소</TheButton>
  <TheButton color="danger">삭제</TheButton>
  <TheButton>취소</TheButton>
</template>
