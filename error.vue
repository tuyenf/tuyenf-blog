<script setup lang="ts"></script>

<template>
  <section class="min-h-screen bg-primary-50 dark:bg-zinc-950 p-10 md:p-20 flex flex-col dark:text-white">
    <div class="noise w-full h-full absolute top-0 left-0" />
    <span class="shrink-0 text-xl">404</span>
    <div class="grow flex flex-col justify-center">
      <h1 class="font-medium text-3xl mb-4 md:mb-6 md:text-5xl">Page not found</h1>
      <p class="text-md md:text-lg">The page you are looking for doesn't exist or has been moved.</p>
    </div>
  </section>
</template>

<style scoped>
.noise {
  background: url('assets/media/images/noise.png') repeat center center fixed;
}
</style>
