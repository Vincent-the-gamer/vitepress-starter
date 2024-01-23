import { defineConfig } from 'vitepress'
import { docsConfig } from "./docs"
import { enConfig } from "./configs/en"
import { zhHansConfig } from './configs/zh_hans'

export default defineConfig({
  ...docsConfig,
  head: [
    ['link', { rel: 'icon', href: '/logo/logo.png' }],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
      ...enConfig
    },
    zh_hans: {
      label: "简体中文",
      lang: "zh_hans",
      link: "/zh_hans/",
      ...zhHansConfig
    }
  }
})
