import type { EnhanceAppContext } from 'vitepress'
import { VPCarbon } from 'vitepress-carbon'
import { useMediumZoomProvider } from '../hooks'
import Layout from './Layout.vue'
import './medium-zoom.css'
import 'virtual:uno.css'

export default {
  ...VPCarbon,
  Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    VPCarbon.enhanceApp?.(ctx)
    const { app, router } = ctx
    useMediumZoomProvider(app, router)
  },
}
