import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { defineTeekConfig } from 'vitepress-theme-teek/config'
import { enConfig } from './configs/en'
import { zhHansConfig } from './configs/zh_hans'
import { docsConfig } from './docs'
import useBaseUrl from './hooks/useBaseUrl'
import { ImagePlugin } from './plugins/markdown/image'

// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekTheme: true,
  teekHome: false,
  sidebarTrigger: true,
  anchorScroll: true,
  // 右下角回到顶部配置
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: 'progress', // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success('返回顶部成功'), // 回到顶部后的回调
  },
  // 文章默认的作者信息
  author: {
    name: 'Vincent-the-gamer', // 作者名称
    link: 'https://github.com/Vincent-the-gamer', // 点击作者名称后跳转的链接
  },
  // 面包屑配置
  breadcrumb: {
    enabled: true, // 是否启用面包屑
    showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    separator: '/', // 面包屑分隔符
    homeLabel: '首页', // 鼠标悬停首页图标的提示文案
  },
  // 代码块配置
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    langTextTransform: 'lowercase', // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success('复制成功！'), // 复制代码完成后的回调
  },
  themeEnhance: {
    enabled: true,
    position: 'top',
  },
  markdown: {
    config: (md) => {
      md.use(ImagePlugin)
    },
  },
})

const baseUrl = useBaseUrl()

export default defineConfig({
  base: baseUrl,
  extends: teekConfig,
  ...docsConfig,
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh_hans: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
  },
  head: [
    // favicon.ico
    ['link', { rel: 'icon', href: `${baseUrl}/favicon.ico` }],
    // others
    ['link', { rel: 'icon', href: '/logo/logo.png' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      ...enConfig,
    },
    zh_hans: {
      label: '简体中文',
      lang: 'zh_hans',
      link: '/zh_hans/',
      ...zhHansConfig,
    },
  },
  markdown: {
    codeTransformers: [
      transformerTwoslash(),
    ],
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
})
