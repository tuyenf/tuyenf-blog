<script setup lang="ts">
import {
  IconFigma,
  IconGithub,
  IconGitlab,
  IconIllustator,
  IconJavascript,
  IconJira,
  IconNuxt,
  IconPhotoshop,
  IconTailwind,
  IconTypescript,
  IconVue,
} from '#components'

import { useElementVisibility } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

useHead({
  title: 'Resume',
})

const softwares = [
  {
    name: 'Figma',
    icon: IconFigma,
  },
  {
    name: 'Photoshop',
    icon: IconPhotoshop,
  },
  {
    name: 'Illustrator',
    icon: IconIllustator,
  },
  {
    name: 'Jira',
    icon: IconJira,
  },
  {
    name: 'GitHub',
    icon: IconGithub,
  },
  {
    name: 'GitLab',
    icon: IconGitlab,
  },
]
const technologies = [
  // {
  //   name: 'HTML5',
  //   icon: IconHtml,
  // },
  // {
  //   name: 'CSS3',
  //   icon: IconCss,
  // },
  {
    name: 'TailwindCSS',
    icon: IconTailwind,
  },
  {
    name: 'TypeScript',
    icon: IconTypescript,
  },
  {
    name: 'Javascript',
    icon: IconJavascript,
  },
  {
    name: 'Nuxt',
    icon: IconNuxt,
  },
  {
    name: 'Vue.js',
    icon: IconVue,
  },
  // {
  //   name: 'Vite.js',
  //   icon: IconVite,
  // },
  // {
  //   name: '',
  //   icon: IconSass,
  // },
  // {
  //   name: 'Bootstrap',
  //   icon: IconBootstrap,
  // },
  // {
  //   name: 'Vuetify',
  //   icon: IconVuetify,
  // },
  // {
  //   name: 'Material UI',
  //   icon: IconMaterialUI,
  // },
]

const i18n = useI18n()
const character = ['Focused', 'Nice', 'Efficient', 'Youthful', 'Upbeat', 'Thorough']

const projects = [
  `const name = 'Webtoon Text Exporter'
const company = 'Ycomm Vietnam'
const teamSize = 8
const technologies = ['Nuxt3', 'TypeScript', 'TailwindCSS', 'Vuetify']`,
  `const name = 'Photoshop extensionr'
const company = 'Ycomm Vietnam'
const teamSize = 4
const technologies = ['Vue', 'Adobe UXP', 'UXP Spectrum', 'CI/CD']`,
  `const name = 'TimebitOTC Crypto Exchange'
const company = 'ePlus'
const teamSize = 4
const technologies = ['Vue3', 'TypeScript', 'Firebase', 'Socket.IO', 'Bootstrap']`,
  `const name = 'MZG Vietnam Ecommerce Site'
const company = 'Le Gia ICT'
const teamSize = 2
const technologies = ['HTML', 'CSS', 'Javascript', 'JQuery', 'PHP']`,
  `const name = 'Bezier Tool'
const company = 'Personal'
const teamSize = 1
const technologies = ['Vue', 'TypeScript', 'TailwindCSS']`,
]
const experiences = [
  {
    company: 'resume_company_1',
    jobTitle: 'VueJS Developer',
    start: 'March 2023',
    end: 'March 2024',
  },
  {
    company: 'resume_company_2',
    jobTitle: 'Front End Developer Developer',
    start: 'April 2022',
    end: 'February 2023',
  },
  {
    company: 'resume_company_3',
    jobTitle: 'Front End Developer (Fresher)',
    start: 'June 2021',
    end: 'March 2022',
  },
]

const technologySection = ref(null)
const technologySectionIsVisible = useElementVisibility(technologySection)

function randomTopPosition(i: number, space: number = 80) {
  return `${technologies.length * 100 - (i + 1) * space + 45}px`
}

const MIN_DELAY_TIME = 2.5
let storeDelayTime = MIN_DELAY_TIME
const animationStop = technologies.length - 1
const TIME_GAP = 0.2

function calcDelayTiming(i: number) {
  const delayTime = i === 0 ? MIN_DELAY_TIME : i === 1 ? MIN_DELAY_TIME + TIME_GAP : Number.parseFloat((storeDelayTime + TIME_GAP).toFixed(1))
  if (i > 1) storeDelayTime += TIME_GAP
  if (i === animationStop) {
    storeDelayTime = MIN_DELAY_TIME
  }
  return `${delayTime}s`
}
</script>

<template>
  <AppHeading :is-hero-section="true">
    <template #title>
      <h1 class="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight md:text-5xl lg:text-7xl">
        Let's get to <br />know <span class="text-primary-600 dark:text-primary-500">each other</span>
      </h1>
    </template>
    <template #subtitle>
      Let me introduce myself, my workflows, my collaborations, <br />
      and the technologies I like to use to bring my projects to life.
    </template>
  </AppHeading>
  <!-- Technical Skills -->
  <section class="mt-16">
    <AppHeading label="Technologies">
      <template #title>
        <h2 class="text-3xl font-semibold mb-3 text-center capitalize">
          Some techs I like to <span class="text-primary-600 dark:text-primary-500">work with</span>
        </h2>
      </template>
    </AppHeading>
    <div
      ref="technologySection"
      class="relative w-full lg:w-1/2 mx-auto scale-[0.75] lg:scale-100"
      :style="{ 'height': `${technologies.length * 100}px`, '--total': `${technologies.length}px`, '--space': 80 }"
    >
      <div
        v-for="(tech, i) in technologies"
        :key="i"
        :style="{ 'top': randomTopPosition(i, 80), '--i': calcDelayTiming(i) }"
        :class="{ 'animation-text': technologySectionIsVisible }"
        class="pe-2 absolute right-0 text-gray-500 dark:text-gray-300 after:content-[''] after:w-4/5 after:ms-3 after:h-px after:border-t-[1px] after:border-dashed after:border-gray-400 dark:after:border-gray-600 after:absolute after:top-1/2 after:-translate-y-1/2"
      >
        {{ tech.name }}
      </div>
      <div
        v-for="(tech, i) in technologies"
        :key="i"
        :style="{ '--i': `${i + 1}px` }"
        :class="{ 'animation-card': technologySectionIsVisible }"
        class="flex justify-center items-center -skew-y-12 -skew-x-12 absolute left-full transform rotate-45 backdrop-blur-xl bg-white/70 w-28 h-28 rounded-2xl shadow-sm shadow-black/30 dark:shadow-white/30 transition-transform"
      >
        <component
          :is="tech.icon"
          :filled="true"
          :font-controlled="false"
          class="w-16 h-16 -rotate-90"
        />
      </div>
    </div>
  </section>
  <section
    class="mt-40"
    data-aos="fade-up"
  >
    <AppHeading>
      <template #title>
        <h2 class="text-3xl font-semibold mb-3 text-center capitalize">Work <span class="text-primary-600 dark:text-primary-500">experience</span></h2>
      </template>
    </AppHeading>
    <div class="flex flex-col gap-y-6 mt-8">
      <div
        v-for="(exp, i) in experiences"
        :key="i"
        class="p-6 flex items-center justify-between border border-black dark:border-white"
      >
        <div class="flex items-center">
          <span class="inline-block w-10 h-10 bg-black dark:bg-white text-white dark:text-black text-center leading-10">{{ i + 1 }}</span>
          <div class="ms-4">
            <span class="block font-medium">{{ exp.jobTitle }}</span>
            <span class="text-gray-600 dark:text-gray-400 text-sm">{{ $t(`${exp.company}`) }}</span>
          </div>
        </div>
        <span>{{ exp.start }} - {{ exp.end }}</span>
      </div>
    </div>
  </section>
  <section class="mt-40">
    <AppHeading label="Technologies">
      <template #title>
        <h2 class="text-3xl font-semibold mb-3 text-center capitalize"><span class="text-primary-600 dark:text-primary-500">Hightlight</span> projects</h2>
      </template>
    </AppHeading>
    <div class="grid grid-cols-2 gap-5">
      <AppCodeBlock
        v-for="(project, i) in projects"
        :key="i"
        :code="project"
        filename="index.html"
        language="typescript"
      />
    </div>
  </section>
</template>

<style scoped>
.circle {
  --size: 50px;
  --bg-color: #ffffff;
  --border-color: transparent;
  place-items: center;
  border-radius: 50%;
  --radius: 12rem;
  width: calc(2 * var(--radius));
  height: calc(2 * var(--radius));
  border-bottom: 2px dashed gray;
  &__icon {
    position: absolute;
    inset: 0;
    margin: auto;
    display: flex;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 2px solid var(--border-color);
    padding-top: 5px;
    justify-content: center;
    background: var(--bg-color);
    font-weight: 700;
    font-size: 3vmin;
    --d: calc(var(--i) / var(--total));
    --r-offset: -0.25turn;
    --r-amount: 0.5turn;
    --r: calc((0.5turn * var(--d)) + var(--r-offset) + 0.285turn);
    --transform: rotate(var(--r)) translate(var(--radius)) rotate(calc(-1 * var(--r)));
    appearance: none;
    transform: var(--transform);
    transition:
      background-color 0.3s ease-out,
      transform 0.3s ease-out;
    cursor: pointer;
    span {
      position: absolute;
    }
  }
}
.animation-text {
  opacity: 0;
  animation: showText 0.6s var(--i) linear forwards;
}
@keyframes showText {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 100%;
  }
}
.animation-card {
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%) rotate(45deg) skew(-12deg, -12deg);
  transition: all 0.5s ease-in-out;
  animation:
    fadeUp 1s linear forwards,
    fadeRight 1.5s 1s linear forwards;
}
@keyframes fadeUp {
  0% {
    top: calc(var(--total) * 100 - var(--i) * 10);
    left: 50%;
    transform: translate(-100%, -50%) rotate(45deg) skew(-12deg, -12deg);
  }
  50% {
    top: calc(var(--total) * 100 - var(--i) * 10);
    left: 50%;
    transform: translate(-100%, -50%) rotate(45deg) skew(-12deg, -12deg);
  }
  100% {
    top: calc((var(--total) * 100 - var(--i) * 10) - 40%);
    left: 50%;
    transform: translate(-100%, -50%) rotate(45deg) skew(-12deg, -12deg);
  }
}
@keyframes fadeRight {
  0% {
    top: calc((var(--total) * 100 - var(--i) * 10) - 40%);
    left: 50%;
    transform: translate(-100%, -50%) rotate(45deg) skew(-12deg, -12deg);
  }
  30% {
    top: calc(var(--total) * 100 - var(--i) * var(--space));
    left: 50%;
    transform: translate(-100%, 0) rotate(45deg) skew(-12deg, -12deg);
  }
  50% {
    top: calc(var(--total) * 100 - var(--i) * var(--space));
    left: 50%;
    transform: translate(-100%, 0) rotate(45deg) skew(-12deg, -12deg);
  }
  100% {
    top: calc(var(--total) * 100 - var(--i) * var(--space));
    left: 100%;
    transform: translate(-100%, 0) rotate(45deg) skew(-12deg, -12deg);
  }
}
</style>
