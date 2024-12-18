<script setup lang="ts">
import type { ApiResponseModule } from '~/@types/ApiResponse'
import useApiFetch from '~/composables/useApiFetch'

useHead({
  title: 'Stuff',
})

const { get, isLoading } = useApiFetch()
const posts = ref<ApiResponseModule.PostListResponse['data']>([])
const pagination = ref<ApiResponseModule.PostListResponse['meta']>({
  currentPage: 1,
  totalPages: 0,
  perPage: 5,
  totalItems: 0,
})

// Gọi API GET
async function fetchPosts() {
  try {
    const response = await get('/api/posts/list', {
      params: {
        query: { q: '', sortBy: 'createdAt', order: 'DESC' },
      },
    })

    const { data, meta } = response.data || {}
    posts.value = data
    pagination.value = meta
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(async () => {
  await fetchPosts()
})
function getDetailRoute(id?: number) {
  if (!id) return '/'
  return `/posts/${id}`
}
</script>

<template>
  <AppHeading :is-hero-section="true">
    <template #title>
      <h1 class="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight md:text-5xl lg:text-7xl">
        <span class="text-primary-600 dark:text-primary-500">Nice</span> stuff <br />I want to share
      </h1>
    </template>
    <template #subtitle> who love coding, writing and cooking. </template>
  </AppHeading>
  <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
    I’m a Frontend Developer experienced in Vue.js, Nuxt.js, TypeScript, and modern tools,
    <br />
    passionate about building user-friendly, visually appealing interfaces.
  </p>
  <div v-if="isLoading">Loading...</div>
  <ul v-else-if="posts">
    <li
      v-for="post in posts"
      :key="post.id"
    >
      <NuxtLink :to="getDetailRoute(post.id)">
        {{ post.title }}
      </NuxtLink>
    </li>
  </ul>
  <div v-else>No data</div>
</template>

<style scoped></style>
