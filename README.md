# Nuxt 3 GitHub Pages Scaffold Guide

This guide provides a ready-to-use scaffold for bootstrapping a Nuxt 3 project that ships with Tailwind CSS, Content, Image, Hints, Icon, ESLint, and DevTools enabled. It also includes the configuration needed to deploy the site to GitHub Pages.

## 1. Ideal Folder Structure
```
my-nuxt-app/
├── .eslintrc.cjs
├── .gitignore
├── app.vue
├── components/
│   └── README.md
├── content/
│   └── index.md
├── middleware/
├── nuxt.config.ts
├── package.json
├── pages/
│   └── index.vue
├── plugins/
├── public/
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── types/
```

## 2. `nuxt.config.ts`
```ts
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  typescript: {
    strict: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/devtools'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts'
  },
  content: {
    documentDriven: true
  },
  image: {
    domains: [],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },
  hints: {
    enabled: true
  },
  icon: {
    provider: 'server'
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  devtools: {
    enabled: true
  },
  router: {
    base: '/<REPO_NAME>/'
  },
  nitro: {
    preset: 'github-pages'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/<REPO_NAME>/favicon.png' }
      ]
    }
  }
})
```

## 3. `package.json` Scripts
```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "lint": "eslint --ext .ts,.js,.vue .",
    "postinstall": "nuxt prepare",
    "deploy": "nuxt build && npx gh-pages -d .output/public"
  }
}
```

## 4. Deploying to GitHub Pages
1. Commit your project and push it to a GitHub repository.
2. Run `npm install gh-pages --save-dev` if you have not already.
3. Update the `router.base` in `nuxt.config.ts` to match your repository name.
4. Run `npm run deploy` to build the project and publish the `.output/public` folder to the `gh-pages` branch.
5. In GitHub, go to **Settings → Pages** and set the source branch to `gh-pages`.
6. Access your site at `https://<USERNAME>.github.io/<REPO_NAME>/` once the deployment completes.

> **Tip:** For continuous deployment, add a GitHub Actions workflow that runs `npm run deploy` on pushes to your main branch.
