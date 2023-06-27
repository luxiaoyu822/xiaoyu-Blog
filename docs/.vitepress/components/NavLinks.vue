<template>
  <a v-if="link" :href="link" class="nav-links">
    <article class="box">
      <div class="box-header">
        <template v-if="!noIcon">
          <div v-if="svg" class="icon"></div>
          <div v-else-if="icon && typeof icon === 'string'" class="icon">
            <img
              :src="withBase(icon)"
              :alt="title"
            />
          </div>
        </template>
        <h5
          v-if="title"
          :id="formatTitle"
          class="title"
          :class="{ 'no-icon': noIcon }"
        >
          {{ title }}
        </h5>
      </div>
      <p v-if="desc" class="desc">{{ desc }}</p>
    </article>
  </a>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import type { navLink } from '../types/navLinkTypes'
import { slugify } from '@mdit-vue/shared'
const navLinkData = defineProps<{
  noIcon?: boolean
  icon?: navLink['icon']
  title?: navLink['title']
  desc?: navLink['desc']
  link: navLink['link']
}>()
const formatTitle = computed(() => {
  if (!navLinkData.title) {
    return ''
  }
  return slugify(navLinkData.title)
})
const svg = computed(() => {
  if (typeof navLinkData.icon === 'object') return navLinkData.icon.svg
  return ''
})
</script>
<style lang="scss" scoped>
.nav-links {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;

  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.25s;
  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg-soft-up);
  }

  .box {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
    &.has-badge {
      padding-top: calc(var(--m-nav-box-gap) + 2px);
    }
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--m-nav-box-gap) - 2px);
    border-radius: 6px;
    width: var(--m-nav-icon-box-size);
    height: var(--m-nav-icon-box-size);
    font-size: var(--m-nav-icon-size);
    background-color: var(--vp-c-bg-soft-down);
    transition: background-color 0.25s;
    :deep(svg) {
      width: var(--m-nav-icon-size);
      fill: currentColor;
    }
    :deep(img) {
      border-radius: 4px;
      width: var(--m-nav-icon-size);
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
    &:not(.no-icon) {
      line-height: var(--m-nav-icon-box-size);
    }
  }

  .badge {
    position: absolute;
    top: 2px;
    right: 0;
    transform: scale(0.8);
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

@media (max-width: 960px) {
  .nav-links {
    --m-nav-icon-box-size: 36px;
    --m-nav-icon-size: 20px;
    --m-nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}
</style>
