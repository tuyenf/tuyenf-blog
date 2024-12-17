<script setup lang="ts">
const canPlaySound = ref<boolean>(false)

function playSound() {
  const interactSound = document.getElementById('interactSound')
  if (!interactSound) return
  interactSound.play()
}
function toggleSoundState() {
  const backgroundSound = document.getElementById('backgroundSound')
  if (!canPlaySound.value) {
    canPlaySound.value = true
    document.querySelectorAll('*[data-interaction="false"]').forEach((link) => {
      link.setAttribute('data-interaction', true)
      link.addEventListener('click', playSound)
    })
    if (!backgroundSound) return
    backgroundSound.play()
    return
  }
  canPlaySound.value = false
  document.querySelectorAll('*[data-interaction="true"]').forEach((link) => {
    link.setAttribute('data-interaction', false)
    link.removeEventListener('click', playSound)
  })
  if (!backgroundSound) return
  backgroundSound.pause()
}
</script>

<template>
  <div
    class="hidden md:block uppercase text-sm cursor-pointer"
    @click="toggleSoundState"
  >
    Sound
    <span class="inline-block ms-1">({{ canPlaySound ? 'on' : 'off' }})</span>
  </div>
</template>

<style scoped></style>
