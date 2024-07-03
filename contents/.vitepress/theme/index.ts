import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import type { EnhanceAppContext } from 'vitepress'
import '@shikijs/vitepress-twoslash/style.css'
import './rainbow.css'
import "./vars.css"

//@ts-ignore
import Layout from "./Layout.vue"

export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app }: EnhanceAppContext) {
        //@ts-ignore
        app.use(TwoslashFloatingVue)
    },
};