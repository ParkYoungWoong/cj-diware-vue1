<script setup>
defineProps(['modelValue', 'label'])
defineEmits(['update:modelValue'])
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <label>
    <span>{{ label }}</span>
    <input
      type="text"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </label>
</template>

<style scoped></style>
