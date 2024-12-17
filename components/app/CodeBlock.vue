<script setup>
import { useNuxtApp } from '#app'
import { useTemplateRef } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'javascript',
  },
  filename: {
    type: String,
    default: 'index.js',
  },
})

const { $prism } = useNuxtApp()
const colorMode = useColorMode()
const highlightedCode = $prism.highlight(props.code, $prism.languages[props.language], props.language)
const codeElement = useTemplateRef('code')

onMounted(() => {
  highlightCode()
})

function highlightCode() {
  if (!codeElement.value) return
  $prism.highlightElement(codeElement.value)
}

function loadPrismTheme(theme) {
  const existingLink = document.getElementById('prism-theme')

  if (existingLink) {
    existingLink.remove()
  }

  const link = document.createElement('link')
  link.id = 'prism-theme'
  link.rel = 'stylesheet'
  link.href =
    theme === THEMES.LIGHT
      ? 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css'
      : 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css'
  document.head.appendChild(link)
}

watch(
  () => colorMode.value,
  (newMode) => {
    loadPrismTheme(newMode)
  },
  { immediate: true },
)
</script>

<template>
  <div class="relative rounded-md overflow-hidden bg-zinc-700 dark:bg-stone-200 text-white dark:text-black">
    <pre
      :data-label="props.filename"
      class="mt-0 line-numbers"
      :data-start="1"
    >
      <code ref="code" :class="`language-${language}`" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<style scoped lang="scss">
:deep(pre[class*='language-']) {
  margin: 0;
  flex-grow: 1;
}
:deep(div.code-toolbar) {
  display: flex;
  flex-direction: column-reverse;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.5;
  height: 100%;
}
:deep(div.code-toolbar > .toolbar) {
  opacity: 1;
  position: relative;
  top: 0;
  right: 0;
  background-color: inherit;
  padding: 10px 12px;
}

:deep(.toolbar-item) {
  font-size: 0.9rem;
  font-weight: 600;
}
:deep(div.code-toolbar > .toolbar > .toolbar-item > span) {
  background-color: transparent;
  box-shadow: none;
  font-size: 13px;
  line-height: 21px;
  font-weight: 400;
  color: inherit;
  display: inline-block;
  padding: 0;
}
</style>
