import type { EnhanceAppContext } from 'vitepress'
import { VPCarbon } from 'vitepress-carbon'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { useMediumZoomProvider } from '../hooks'
import '@shikijs/vitepress-twoslash/style.css'
import Layout from './Layout.vue'
import './medium-zoom.css'
import 'virtual:uno.css'

export default {
  ...VPCarbon,
  Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    VPCarbon.enhanceApp?.(ctx)
    const { app, router } = ctx
    app.use(TwoslashFloatingVue)
    useMediumZoomProvider(app, router)
  },
}
