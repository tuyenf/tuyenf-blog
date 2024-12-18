<script setup lang="ts">
useHead({
  title: 'Resume',
})
</script>

<template>
  <AppHeading>
    <template #title> Let's get to <br />know <span class="text-primary-600 dark:text-primary-500">each other</span> </template>
    <template #subtitle> who love coding, writing and cooking. </template>
    <section class="flex items-center justify-between gap-x-10">
      <div class="grow">
        <h2 class="mb-4 text-4xl font-semibold">About me</h2>
        <p>Hello! I'm Ahmad, a designer and frontend developer that enjoys being at the intersection of design and code.</p>
        <p class="mt-3">
          I work with businesses to design and build beautiful websites and apps with a focus on responsive design, layouts, modern CSS, and bug-free user
          interfaces.
        </p>
      </div>
      <div class="flex shrink-0">
        <div
          class="circle m-auto relative"
          :style="{ '--total': character.length }"
        >
          <img
            class="w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/assets/media/images/profile.png"
            alt="tuyenf.dev"
          />
          <div
            v-for="(word, i) in character"
            :key="i"
            class="circle__icon flex flex-col items-center"
            :style="{ '--i': i }"
          >
            {{ word.charAt(0) }}
            <span class="text-xs font-normal dark:text-white absolute -bottom-5">{{ word }}</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Technical Skills -->
    <section class="mt-8 pt-5">
      <h2 class="text-4xl font-medium mb-3 text-center">
        Some of the techs I like to <br />
        work with
      </h2>
    </section>
    <section data-aos="fade-up">
      <h2 class="text-4xl font-medium mb-3">
        {{ $t('resume_title_education') }}
      </h2>
      <div class="flex flex-col gap-x-24 mt-8">
        <div class="flex items-center mb-6">
          <div class="shrink-0 mr-5 flex justify-center items-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-950">
            <svg
              class="w-5 h-5 text-primary lg:w-6 lg:h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
          <div class="grow">
            <h3 class="mb-2 font-bold dark:text-white">
              {{ $t('resume_education_major') }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              {{ $t('resume_education_school_1') }}
            </p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="shrink-0 mr-5 flex justify-center items-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-950">
            <svg
              class="w-5 h-5 text-primary lg:w-6 lg:h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
              />
            </svg>
          </div>
          <div class="grow">
            <h3 class="mb-2 font-bold dark:text-white">
              {{ $t('resume_education_course') }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              {{ $t('resume_education_school_2') }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Work Experience -->
    <section
      data-aos="fade-up"
      class="mt-8 pt-5"
    >
      <h2 class="text-4xl font-medium mb-3">
        {{ $t('resume_title_experience') }}
      </h2>
      <div class="mt-6">
        <div class="pl-6">
          <ol class="relative border-s border-stone-200 dark:border-stone-700">
            <li class="mb-10 ms-12">
              <span
                class="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 border border-stone-200 dark:border-stone-800 bg-stone-200 dark:bg-stone-800"
              >
                <svg
                  class="w-8 h-8 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  viewBox="0 0 80 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.2449 12.5341C27.1023 12.1679 25.9981 11.8383 24.9323 11.5453C24.3961 11.3973 23.8648 11.2588 23.3486 11.1298C-6.64092 3.67363 -5.81391 27.0165 16.177 44.2454C16.177 44.2454 2.88119 27.8285 9.48649 22.4024C11.5413 20.7163 15.9315 20.1383 21.7099 20.764C22.6654 20.8691 23.6594 21.0045 24.6918 21.17C33.8179 22.6746 48.3114 28.1247 59.8181 35.1557L62.4441 32.0653C54.1098 25.0247 41.235 16.7422 28.2449 12.5341Z"
                    fill="#EE9021"
                  />
                  <path
                    d="M0.00408467 63.8673C-0.241484 64.0441 10.6137 64.0345 24.972 60.2754C24.571 59.2675 24.1901 58.2549 23.8343 57.2471C16.2311 60.4433 8.21846 62.6693 0.00408467 63.8673Z"
                    fill="#F5B41C"
                  />
                  <path
                    d="M67.8572 37.2725C67.1856 37.817 66.5492 38.5621 65.8125 39.1162C71.056 43.2447 75.8101 47.9072 79.9902 53.0207C80.2408 53.1353 76.0461 45.8893 67.8572 37.2725Z"
                    fill="#EE9021"
                  />
                  <path
                    d="M43.8302 14.8848C43.8302 14.8848 65.3801 11.8612 67.0941 20.0052C67.6404 22.5702 65.9665 26.5729 62.4734 31.1488C61.7016 32.1662 60.8346 33.2075 59.8875 34.2727C54.0239 40.8261 42.5372 48.5593 31.1709 54.3675C31.8725 55.7288 32.3737 56.7988 33.1004 58.0407C43.3391 54.5395 57.0909 48.8745 66.9487 40.4248C67.4148 40.0236 67.866 39.6272 68.307 39.2307C68.9752 38.6193 69.6233 38.0127 70.2514 37.4109C92.3576 15.8783 70.492 4.9735 43.8302 14.8848Z"
                    fill="#F5B41C"
                  />
                  <path
                    d="M26.8504 0.00584898C26.7902 -0.180435 25.0612 4.09456 23.5176 11.1781C24.0187 11.3071 24.5599 11.4408 25.1012 11.5889C25.4086 7.69463 25.9931 3.82471 26.8504 0.00584898Z"
                    fill="#958257"
                  />
                  <path
                    d="M59.8677 54.0896C59.8677 54.0896 55.257 74.3612 46.6471 73.0381C42.5576 72.4123 37.0397 66.1455 32.5092 56.4683C31.8978 55.1691 31.3081 53.8094 30.7401 52.3892C26.7906 42.3816 24.6094 31.8192 24.2852 21.1316C23.2562 20.9628 22.2639 20.8275 21.3084 20.7256C20.1156 30.4124 19.9702 42.5638 23.1476 55.1548C23.4082 56.1865 23.6888 57.2278 23.9995 58.2691C24.7312 60.7528 25.5982 63.2462 26.6206 65.7348C40.0467 98.4635 60.1984 82.6389 59.8677 54.0896Z"
                    fill="#94805A"
                  />
                </svg>
              </span>
              <time class="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
                {{ $t('march') }} 2023
                <span class="text-stone-400 dark:text-stone-600">·</span>
                {{ $t('march') }} 2024
              </time>
              <h3 class="text-base font-semibold text-stone-900 dark:text-white">VueJS Developer</h3>
              <p class="mb-4 text-sm font-normal text-slate-500 dark:text-slate-400">
                {{ $t('resume_company_1') }}
              </p>
            </li>
            <li class="mb-10 ms-12">
              <span
                class="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 border border-stone-200 dark:border-stone-800 bg-stone-200 dark:bg-stone-800 overflow-hidden"
              >
                <span class="text-green-500 font-extrabold uppercase">E</span>
              </span>
              <time class="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
                {{ $t('april') }} 2022
                <span class="text-stone-400 dark:text-stone-600">·</span>
                {{ $t('february') }} 2023
              </time>
              <h3 class="text-base font-semibold text-stone-900 dark:text-white">Front End Developer</h3>
              <p class="mb-4 text-sm font-normal text-slate-500 dark:text-slate-400">{{ $t('resume_company_2') }},</p>
            </li>
            <li class="mb-10 ms-12">
              <span
                class="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 border border-stone-200 dark:border-stone-800 bg-stone-200 dark:bg-stone-800"
              >
                <span class="text-pink-700 font-extrabold uppercase">L</span>
              </span>
              <time class="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
                {{ $t('june') }} 2021
                <span class="text-stone-400 dark:text-stone-600">·</span>
                {{ $t('march') }} 2022
              </time>
              <h3 class="text-base font-semibold text-stone-900 dark:text-white">Front End Developer (Fresher)</h3>
              <p class="mb-4 text-sm font-normal text-slate-500 dark:text-slate-400">
                {{ $t('resume_company_3') }}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
    <!-- Projects -->
    <section
      data-aos="fade-"
      class="mt-8 pt-5"
    >
      <h2 class="text-4xl font-medium mb-3">
        {{ $t('resume_title_project') }}
      </h2>
      <div class="pb-5 flex flex-col mt-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3">
          <div class="p-6 rounded-lg border border-stone-600">
            <div class="flex justify-between items-center mb-5 text-slate-500">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                Ycomm Vietnam
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400">Team Size: 8</span>
            </div>
            <h3 class="text-xl font-bold tracking-tight text-stone-900 dark:text-white">
              <a
                href="https://autotranslator.ycomm.work/login"
                target="_blank"
              >
                Webtoon Text Exporter
              </a>
            </h3>
            <div class="text-sm mt-2">
              Nuxt3
              <span class="text-stone-400 dark:text-stone-600">·</span>
              TypeScript
              <span class="text-stone-400 dark:text-stone-600">·</span>
              WebWorker
              <span class="text-stone-400 dark:text-stone-600">·</span>
              CORS
              <span class="text-stone-400 dark:text-stone-600">·</span>
              TailwindCSS
              <span class="text-stone-400 dark:text-stone-600">·</span>
              Vuetify
            </div>
          </div>
          <div class="p-6 rounded-lg border border-stone-600">
            <div class="flex justify-between items-center mb-5 text-slate-500">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                Ycomm Vietnam
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400">Team Size: 4</span>
            </div>
            <h3 class="text-xl font-bold tracking-tight text-stone-900 dark:text-white">Photoshop extension</h3>
            <div class="text-sm mt-2">
              Vue3
              <span class="text-stone-400 dark:text-stone-600">·</span>
              Adobe UXP
              <span class="text-stone-400 dark:text-stone-600">·</span>
              UXP Spectrum
              <span class="text-stone-400 dark:text-stone-600">·</span>
              CI/CD
            </div>
          </div>
          <div class="p-6 rounded-lg border border-stone-600">
            <div class="flex justify-between items-center mb-5 text-slate-500">
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"> ePlus </span>
              <span class="text-xs text-slate-500 dark:text-slate-400">Team Size: 4</span>
            </div>
            <h3 class="text-xl font-bold tracking-tight text-stone-900 dark:text-white">
              <a
                href="https://p2p.timebitotc.com"
                target="_blank"
              >
                TimebitOTC Crypto Exchange
              </a>
            </h3>
            <div class="text-sm mt-2">
              Vue3
              <span class="text-stone-400 dark:text-stone-600">·</span>
              TypeScript
              <span class="text-stone-400 dark:text-stone-600">·</span>
              Firebase
              <span class="text-stone-400 dark:text-stone-600">·</span>
              Socket.IO
              <span class="text-stone-400 dark:text-stone-600">·</span>
              Bootstrap
            </div>
          </div>
          <div class="p-6 rounded-lg border border-stone-600">
            <div class="flex justify-between items-center mb-5 text-slate-500">
              <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"> Le Gia ICT </span>
              <span class="text-xs text-slate-500 dark:text-slate-400">Team Size: 2</span>
            </div>
            <h3 class="text-xl font-bold tracking-tight text-stone-900 dark:text-white">MZG Vietnam Ecommerce Site</h3>
            <div class="text-sm mt-2">
              HTML
              <span class="text-stone-400 dark:text-stone-600">·</span>
              CSS
              <span class="text-stone-400 dark:text-stone-600">·</span>
              Javascript
              <span class="text-stone-400 dark:text-stone-600">·</span>
              JQuery
              <span class="text-stone-400 dark:text-stone-600">·</span>
              PHP
            </div>
          </div>
          <div class="p-6 rounded-lg border border-stone-600">
            <div class="flex justify-between items-center mb-5 text-slate-500">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"> Personal </span>
            </div>
            <h3 class="text-xl font-bold tracking-tight text-stone-900 dark:text-white">
              <a
                href="https://pentool.vercel.app/app/bezier"
                target="_blank"
              >
                Bezier Tool
              </a>
            </h3>
            <div class="text-sm mt-2">
              Vue3
              <span class="text-stone-400 dark:text-stone-600">·</span>
              Typescript
              <span class="text-stone-400 dark:text-stone-600">·</span>
              TailwindCSS
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppHeading>
</template>

<style scoped></style>
