<!-- .vitepress/theme/components/NoticeContent.vue -->
<script setup lang="ts" name="NoticeContent">
const namespace = "notice";
</script>

<template>
  <div :class="namespace">
    <p>
      VitePress Starter now using
      <a
        color-red
        underline
        href="https://github.com/Kele-Bingtang/vitepress-theme-teek"
        target="_blank"
        >Teek Theme</a
      >
    </p>
  </div>
</template>

<style scoped>
.notice {
  img {
    width: 100%;
    height: 120px;
    object-fit: contain;
  }
  p {
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
  }
}
</style>
