---
layout: doc
title: "Page"
lastUpdated: true
---

# Features

- i18n - multi-language support.
- Animation on theme changing - [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).
- taze - 🥦 keep your dependencies fresh.🥦
- Pre-configured main page, navbars, sidebars.
- eslint - check and format codes and markdowns.
- `medium-zoom` - images zoom on click.
- [UnoCSS](https://unocss.dev/) - Instant On-demand Atomic CSS Engine

## Demo

### UnoCSS

<div mt-1>
  <span>The text style is using</span>
  <span color-violet font-size-18px ml-2 underline>UnoCSS</span>
</div>

```html
<div mt-1>
  <span>The text style is using</span>
  <span color-violet font-size-18px ml-2 underline>UnoCSS</span>
</div>
```

### Twoslash

```ts twoslash
// This is twoslash
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

**Try image zoom here:**

![wow](/imgs/wow.jpg)
