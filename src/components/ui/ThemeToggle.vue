<template>
  <button @click="toggle" class="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition hover:border-gold hover:text-gold">
    <span v-if="isDark">🌙</span>
    <span v-else>☀️</span>
    <span class="hidden sm:inline">{{ isDark ? 'Sombre' : 'Clair' }}</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const apply = () => {
  const root = document.documentElement
  if (isDark.value) root.classList.add('dark')
  else root.classList.remove('dark')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const init = () => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  apply()
}

const toggle = () => {
  isDark.value = !isDark.value
  apply()
}

if (typeof window !== 'undefined') {
  init()
}
</script>

<style scoped>
</style>
