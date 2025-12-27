// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./types/nuxt.d.ts" />

import { defineNuxtConfig } from 'nuxt/config'

const repoBase = '/bam2026-nuxt/'
const isProd = process.env.NODE_ENV === 'production'
const baseURL = isProd ? repoBase : '/'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/devtools',
  ],
  devtools: { enabled: true },
  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.ico` },
      ],
    },
  },
  css: ['~/assets/css/tailwind.css'],
  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  typescript: {
    strict: true,
  },
  eslint: {
    config: true,
    checker: {
      lintOnStart: true,
    },
  },
  hints: {
    devtools: true,
  },
  icon: {
    mode: 'css',
  },
  image: {
    provider: 'ipx',
    format: ['webp', 'avif', 'png', 'jpg'],
  },
  tailwindcss: {
    exposeConfig: true,
  },
})
