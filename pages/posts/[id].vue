<script setup>
const route = useRoute()
const { data: post } = await useFetch(`/api/posts/detail`, {
  params: { id: route.params.id },
})
</script>

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.date }}</p>
    <div v-html="post.content" />
  </div>
</template>
