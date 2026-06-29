<script setup>
import { computed, nextTick, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import heroImage from '../assets/campus-hero.webp'
import UpdateTimeline from './UpdateTimeline.vue'
import { activeSectionId, useScrollSpy } from '../composables/useScrollSpy'

const props = defineProps({
  page: {
    type: Object,
    required: true,
  },
})

const route = useRoute()

const displaySections = computed(() => props.page.sections ?? [])

const sectionIds = computed(() => displaySections.value.map((s) => s.id))

useScrollSpy(sectionIds)

const breadcrumbLabel = computed(() => (props.page.home ? '首页' : props.page.name))

function sectionTo(section, index) {
  if (index === 0 && !props.page.home) {
    return props.page.path
  }

  return { path: props.page.path, hash: `#${section.id}` }
}

function handleOutlineNavigation(index) {
  if (index === 0 && !props.page.home) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
}

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

        <div class="article-stack">
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
            <div v-else-if="section.updates" class="prose">
              <UpdateTimeline />
            </div>
            <div v-else-if="section.component" class="prose">
              <component :is="section.component" />
            </div>
          </section>
        </div>
      </div>

      <aside class="doc-outline" aria-label="本文目录">
        <div class="outline-panel">
          <p>在本文中</p>
          <RouterLink
            v-for="(section, sectionIndex) in displaySections"
            :key="section.id"
            :to="sectionTo(section, sectionIndex)"
            :class="{ 'is-active-section': activeSectionId === section.id }"
            @click="handleOutlineNavigation(sectionIndex)"
          >
            {{ section.title }}
          </RouterLink>
        </div>
      </aside>
    </div>
  </article>
</template>
