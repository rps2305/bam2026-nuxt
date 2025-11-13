---
title: Nuxt + GitHub Pages Starter
description: A batteries-included Nuxt 4 starter wired up for GitHub Pages deployments.
navigation: false
---

## Features

- 🔼 **GitHub Pages Ready** — `router.base`, `app.baseURL`, and Nitro's `github-pages` preset keep assets and links rooted under your repository name.
- 📚 **Content Module** — Write Markdown anywhere inside `content/` and render it with `<ContentRenderer>` or document-driven routes.
- 🎨 **Tailwind CSS** — A pre-wired Tailwind pipeline (`tailwind.config.ts`, `assets/css/tailwind.css`) with custom brand colors.
- 🖼️ **Image + Icon Modules** — Use `<NuxtImg>` for optimized media and `<Icon>` for Iconify-powered glyphs right inside your Vue templates.
- 🧑‍🏫 **Nuxt Hints** — Get inline improvement suggestions while you build.
- ✅ **ESLint + TypeScript** — Flat-config ESLint powered by `@nuxt/eslint-config` and strict TypeScript settings baked in.

## Development workflow

1. `npm install`
2. `npm run dev`
3. Add Markdown to `content/`, Vue pages to `pages/`, and components anywhere under `components/`.
4. `npm run lint` (or `npm run lint -- --fix`) to keep quality gates green.

## Deployment workflow

1. `npm run build` to statically prerender your site into `.output/public`.
2. `npm run deploy` to publish `.output/public` to the `gh-pages` branch.
3. In GitHub, point Pages to the `gh-pages` branch and `/` directory.

> Tip: Set the `GITHUB_TOKEN` repo secret to let the `gh-pages` CLI push from CI without extra setup.
