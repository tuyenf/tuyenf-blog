<script setup lang="ts"></script>

<template>
  <div class="min-h-dvh relative">
    <div class="noise w-full h-full absolute top-0 left-0" />
    <LayoutHeader />
    <main class="min-h-[calc(100vh-2.5rem)] pt-10 max-w-screen-lg mx-auto px-4 md:px-10 xl:px-0">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style lang="scss">
.noise {
  z-index: -1;
  background: url('assets/media/images/noise.png') repeat center center fixed;
}
</style>
