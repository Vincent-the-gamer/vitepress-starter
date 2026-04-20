import type { EnhanceAppContext } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import Teek, { teekConfigContext, TkNotice } from 'vitepress-theme-teek'
import { h, provide } from 'vue'
import NoticeContent from '../components/NoticeContent.vue'

import 'vitepress-theme-teek/index.css'
import '@shikijs/vitepress-twoslash/style.css'
import 'virtual:uno.css'
import 'vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css'
import 'vitepress-theme-teek/theme-chalk/tk-sidebar.css'
import 'vitepress-theme-teek/theme-chalk/tk-aside.css'
import 'vitepress-theme-teek/theme-chalk/tk-nav.css'
import 'vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css'
import 'vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css'
import 'vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css'
import 'vitepress-theme-teek/theme-chalk/tk-banner-full-img-scale.css'
import 'vitepress-theme-teek/theme-chalk/tk-fade-up-animation.css'
import 'vitepress-theme-teek/theme-chalk/tk-home-card-hover.css'
import 'vitepress-theme-teek/theme-chalk/tk-notice.css'
import './code-fix.css'

provide(teekConfigContext, {
  // 公告配置
  notice: {
    enabled: true, // 是否启用公告功能
    title: 'Notice', // 公告标题，支持函数式：需要和国际化搭配使用，根据不同语言环境返回不同标题
    initOpen: true,
    duration: 3000, // 弹框定时自动关闭，0 不自动消失
    mobileMinify: false, // 移动端自动最小化
    reopen: true,
    useStorage: false, // 是是否使用 localStorage 存储公告状态，如：当打开公告弹框后，下次进来则自动打开弹框
    twinkle: true, // 公告图标是否打开闪烁提示
    position: 'top', // 公告弹框出现位置
  },
})

export default {
  extends: Teek,
  Layout: () =>
    h('div', null, [
      h(
        TkNotice,
        {},
        {
          'teek-notice-content': () => h(NoticeContent),
        },
      ),
      h(Teek.Layout),
    ]),
  enhanceApp(ctx: EnhanceAppContext) {
    const { app, router, siteData } = ctx
    app.use(TwoslashFloatingVue)
  },
}
