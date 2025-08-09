<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <h2 class="text-2xl sm:text-3xl font-semibold mb-6">Contact</h2>
    <form @submit.prevent="onSubmit" class="max-w-xl space-y-4">
      <div>
        <label class="block text-sm mb-1" for="name">Nom</label>
        <input v-model="form.name" id="name" type="text" required minlength="2" class="w-full rounded-md border px-3 py-2 bg-white dark:bg-night border-black/10 dark:border-white/10" />
      </div>
      <div>
        <label class="block text-sm mb-1" for="email">Email</label>
        <input v-model="form.email" id="email" type="email" required class="w-full rounded-md border px-3 py-2 bg-white dark:bg-night border-black/10 dark:border-white/10" />
      </div>
      <div>
        <label class="block text-sm mb-1" for="message">Message</label>
        <textarea v-model="form.message" id="message" required minlength="10" rows="5" class="w-full rounded-md border px-3 py-2 bg-white dark:bg-night border-black/10 dark:border-white/10"></textarea>
      </div>
      <div class="flex items-center gap-3">
        <button :disabled="loading" class="rounded-md bg-gold text-night px-5 py-2 font-medium hover:brightness-95 disabled:opacity-60">Envoyer</button>
        <p v-if="status" :class="status === 'success' ? 'text-green-600' : 'text-red-600'">{{ message }}</p>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const status = ref('')
const message = ref('')

async function onSubmit() {
  loading.value = true
  status.value = ''
  message.value = ''
  try {
    await new Promise(r => setTimeout(r, 600))
    status.value = 'success'
    message.value = 'Message envoyé (simulation). Intégration EmailJS à configurer.'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (e) {
    status.value = 'error'
    message.value = 'Une erreur est survenue.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
</style>
