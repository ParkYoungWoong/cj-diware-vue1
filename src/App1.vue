<script setup>
import { ref, onMounted } from 'vue'

const text = ref('Hello Vue?')
const title = ref('Click me!!')
const isDisabled = ref(false)
const isActive = ref(false)
const inputText = ref('')
const inputEl = ref(null)

onMounted(() => {
  inputEl.value?.focus()
})

function changeText() {
  text.value = 'Hello World'
  title.value = 'Click You?!'
}
function toggle() {
  isDisabled.value = !isDisabled.value
  isActive.value = !isActive.value
}
</script>

<template>
  <h1
    :title="title"
    @click="changeText">
    {{ text }}
  </h1>
  <button @click="toggle">토글!</button>
  <input
    ref="inputEl"
    v-model="inputText"
    :disabled="isDisabled"
    :class="{
      active: inputText,
      abc: true
    }" />
  <div
    :style="{
      color: inputText,
      border: `2px solid ${inputText}`
      // backgroundColor: inputText
    }">
    {{ inputText }}
  </div>
</template>

<style scoped>
.active {
  background-color: red;
  color: white;
  font-weight: bold;
}
</style>
