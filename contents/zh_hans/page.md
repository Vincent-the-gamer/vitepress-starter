---
layout: doc
title: "Page"
lastUpdated: true
---

# 特性

- i18n - 多语言支持.
- 主题切换动画 - [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)。
- taze - 🥦 保持依赖最新🥦 。
- 预配置的主页，边栏，顶部菜单。
- twoslash - 在代码中给出TypeScript编译器的提示。
- eslint - 代码与Markdown的检查和格式化.

```ts twoslash
// 这就是twoslash

import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
// @noErrors
import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    codeTransformers: [
      transformerTwoslash()
    ]
  }
})
```
