<script setup>
import { ref } from 'vue'
import TextField from '@/components/TextField.vue'
import TheButton from '@/components/TheButton.vue'

const inputText = ref('')
const inputPassword = ref('')
</script>

<template>
  <TextField
    v-model="inputText"
    label="이름"
    type="text"
    placeholder="이름을 입력하세요!" />
  <TextField
    v-model="inputPassword"
    label="비밀번호"
    type="password"
    placeholder="비밀번호를 입력하세요!" />
  <TheButton color="primary">로그인</TheButton>
</template>
