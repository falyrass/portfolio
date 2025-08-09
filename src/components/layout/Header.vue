<template>
  <header :class="['fixed inset-x-0 top-0 z-50 transition-colors', isScrolled ? 'bg-night/80 backdrop-blur border-b border-white/10' : 'bg-transparent']">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
      <RouterLink to="/" class="font-semibold tracking-wide">Mon Portfolio</RouterLink>
      <nav class="hidden md:flex items-center gap-6">
        <RouterLink class="hover:text-gold" to="/">Accueil</RouterLink>
        <RouterLink class="hover:text-gold" to="/about">À propos</RouterLink>
        <RouterLink class="hover:text-gold" to="/projects">Projets</RouterLink>
        <RouterLink class="hover:text-gold" to="/contact">Contact</RouterLink>
      </nav>
      <div class="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

const isScrolled = ref(false)
const onScroll = () => { isScrolled.value = window.scrollY > 8 }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
</style>
