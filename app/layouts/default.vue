<script setup lang="ts">
const { data: navigation } = await useAsyncData('site-navigation', () =>
  queryCollectionNavigation('pages'),
)

const route = useRoute()

type NavigationLink = {
  path?: string
  title?: string
  navigation?: {
    title?: string
  }
  children?: NavigationLink[]
}

const navItems = computed<NavigationLink[]>(() => {
  const items = (navigation.value as NavigationLink[] | undefined) || []
  const root = items.find(item => item?.path === '/pages')
  if (root?.children?.length) {
    return root.children
  }
  return items
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-bam-paars/20 via-white to-bam-lichtblauw/10">
    <header class="sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NuxtLink
          to="/"
          class="font-display text-2xl font-semibold uppercase tracking-[0.4em] text-bam-primary"
        >
          BAM! 2026
        </NuxtLink>
        <nav aria-label="Hoofd navigatie">
          <ul class="flex flex-wrap gap-3 text-sm font-semibold">
            <li
              v-for="item in navItems"
              :key="item?.path"
            >
              <NuxtLink
                :to="item?.path || '#'"
                class="inline-flex items-center rounded-full px-4 py-2 transition"
                :class="route.path === item?.path ? 'bg-bam-roze text-white shadow-lg' : 'text-bam-primary hover:bg-bam-geel/30'"
              >
                {{ item?.navigation?.title || item?.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <slot />
    </div>
  </div>
</template>
