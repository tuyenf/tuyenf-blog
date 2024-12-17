<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | tuyenf.dev` : 'Hello World | tuyenf.dev'
  },
  bodyAttrs: {
    class: 'antialiased bg-primary-50 dark:text-white dark:bg-zinc-950 tracking-tight',
  },
  meta: [{ 'http-equiv': 'Cache-Control', 'content': 'public, max-age=31536000' }],
})
useSeoMeta({
  ogTitle: 'My Nice Site',
  description: 'This is my nice site, let me tell you all about it.',
  ogDescription: 'This is my nice site, let me tell you all about it.',
})
const isFirstLoad = ref<boolean>(true)
provide('isFirstLoad', isFirstLoad)

onMounted(() => {
  setTimeout(() => {
    isFirstLoad.value = false
  }, 1400)
})

watch(
  isFirstLoad,
  (val) => {
    if (val) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  },
  { immediate: true },
)
</script>

<template>
  <audio
    id="interactSound"
    preload="auto"
  >
    <source
      src="assets/media/sounds/interact.ogg"
      type="audio/ogg"
    />
    Your browser does not support the audio tag.
  </audio>
  <audio
    id="backgroundSound"
    preload="auto"
    loop
  >
    <source
      src="assets/media/sounds/background.ogg"
      type="audio/ogg"
    />
    Your browser does not support the audio tag.
  </audio>
  <Transition>
    <AppLoadingScreen
      v-if="isFirstLoad"
      text="tuyenf.dev"
    />
  </Transition>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss"></style>
