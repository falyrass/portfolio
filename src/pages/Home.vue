<template>
  <section class="pt-28 sm:pt-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
      >
        <h1 class="text-3xl sm:text-5xl font-bold mb-4">Ton Nom</h1>
        <p class="text-lg opacity-80 mb-6">Développeur Web • Front-end</p>
        <RouterLink to="/contact" class="inline-flex items-center gap-2 rounded-md bg-gold text-night px-5 py-3 font-medium hover:brightness-95">Me contacter</RouterLink>
      </div>
      <div class="flex justify-center md:justify-end">
        <div class="h-48 w-48 sm:h-64 sm:w-64 rounded-full overflow-hidden border-4 border-gold shadow-xl">
          <img src="https://via.placeholder.com/512x512.png?text=Photo" alt="Photo de profil" class="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
