<script setup>
import { computed, nextTick, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import heroImage from '../assets/campus-hero.png'
import { copyText } from '../utils/clipboard'

const props = defineProps({
  page: {
    type: Object,
    required: true,
  },
})

const route = useRoute()

const displaySections = computed(() => {
  const sections = props.page.sections ?? []

  if (!props.page.stages) {
    return sections
  }

  const stageSection = {
    id: 'quick-start',
    title: '快速开始',
    summary: '按入学前、入学时、入学后三个阶段快速定位重点内容。',
    stages: props.page.stages,
  }
  const prefaceIndex = sections.findIndex((section) => section.id === 'preface')
  const insertAt = prefaceIndex >= 0 ? prefaceIndex + 1 : 1

  return [
    ...sections.slice(0, insertAt),
    stageSection,
    ...sections.slice(insertAt),
  ]
})

const breadcrumbLabel = computed(() => (props.page.home ? '首页' : props.page.name))

function scrollToHash() {
  const rawRouteHash = route.hash ? route.hash.slice(1) : ''
  const rawLocationHash = window.location.hash
  const nestedHashIndex = rawLocationHash.indexOf('#', 1)
  const rawNestedHash = nestedHashIndex >= 0 ? rawLocationHash.slice(nestedHashIndex + 1) : ''
  const targetId = decodeURIComponent(rawRouteHash || rawNestedHash)

  if (!targetId) {
    return
  }

  requestAnimationFrame(() => {
    const target = document.getElementById(targetId)

    if (!target) {
      return
    }

    const topbarHeight = document.querySelector('.topbar')?.getBoundingClientRect().height ?? 0
    const isNarrowLayout = window.matchMedia('(max-width: 900px)').matches
    const sidebarRect = document.querySelector('.docs-sidebar')?.getBoundingClientRect()
    const sidebarOffset =
      isNarrowLayout && sidebarRect ? Math.max(sidebarRect.bottom - topbarHeight, 0) : 0
    const gap = isNarrowLayout ? 14 : 20
    const targetTop = target.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: Math.max(targetTop - topbarHeight - sidebarOffset - gap, 0),
      behavior: 'smooth',
    })
  })
}

function handleArticleClick(event) {
  const trigger = event.target instanceof Element ? event.target.closest('[data-copy]') : null

  if (!trigger) {
    return
  }

  const value = trigger.getAttribute('data-copy')
  const label = trigger.getAttribute('data-copy-label') || '内容'

  if (value) {
    copyText(value, label)
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
    <div class="docs-page-grid">
      <div class="doc-main">
        <el-breadcrumb class="breadcrumbs" separator="/">
          <el-breadcrumb-item>
            <RouterLink to="/">新生指南</RouterLink>
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ breadcrumbLabel }}</el-breadcrumb-item>
        </el-breadcrumb>

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

        <div class="article-stack" @click="handleArticleClick">
          <section
            v-for="section in displaySections"
            :key="section.id"
            class="doc-section"
          >
            <h2 :id="section.id">{{ section.title }}</h2>
            <p class="section-summary">{{ section.summary }}</p>
            <div v-if="section.stages" class="stage-timeline stage-timeline-embedded" aria-label="快速开始">
              <div v-for="(stage, index) in section.stages" :key="stage.title" class="stage-item">
                <div class="stage-marker">{{ index + 1 }}</div>
                <div class="stage-content">
                  <div class="stage-heading">
                    <h3>{{ stage.title }}</h3>
                    <p>{{ stage.description }}</p>
                  </div>
                  <div class="stage-links">
                    <RouterLink
                      v-for="item in stage.items"
                      :key="item.title"
                      :to="item.to"
                      class="stage-link"
                    >
                      <strong>{{ item.title }}</strong>
                      <span>{{ item.text }}</span>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="prose" v-html="section.html"></div>
          </section>
        </div>
      </div>

      <aside class="doc-outline" aria-label="本文目录">
        <div class="outline-panel">
          <p>在本文中</p>
          <RouterLink
            v-for="section in displaySections"
            :key="section.id"
            :to="{ path: props.page.path, hash: `#${section.id}` }"
          >
            {{ section.title }}
          </RouterLink>
        </div>
      </aside>
    </div>
  </article>
</template>
