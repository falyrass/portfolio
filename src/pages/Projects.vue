<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <h2 class="text-2xl sm:text-3xl font-semibold mb-6">Projets</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="p in projects" :key="p.id" v-bind="p" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ui/ProjectCard.vue'
import projects from '../data/projects'
</script>

<style scoped>
</style>
