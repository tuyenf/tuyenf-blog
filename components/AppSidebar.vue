<script setup lang="ts">

</script>

<template>
  <aside class="flex flex-col z-10 bg-white fixed bottom-0 left-0 right-0 h-auto w-full border-solid border-slate-200 md:sticky md:top-0 md:h-screen md:w-24 md:shrink-0 border-t md:border-s md:border-slate-200 dark:border-slate-800 md:dark:border-slate-800 dark:bg-gray-900">
    <NuxtLink to="/" class="hidden md:block mx-auto mt-4">
      <img class="w-10 h-10 rounded-full" src="assets/media/images/me.png" alt="tuyenf.dev">
    </NuxtLink>
    <ul class="flex justify-around py-2 md:py-0 md:justify-center grow md:flex-col">
      <li class="py-2">
        <NuxtLink to="/"
                  :activeClass="'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 md:after:top-0 md:after:h-auto md:after:w-0.5 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-500 cursor-default select-none !text-primary-500'"
                  class="relative flex h-6 w-full items-center justify-center text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
          <span class="sr-only">Home</span>
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="19">
            <path fill-opacity=".16" d="M4 7v11h13V7l-6.5-5z"></path>
            <path
                d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565zM16 17V9h2v10H3V9h2v8h11z"></path>
          </svg>
        </NuxtLink>
      </li>
      <li class="py-2 md:mt-3">
        <NuxtLink to="/about"
                  :activeClass="'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 md:after:top-0 md:after:h-auto md:after:w-0.5 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-500 cursor-default select-none !text-primary-500'"
                  class="relative flex h-6 w-full items-center justify-center text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
          <span class="sr-only">About</span>
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fill-opacity=".16" d="M10 18c-4.41.0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            <path
                d="M9 5h2v2H9V5zm0 4h2v6H9V9zm1-9C4.48.0.0 4.48.0 10s4.48 10 10 10 10-4.48 10-10S15.52.0 10 0zm0 18c-4.41.0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
        </NuxtLink>
      </li>
      <li class="py-2 md:mt-3">
        <NuxtLink to="/stuff"
                  :activeClass="'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 md:after:top-0 md:after:h-auto md:after:w-0.5 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-500 cursor-default select-none !text-primary-500'"
                  class="relative flex h-6 w-full items-center justify-center text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
          <span class="sr-only">Stuff</span>
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fill-opacity=".16" d="M1 4h18v10H1z"></path>
            <path d="M8 3h4V2H8v1zM6 3V0h8v3h6v12H0V3h6zM2 5v8h16V5H2zm14 13v-2h2v4H2v-4h2v2h12z"></path>
          </svg>
        </NuxtLink>
      </li>
      <li class="py-2 md:mt-3">
        <NuxtLink to="/resume"
                  :activeClass="'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 md:after:top-0 md:after:h-auto md:after:w-0.5 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-500 cursor-default select-none !text-primary-500'"
                  class="relative flex h-6 w-full items-center justify-center text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
          <span class="sr-only">Resume</span>
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="20">
            <path fill-opacity=".16" fill-rule="nonzero" d="M1 5h16v14H1z"></path>
            <path fill-rule="nonzero" d="M2 6v12h14V6H2zm16-2v16H0V4h18zM2 2V0h14v2H2z"></path>
          </svg>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped>

</style>