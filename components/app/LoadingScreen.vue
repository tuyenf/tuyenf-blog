<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const props = defineProps({
  strokeWidth: {
    type: Number,
    default: 0.75,
  },
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 200,
  },
  opacity: {
    type: Number,
    default: 0.75,
  },
})

const svgRef = ref<SVGSVGElement | null>(null)
const cursor = reactive({ x: 0, y: 0 })
const hovered = ref(false)

// Set transition duration for smoother animated
const transitionDuration = props.duration ? props.duration * 1000 : 200

// Reactive gradient position
const maskPosition = ref({ cx: '0%', cy: '0%' })

// Reactive style for stroke animated
const strokeStyle = computed(() => ({
  strokeDashoffset: hovered.value ? '0' : '1000',
  strokeDasharray: '1000',
  transition: '-2s stroke-dashoffset 3s ease-in-out, -2s stroke-dasharray 3s ease-in-out',
}))

function handleMouseEnter() {
  hovered.value = true
}
function handleMouseLeave() {
  hovered.value = false
}

function handleMouseMove(e: MouseEvent) {
  cursor.x = e.clientX
  cursor.y = e.clientY
}

onMounted(() => {
  handleMouseEnter()
  let count = 0
  const setColor = setInterval(() => {
    count += 10
    if (count === 100) {
      handleMouseLeave()
      clearInterval(setColor)
    }
    maskPosition.value = { cx: `${count}%`, cy: `${count}%` }
  }, 80)
})
</script>

<template>
  <div class="loading-screen fixed inset-0 font-helvetica w-screen h-screen flex z-50 bg-white dark:bg-primary-950">
    <div class="noise w-full h-full absolute top-0 left-0" />
    <div class="w-[65%] md:w-[30%] m-auto">
      <svg
        ref="svgRef"
        width="100%"
        height="100%"
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        class="select-none"
        @mousemove="handleMouseMove"
      >
        <defs>
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            <stop
              v-if="hovered"
              offset="0%"
              stop-color="var(--yellow-500)"
            />
            <stop
              v-if="hovered"
              offset="25%"
              stop-color="var(--red-500)"
            />
            <stop
              v-if="hovered"
              offset="50%"
              stop-color="var(--blue-500)"
            />
            <stop
              v-if="hovered"
              offset="75%"
              stop-color="var(--cyan-500)"
            />
            <stop
              v-if="hovered"
              offset="100%"
              stop-color="var(--violet-500)"
            />
          </linearGradient>

          <!-- Radial Gradient -->
          <radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="50%"
            :cx="maskPosition.cx"
            :cy="maskPosition.cy"
            :style="{
              transition: `cx ${transitionDuration}ms ease-out, cy ${transitionDuration}ms ease-out`,
            }"
          >
            <stop
              offset="0%"
              stop-color="white"
            />
            <stop
              offset="100%"
              stop-color="black"
            />
          </radialGradient>

          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>

        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          :stroke-width="strokeWidth"
          :style="{ opacity: hovered ? opacity : 0 }"
          class="fill-transparent stroke-neutral-300 text-7xl font-bold dark:stroke-neutral-600"
        >
          {{ text }}
        </text>

        <!-- Animated Text Stroke -->
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          :stroke-width="strokeWidth"
          :style="strokeStyle"
          class="fill-transparent stroke-neutral-300 text-7xl font-bold dark:stroke-neutral-600"
        >
          {{ text }}
        </text>

        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          stroke="url(#textGradient)"
          :stroke-width="strokeWidth"
          mask="url(#textMask)"
          class="fill-transparent text-7xl font-bold"
        >
          {{ text }}
        </text>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.select-none {
  user-select: none;
}
</style>
