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
- twoslash - Add a hint of TypeScript compiler in code.
- eslint - check and format codes and markdowns.
- `medium-zoom` - images zoom on click.

```ts twoslash
// This is twoslash

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

## Demo

**Try image zoom here:**

![wow](/imgs/wow.jpg)
