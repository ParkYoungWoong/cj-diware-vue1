<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TextField from '@/components/TextField.vue'
import TheButton from '@/components/TheButton.vue'

const inputText = ref('')
const inputPassword = ref('')
// const 정보 = useRoute()
// const 제어 = useRouter()
const router = useRouter()

function handleSignIn() {
  if (inputText.value && inputPassword.value) {
    // 로그인 API 요청, 응답
    localStorage.setItem('accessToken', 'abc123')
    // 홈(Home) 페이지 이동!
    router.push('/')
  }
}
</script>

<template>
  <TextField
    v-model="inputText"
    label="아이디"
    type="text"
    placeholder="아이디를 입력하세요!" />
  <TextField
    v-model="inputPassword"
    label="비밀번호"
    type="password"
    placeholder="비밀번호를 입력하세요!" />
  <TheButton
    color="primary"
    @click="handleSignIn">
    로그인
  </TheButton>
</template>
