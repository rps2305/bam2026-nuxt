<script setup lang="ts">
import { withBase } from 'ufo'

const repoName = 'bam2026-nuxt'
const runtimeConfig = useRuntimeConfig()

const { data: page } = await useAsyncData('home-content', () =>
  queryCollection('pages').path('/pages').first(),
)

const heroGraphic = computed(() =>
  withBase('/nuxt-halo.svg', runtimeConfig.app.baseURL || '/'),
)

const githubPagesUrl = computed(
  () => `https://<github-username>.github.io/${repoName}/`,
)
</script>

<template>
  <main class="bg-slate-50 text-slate-900">
    <section
      class="relative isolate mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-20 sm:py-24 lg:flex-row lg:items-center lg:gap-16 lg:py-32"
    >
      <div class="flex-1 space-y-6">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">
          Nuxt 4 + GitHub Pages
        </p>
        <h1 class="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          Deploy a content-driven Nuxt site to GitHub Pages in minutes.
        </h1>
        <p class="text-lg text-slate-600">
          This starter ships with Tailwind CSS, Content, Image, Hints, Icon, DevTools,
          and ESLint ready to go. Build locally, run <code>npm run deploy</code>, and
          we will push a static build to your <span class="font-mono">gh-pages</span> branch.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink
            class="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
            to="/"
          >
            <Icon name="solar:rocket-bold" />
            Launch locally
          </NuxtLink>
          <a
            :href="githubPagesUrl"
            rel="noreferrer"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            <Icon
              name="logos:github-icon"
              class="text-xl"
            />
            View GitHub Pages preview
          </a>
        </div>
        <dl class="grid gap-4 text-sm text-slate-500 sm:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 bg-white/60 p-4 backdrop-blur">
            <dt class="font-semibold text-slate-700">
              Modules
            </dt>
            <dd>@nuxt/content · @nuxt/image · @nuxt/icon · @nuxt/hints</dd>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white/60 p-4 backdrop-blur">
            <dt class="font-semibold text-slate-700">
              Tooling
            </dt>
            <dd>TypeScript · Tailwind CSS · ESLint · gh-pages deploy</dd>
          </div>
        </dl>
      </div>
      <div class="flex-1">
        <div
          class="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl shadow-emerald-200/40"
        >
          <NuxtImg
            :src="heroGraphic"
            :alt="`Nuxt starter hero for ${repoName}`"
            width="900"
            height="900"
            format="png"
            class="w-full"
            loading="lazy"
          />
          <div
            class="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-3 border-t border-white/10 bg-slate-900/80 px-6 py-4 text-sm text-slate-200 backdrop-blur"
          >
            <Icon
              name="lets-icons:rocket-duotone"
              class="text-lg text-brand"
            />
            Base path aware assets through
            <code class="rounded bg-slate-800 px-2 py-0.5 text-emerald-200">
              withBase()
            </code>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-6 pb-24">
      <div
        class="rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-xl shadow-slate-200/60 backdrop-blur"
      >
        <ContentRenderer
          v-if="page"
          :value="page"
          class="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-a:text-brand hover:prose-a:text-emerald-500"
        />
        <p
          v-else
          class="text-center text-slate-500"
        >
          Markdown content not found. Add files to the
          <code class="rounded bg-slate-100 px-2 py-0.5">/content</code> directory.
        </p>
      </div>
    </section>
  </main>
</template>
