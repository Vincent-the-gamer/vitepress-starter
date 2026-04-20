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
- eslint - 代码与Markdown的检查和格式化。
- `medium-zoom` - 点击图片时放大。
- [UnoCSS](https://unocss.dev/) - 即时按需的原子级CSS引擎
- [VitePress Theme Teek](https://github.com/Kele-Bingtang/vitepress-theme-teek) - 美化你的文档

## 演示

### UnoCSS

<div mt-1>
  <span>这段文本的样式使用</span>
  <span color-violet font-size-18px ml-2 underline>UnoCSS</span>
</div>

```html
<div mt-1>
  <span>这段文本的样式使用</span>
  <span color-violet font-size-18px ml-2 underline>UnoCSS</span>
</div>
```

### Twoslash

```ts twoslash
// 这就是twoslash
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
// @noErrors
import { defineConfig } from "vitepress";

export default defineConfig({
  markdown: {
    codeTransformers: [transformerTwoslash()],
  },
});
```

### medium-zoom

**在这里试用图片放大功能：**

![wow](/imgs/wow.jpg)
