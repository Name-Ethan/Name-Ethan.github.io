<script setup>
import { nextTick, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import heroImage from '../assets/campus-hero.png'

const props = defineProps({
  page: {
    type: Object,
    required: true,
  },
})

const route = useRoute()

function scrollToHash() {
  const rawRouteHash = route.hash ? route.hash.slice(1) : ''
  const rawLocationHash = window.location.hash
  const nestedHashIndex = rawLocationHash.indexOf('#', 1)
  const rawNestedHash = nestedHashIndex >= 0 ? rawLocationHash.slice(nestedHashIndex + 1) : ''
  const targetId = decodeURIComponent(rawRouteHash || rawNestedHash)

  if (!targetId) {
    return
  }

  const target = document.getElementById(targetId)

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  nextTick(scrollToHash)
})

watch(
  () => [route.path, route.hash],
  () => {
    nextTick(scrollToHash)
  },
)
</script>

<template>
  <article class="guide-page">
    <section v-if="props.page.home" class="hero-section">
      <img :src="heroImage" alt="" class="hero-image" />
      <div class="hero-copy">
        <p class="eyebrow">{{ props.page.eyebrow }}</p>
        <h1>{{ props.page.title }}</h1>
        <p>{{ props.page.description }}</p>
      </div>
    </section>

    <section v-else class="page-heading">
      <p class="eyebrow">{{ props.page.eyebrow }}</p>
      <h1>{{ props.page.title }}</h1>
      <p>{{ props.page.description }}</p>
    </section>

    <section v-if="props.page.cards" class="route-cards" aria-label="快速入口">
      <RouterLink v-for="card in props.page.cards" :key="card.to" :to="card.to" class="route-card">
        <strong>{{ card.title }}</strong>
        <span>{{ card.text }}</span>
      </RouterLink>
    </section>

    <nav class="page-toc" aria-label="本页目录">
      <RouterLink
        v-for="section in props.page.sections"
        :key="section.id"
        :to="{ path: props.page.path, hash: `#${section.id}` }"
      >
        {{ section.title }}
      </RouterLink>
    </nav>

    <div class="article-stack">
      <section
        v-for="section in props.page.sections"
        :id="section.id"
        :key="section.id"
        class="doc-section"
      >
        <div class="section-heading">
          <h2>{{ section.title }}</h2>
          <p>{{ section.summary }}</p>
        </div>
        <div class="prose" v-html="section.html"></div>
      </section>
    </div>
  </article>
</template>
