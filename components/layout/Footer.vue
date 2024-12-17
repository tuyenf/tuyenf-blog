<script setup lang="ts">
import { IconGithub, IconLinkedin, IconTelegram, IconTwitter } from '#components'

const socials = [
  {
    name: 'Twitter',
    link: 'https://x.com/Ngtuyenf',
    icon: IconTwitter,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/tuyenf',
    icon: IconGithub,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/tuyenf',
    icon: IconLinkedin,
  },
  {
    name: 'Telegram',
    link: 'https://t.me/tuyenf',
    icon: IconTelegram,
  },
]
</script>

<template>
  <footer class="h-10 px-3 md:px-4 border-t border-gray-200 dark:border-gray-700 md:pb-0 shrink-0">
    <div class="h-full flex justify-between items-center">
      <div class="flex items-center justify-between grow">
        <div class="flex items-center">
          <AppLocale />
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 ms-3">&copy; 2024 tuyenf.dev</span>
        </div>
        <ul class="flex justify-center">
          <li
            v-for="(social, index) in socials"
            :key="index"
            class="flex justify-center item-center"
          >
            <a
              data-interaction="fasle"
              target="_blank"
              class="flex justify-center items-center text-primary hover:text-primary transition duration-150 ease-in-out"
              :href="social.link"
              :aria-label="social.name"
            >
              <component
                :is="social.icon"
                :class="[social.name === 'GitHub' ? 'w-[22px] h-[22px]' : 'w-8 h-8']"
                :font-controlled="false"
              />
              <span class="sr-only">{{ social.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
