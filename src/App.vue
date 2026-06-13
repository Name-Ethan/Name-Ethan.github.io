<script setup>
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import {
  BedDouble,
  BookOpen,
  FileText,
  Home,
  MapPinned,
  Search,
  Wifi,
} from 'lucide-vue-next'
import { guidePages } from './data/guide'

const route = useRoute()
const query = ref('')

const icons = {
  BedDouble,
  BookOpen,
  FileText,
  Home,
  MapPinned,
  Wifi,
}

const currentPage = computed(() => {
  return guidePages.find((page) => page.path === route.path) ?? guidePages[0]
})

const searchResults = computed(() => {
  const keyword = query.value.trim().toLowerCase()

  if (!keyword) {
    return []
  }

  return guidePages.flatMap((page) => {
    const pageHit =
      page.name.toLowerCase().includes(keyword) ||
      page.title.toLowerCase().includes(keyword) ||
      page.description.toLowerCase().includes(keyword)

    const sectionHits = page.sections
      .filter((section) => {
        return (
          section.title.toLowerCase().includes(keyword) ||
          section.summary.toLowerCase().includes(keyword)
        )
      })
      .map((section) => ({
        page,
        section,
        label: section.title,
        to: { path: page.path, hash: `#${section.id}` },
      }))

    if (pageHit) {
      return [
        ...sectionHits,
        {
          page,
          section: null,
          label: page.name,
          to: page.path,
        },
      ]
    }

    return sectionHits
  })
})
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar" aria-label="指南导航">
      <RouterLink class="brand" to="/" @click="query = ''">
        <span class="brand-mark">中</span>
        <span>
          <strong>新生生存指北</strong>
          <small>中原工学院</small>
        </span>
      </RouterLink>

      <label class="search-box">
        <Search :size="17" stroke-width="2.1" aria-hidden="true" />
        <input v-model="query" type="search" placeholder="搜索关键词" />
      </label>

      <div v-if="query" class="search-results" aria-live="polite">
        <RouterLink
          v-for="result in searchResults"
          :key="`${result.page.path}-${result.label}`"
          :to="result.to"
          class="search-result"
          @click="query = ''"
        >
          <span>{{ result.label }}</span>
          <small>{{ result.page.name }}</small>
        </RouterLink>
        <p v-if="!searchResults.length" class="empty-result">没有找到对应内容</p>
      </div>

      <nav v-else class="primary-nav">
        <div v-for="page in guidePages" :key="page.path" class="nav-group">
          <RouterLink class="nav-link" :to="page.path">
            <component :is="icons[page.icon]" :size="18" stroke-width="2" aria-hidden="true" />
            <span>{{ page.name }}</span>
          </RouterLink>

          <div v-if="currentPage.path === page.path" class="section-nav">
            <RouterLink
              v-for="section in page.sections"
              :key="section.id"
              :to="{ path: page.path, hash: `#${section.id}` }"
              class="section-link"
            >
              {{ section.title }}
            </RouterLink>
          </div>
        </div>
      </nav>

      <footer class="sidebar-footer">
        <span>新生群：781245651</span>
        <a href="mailto:ethan_hzq@163.com">ethan_hzq@163.com</a>
      </footer>
    </aside>

    <div class="main-column">
      <header class="mobile-nav" aria-label="移动端导航">
        <RouterLink
          v-for="page in guidePages"
          :key="page.path"
          :to="page.path"
          class="mobile-nav-link"
        >
          {{ page.name }}
        </RouterLink>
      </header>

      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>
