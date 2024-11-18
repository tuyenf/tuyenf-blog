<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} | tuyenf.dev` : 'A developer | tuyenf.dev'
  },
  bodyAttrs: {
    class: 'font-inter antialiased bg-white text-slate-800 dark:bg-gray-900 dark:text-slate-200 tracking-tight',
  },
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
