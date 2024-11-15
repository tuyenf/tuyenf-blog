<script setup lang="ts">
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
import AppSidebar from "~/components/AppSidebar.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="min-h-screen flex">
      <main class="grow overflow-hidden px-6">
        <div class="w-full h-full max-w-[1072px] mx-auto flex flex-col">
          <AppHeader/>
          <section class="grow md:pt-4 lg:pt-6">
            <slot/>
          </section>
          <AppFooter/>
        </div>
      </main>
      <AppSidebar/>
    </div>
  </div>
</template>

<style scoped>

</style>