<script setup lang="ts">
const newPost = ref({ title: '', content: '', date: '' })

async function addPost() {
  try {
    await $fetch('/api/posts/create', {
      method: 'POST',
      body: newPost.value,
    })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <form @submit.prevent="addPost">
    <input
      v-model="newPost.title"
      placeholder="Title"
    />
    <textarea
      v-model="newPost.content"
      placeholder="Content"
    />
    <input
      v-model="newPost.date"
      type="date"
    />
    <button type="submit">Add Post</button>
  </form>
</template>
