<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <h2 class="text-2xl sm:text-3xl font-semibold mb-6">À propos</h2>
    <p class="opacity-90 mb-8 max-w-3xl">
      Développeur front-end passionné, j'aime créer des interfaces modernes, performantes et accessibles.
    </p>

    <h3 class="text-xl font-semibold mb-4">Compétences</h3>
    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
      <li v-for="s in skills" :key="s" class="px-3 py-2 rounded border border-black/10 dark:border-white/10">{{ s }}</li>
    </ul>

    <h3 class="text-xl font-semibold mb-4">Parcours</h3>
    <ol class="relative border-s border-black/10 dark:border-white/10 space-y-6">
      <li v-for="t in timeline" :key="t.id" class="ms-4">
        <div class="absolute w-3 h-3 bg-gold rounded-full -start-1.5 mt-2 border border-night"></div>
        <time class="text-xs opacity-70">{{ t.start }} - {{ t.end || 'Présent' }}</time>
        <h4 class="font-medium">{{ t.title }} · <span class="opacity-80">{{ t.org }}</span></h4>
        <p class="text-sm opacity-80">{{ t.description }}</p>
      </li>
    </ol>
  </section>
</template>

<script setup>
import skills from '../data/skills'
import timeline from '../data/timeline'
</script>

<style scoped>
</style>
