<script setup lang="ts">
useHead({
  title: 'About Me',
})
</script>

<template>
  <div class="py-8 md:py-16">
    <div class="mx-auto grid max-w-screen-xl pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
      <div class="content-center justify-self-start md:col-span-7 md:text-start">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          Hi. I'm
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> tuyenf </span>
          ✌🏻
        </h1>
        <p class="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">
          I’m a Frontend Developer experienced in Vue.js, Nuxt.js, TypeScript, and modern tools, passionate about building user-friendly, visually appealing
          interfaces.
        </p>
      </div>
      <div class="hidden md:col-span-5 md:mt-0 md:flex">
        <img
          class="dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
          alt="shopping illustration"
        >
        <img
          class="hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg"
          alt="shopping illustration"
        >
      </div>
    </div>
    <div class="mx-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 max-w-screen-xl text-gray-500 dark:text-gray-400">
      <div class="flex items-center text-green-500 font-bold">
        <IconVue class="text-2xl lg:text-3xl flex-shrink-0" />
        <span class="text-slate-900 dark:text-white ml-2 text-md lg:text-xl">Vue.js</span>
      </div>
      <div class="flex items-center text-green-500 font-bold">
        <IconNuxt class="text-3xl lg:text-4xl flex-shrink-0" />
        <span class="text-slate-900 dark:text-white ml-2 text-md lg:text-xl">Nuxt</span>
      </div>
      <div class="flex items-center font-bold">
        <IconVite
          class="text-2xl lg:text-3xl flex-shrink-0"
          :filled="true"
        />
        <span class="text-slate-900 dark:text-white ml-2 text-md lg:text-xl">Vite</span>
      </div>
      <div class="flex items-center font-bold">
        <IconJavascript
          class="text-2xl lg:text-3xl flex-shrink-0"
          :filled="true"
        />
        <span class="text-slate-900 dark:text-white ml-2 text-md lg:text-xl">Javascript</span>
      </div>
      <div class="flex items-center font-bold">
        <IconTypescript
          class="text-2xl lg:text-3xl flex-shrink-0"
          :filled="true"
        />
        <span class="text-slate-900 dark:text-white ml-2 text-md lg:text-xl">Typescript</span>
      </div>
      <div class="flex items-center text-green-500 font-bold">
        <IconTailwind
          class="text-3xl lg:text-4xl flex-shrink-0"
          :filled="true"
        />
        <span class="text-slate-900 dark:text-white ml-2 text-md lg:text-xl">TailwindCSS</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
