<script setup lang="ts">
const props = defineProps({
  label: String,
  isHeroSection: Boolean,
})
const isFirstLoad = inject('isFirstLoad')
const delayTiming = ref<string>('0s')
watch(
  () => isFirstLoad,
  (val) => {
    if (!val) delayTiming.value = '0s'
    else delayTiming.value = '1.4s'
  },
  { deep: true },
)
</script>

<template>
  <section
    :class="{ 'min-h-[calc(100vh-6.5rem)]': props.isHeroSection }"
    class="heading w-full relative px-2 md:px-0 flex"
  >
    <div class="text-center m-auto">
      <p
        v-if="props.label"
        class="text-gray-500 dark:text-gray-300 uppercase mb-4 font-light tracking-widest"
      >
        {{ props.label }}
      </p>
      <slot name="title" />
      <p class="text-md font-normal dark:text-primary-200">
        <slot name="subtitle" />
      </p>
    </div>
  </section>
</template>

<style scoped>
.heading {
  transform: scale(0.5);
  animation: bounce-in 0.5s v-bind(delayTiming) forwards;
}
</style>
