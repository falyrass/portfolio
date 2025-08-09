<template>
  <article
    class="group rounded-lg overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-night shadow-sm transition hover:shadow-xl"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0 }"
  >
    <img :src="image" :alt="title" class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      <p class="text-sm opacity-80 mb-3">{{ description }}</p>
      <ul class="flex flex-wrap gap-2 mb-4">
        <li v-for="t in tech" :key="t" class="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">{{ t }}</li>
      </ul>
      <div class="flex items-center gap-3">
        <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener" class="text-sm text-gold hover:underline">Démo</a>
        <a v-if="codeUrl" :href="codeUrl" target="_blank" rel="noopener" class="text-sm text-gold hover:underline">Code</a>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
  tech: { type: Array, default: () => [] },
  demoUrl: String,
  codeUrl: String,
})
</script>

<style scoped>
</style>
