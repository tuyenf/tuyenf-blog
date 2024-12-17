<script setup lang="ts">
const headerElement = useTemplateRef('header')

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
function handleScroll() {
  if (!headerElement.value) return
  if (window.scrollY !== 0) {
    headerElement.value.classList.add('backdrop-blur-lg', 'bg-white/70', 'dark:bg-transparent')
  } else {
    headerElement.value.classList.remove('backdrop-blur-lg', 'bg-white/70', 'dark:bg-transparent')
  }
}
const menus = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Stuff',
    path: '/posts',
  },
]
</script>

<template>
  <header
    ref="header"
    class="fixed h-10 px-3 md:px-4 flex items-center justify-between fixed inset-0 z-10"
  >
    <NuxtLink
      to="/"
      data-interaction="false"
      aria-label="tuyenf.dev"
      class="h-full flex items-center justify-center"
    >
      <IconLogo
        class="w-6 h-6"
        :font-controlled="false"
        :filled="true"
      />
    </NuxtLink>
    <nav class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <ul class="flex items-center justify-between space-x-4 md:space-x-10">
        <li
          v-for="(item, i) in menus"
          :key="i"
        >
          <NuxtLink
            :to="item.path"
            data-interaction="false"
            class="dark:text-white hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
            active-class="font-medium text-primary-600 dark:!text-primary-400"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex justify-end items-center">
      <AppSound />
      <AppViewMode />
    </div>
  </header>
</template>

<style scoped></style>
