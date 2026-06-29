<script setup>
import { computed } from 'vue'
import { copyText } from '../utils/clipboard'

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '内容',
  },
  inline: {
    type: Boolean,
    default: true,
  },
})

const classes = computed(() => ['copy-chip', { 'copy-chip-inline': props.inline }])

function handleClick() {
  copyText(props.value, props.label)
}
</script>

<template>
  <button type="button" :class="classes" @click="handleClick">
    <slot>{{ value }}</slot>
  </button>
</template>
