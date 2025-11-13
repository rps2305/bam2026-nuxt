<script setup lang="ts">
const route = useRoute()

const slugParam = computed(() => {
  const value = route.params.slug
  if (!value) {
    return []
  }
  return Array.isArray(value) ? value : [value]
})

const contentPath = computed(() => {
  const segments = slugParam.value
  if (!segments.length) {
    return null
  }
  return `/${segments.join('/')}`
})

if (!contentPath.value) {
  throw createError({ statusCode: 404, statusMessage: 'Pagina niet gevonden' })
}

const contentKey = computed(() => `content:${contentPath.value}`)

const { data: page } = await useAsyncData(
  contentKey,
  () => queryCollection('pages').path(contentPath.value as string).first(),
  { watch: [contentPath] },
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Pagina niet gevonden' })
}

const pageData = computed(() => page.value!)

useSeoMeta({
  title: pageData.value.title,
  description: pageData.value.description,
})
</script>

<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
    <header class="text-center">
      <p class="text-sm uppercase tracking-[0.5em] text-bam-roze">
        Bam! Content
      </p>
      <h1 class="font-display text-4xl font-semibold text-bam-primary sm:text-5xl">
        {{ pageData.title }}
      </h1>
      <p
        v-if="pageData.description"
        class="mt-3 text-lg text-text-muted"
      >
        {{ pageData.description }}
      </p>
    </header>

    <article class="prose prose-slate max-w-none prose-headings:text-bam-primary prose-a:text-bam-roze">
      <ContentRenderer :value="pageData" />
    </article>
  </main>
</template>
