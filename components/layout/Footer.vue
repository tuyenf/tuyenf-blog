<script setup lang="ts"></script>

<template>
  <footer class="h-10 px-3 md:px-4 border-t border-gray-200 dark:border-gray-700 md:pb-0 shrink-0">
    <div class="h-full flex justify-between items-center">
      <div class="flex items-center justify-between grow">
        <div class="flex items-center">
          <AppLocale />
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 ms-3">&copy; 2024 tuyenf.dev</span>
        </div>
        <ul class="flex justify-center">
          <li>
            <a
              data-interaction="fasle"
              target="_blank"
              class="flex justify-center items-center text-primary hover:text-primary transition duration-150 ease-in-out"
              href="https://x.com/Ngtuyenf"
              aria-label="Twitter"
            >
              <IconTwitter
                class="w-8 h-8 fill-current"
                :font-controlled="false"
              />
              <span class="sr-only">Twitter</span>
            </a>
          </li>
          <li>
            <a
              data-interaction="false"
              target="_blank"
              class="flex justify-center items-center text-primary hover:text-primary transition duration-150 ease-in-out"
              href="https://www.linkedin.com/in/tuyenf"
              aria-label="YouTube"
            >
              <IconLinkedin
                class="w-8 h-8 fill-current"
                :font-controlled="false"
              />
              <span class="sr-only">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              data-interaction="false"
              target="_blank"
              class="flex justify-center items-center text-primary hover:text-primary transition duration-150 ease-in-out"
              href="https://github.com/tuyenf"
              aria-label="Github"
            >
              <IconGithub
                class="w-8 h-8 fill-current"
                :font-controlled="false"
              />
              <span class="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a
              data-interaction="false"
              target="_blank"
              class="flex justify-center items-center text-primary hover:text-primary transition duration-150 ease-in-out"
              href="https://t.me/tuyenf"
              aria-label="Telegram"
            >
              <IconTelegram
                class="w-8 h-8 fill-current"
                :font-controlled="false"
              />
              <span class="sr-only">Telegram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
