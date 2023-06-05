<template>
  <h2 v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h2>
  <div class="nav-link">
    <NavLinks v-for="item of navLinkData.item" :noIcon="noIcon" v-bind="item" />
  </div>
</template>

<script lang="ts" setup>
import NavLinks from './NavLinks.vue'
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'
import type { navLink } from '../types/navLinkTypes'
const navLinkData = defineProps<{
  title: string
  noIcon?: boolean
  item: Array<navLink>
}>()
const formatTitle = computed(() => {
  return slugify(navLinkData.title)
})
</script>

<style lang="scss" scoped>
.nav-link {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

@each $media,
  $size
    in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px)
{
  @media (min-width: $media) {
    .nav-link {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .nav-link {
    --m-nav-gap: 20px;
  }
}
</style>
