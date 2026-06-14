<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import {
  BedDouble,
  BookOpen,
  ChevronDown,
  FileText,
  Home,
  MapPinned,
  Menu,
  Search,
  Wifi,
  X,
} from 'lucide-vue-next'
import { guidePages } from './data/guide'
import { copyText } from './utils/clipboard'

const route = useRoute()
const query = ref('')
const expandedPaths = ref(new Set())
const isMobileNavOpen = ref(false)

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
        label: section.title,
        to: { path: page.path, hash: `#${section.id}` },
      }))

    if (pageHit) {
      return [
        ...sectionHits,
        {
          page,
          label: page.name,
          to: page.path,
        },
      ]
    }

    return sectionHits
  })
})

function closeSearch() {
  query.value = ''
}

function openMobileNav() {
  expandCurrentPage()
  isMobileNavOpen.value = true
}

function closeMobileNav() {
  isMobileNavOpen.value = false
}

function isExpanded(path) {
  return expandedPaths.value.has(path)
}

function togglePage(path) {
  const next = new Set(expandedPaths.value)

  if (next.has(path)) {
    next.delete(path)
  } else {
    next.add(path)
  }

  expandedPaths.value = next
}

function expandCurrentPage() {
  expandedPaths.value = new Set([currentPage.value.path])
}

function isNativeEditable(target) {
  return target instanceof Element && Boolean(target.closest('input, textarea, [contenteditable="true"]'))
}

function blockCopyLikeInteraction(event) {
  if (!isNativeEditable(event.target)) {
    event.preventDefault()
  }
}

watch(
  () => route.path,
  () => {
    expandCurrentPage()
  },
  { immediate: true },
)

watch(
  () => route.fullPath,
  () => {
    closeMobileNav()
    closeSearch()
  },
)

watch(isMobileNavOpen, (isOpen) => {
  document.body.classList.toggle('is-mobile-nav-open', isOpen)
})

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeMobileNav()
  }
}

onMounted(() => {
  document.addEventListener('copy', blockCopyLikeInteraction)
  document.addEventListener('cut', blockCopyLikeInteraction)
  document.addEventListener('contextmenu', blockCopyLikeInteraction)
  document.addEventListener('dragstart', blockCopyLikeInteraction)
  document.addEventListener('selectstart', blockCopyLikeInteraction)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('copy', blockCopyLikeInteraction)
  document.removeEventListener('cut', blockCopyLikeInteraction)
  document.removeEventListener('contextmenu', blockCopyLikeInteraction)
  document.removeEventListener('dragstart', blockCopyLikeInteraction)
  document.removeEventListener('selectstart', blockCopyLikeInteraction)
  document.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('is-mobile-nav-open')
})
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink class="topbar-brand" to="/" @click="closeSearch">
        <span class="brand-mark">
          <img src="/logo.png" alt="中原工学院" />
        </span>
        <span class="brand-copy">
          <strong>新生生存指北</strong>
          <small>中原工学院</small>
        </span>
      </RouterLink>

      <button
        type="button"
        class="mobile-nav-trigger"
        aria-label="打开目录"
        @click="openMobileNav"
      >
        <Menu :size="18" stroke-width="2.1" aria-hidden="true" />
        <span>目录</span>
      </button>

      <div class="topbar-search">
        <el-input
          v-model="query"
          class="search-input"
          placeholder="搜索或询问关键词"
          clearable
          aria-label="搜索或询问关键词"
        >
          <template #prefix>
            <Search :size="17" stroke-width="2.1" aria-hidden="true" />
          </template>
        </el-input>

        <div v-if="query" class="search-popover" aria-live="polite">
          <RouterLink
            v-for="result in searchResults"
            :key="`${result.page.path}-${result.label}`"
            :to="result.to"
            class="search-result"
            @click="closeSearch"
          >
            <el-card class="search-result-card" shadow="hover">
              <span>{{ result.label }}</span>
              <small>{{ result.page.name }}</small>
            </el-card>
          </RouterLink>
          <p v-if="!searchResults.length" class="empty-result">没有找到对应内容</p>
        </div>
      </div>
    </header>

    <div v-if="isMobileNavOpen" class="mobile-nav-backdrop" @click="closeMobileNav"></div>
    <aside
      class="mobile-nav-drawer"
      :class="{ 'is-open': isMobileNavOpen }"
      :aria-hidden="!isMobileNavOpen"
      aria-label="移动端文档目录"
    >
      <div class="mobile-drawer-header">
        <RouterLink class="mobile-drawer-brand" to="/" @click="closeMobileNav">
          <span class="brand-mark">
            <img src="/logo.png" alt="中原工学院" />
          </span>
          <span class="brand-copy">
            <strong>新生生存指北</strong>
            <small>中原工学院</small>
          </span>
        </RouterLink>
        <button type="button" class="mobile-drawer-close" aria-label="关闭目录" @click="closeMobileNav">
          <X :size="19" stroke-width="2.1" aria-hidden="true" />
        </button>
      </div>

      <nav class="doc-tree mobile-doc-tree" aria-label="移动端一级目录">
        <section v-for="page in guidePages" :key="page.path" class="doc-tree-section">
          <RouterLink
            v-if="page.path === '/'"
            class="doc-tree-parent doc-tree-home-link"
            :class="{ 'is-current-page': currentPage.path === page.path }"
            :aria-current="currentPage.path === page.path ? 'page' : undefined"
            :to="page.path"
            @click="closeMobileNav"
          >
            <component :is="icons[page.icon]" :size="17" stroke-width="2" aria-hidden="true" />
            <span>{{ page.name }}</span>
          </RouterLink>

          <button
            v-else
            type="button"
            class="doc-tree-parent"
            :class="{
              'is-current-page': currentPage.path === page.path,
              'is-expanded': isExpanded(page.path),
            }"
            :aria-expanded="isExpanded(page.path)"
            @click="togglePage(page.path)"
          >
            <component :is="icons[page.icon]" :size="17" stroke-width="2" aria-hidden="true" />
            <span>{{ page.name }}</span>
            <ChevronDown class="doc-tree-chevron" :size="15" stroke-width="2" aria-hidden="true" />
          </button>

          <div v-if="page.path !== '/'" v-show="isExpanded(page.path)" class="doc-tree-children">
            <RouterLink
              v-for="section in page.sections"
              :key="section.id"
              :to="{ path: page.path, hash: `#${section.id}` }"
              class="doc-tree-child"
              active-class=""
              exact-active-class=""
              @click="closeMobileNav"
            >
              {{ section.title }}
            </RouterLink>
          </div>
        </section>
      </nav>

      <footer class="mobile-drawer-footer">
        <button type="button" class="copy-chip" @click="copyText('781245651', '新生群群号')">
          新生群：781245651
        </button>
        <button type="button" class="copy-chip" @click="copyText('ethan_hzq@163.com', '邮箱')">
          邮箱：ethan_hzq@163.com
        </button>
      </footer>
    </aside>

    <div class="docs-layout">
      <aside class="docs-sidebar" aria-label="文档目录">
        <div class="sidebar-heading">
          <h2>目录</h2>
        </div>

        <nav class="doc-tree" aria-label="一级目录">
          <section v-for="page in guidePages" :key="page.path" class="doc-tree-section">
            <RouterLink
              v-if="page.path === '/'"
              class="doc-tree-parent doc-tree-home-link"
              :class="{ 'is-current-page': currentPage.path === page.path }"
              :aria-current="currentPage.path === page.path ? 'page' : undefined"
              :to="page.path"
              @click="closeSearch"
            >
              <component :is="icons[page.icon]" :size="17" stroke-width="2" aria-hidden="true" />
              <span>{{ page.name }}</span>
            </RouterLink>

            <button
              v-else
              type="button"
              class="doc-tree-parent"
              :class="{
                'is-current-page': currentPage.path === page.path,
                'is-expanded': isExpanded(page.path),
              }"
              :aria-expanded="isExpanded(page.path)"
              @click="togglePage(page.path)"
            >
              <component :is="icons[page.icon]" :size="17" stroke-width="2" aria-hidden="true" />
              <span>{{ page.name }}</span>
              <ChevronDown class="doc-tree-chevron" :size="15" stroke-width="2" aria-hidden="true" />
            </button>

            <div v-if="page.path !== '/'" v-show="isExpanded(page.path)" class="doc-tree-children">
              <RouterLink
                v-for="section in page.sections"
                :key="section.id"
                :to="{ path: page.path, hash: `#${section.id}` }"
                class="doc-tree-child"
                active-class=""
                exact-active-class=""
              >
                {{ section.title }}
              </RouterLink>
            </div>
          </section>
        </nav>

        <footer class="sidebar-footer">
          <button type="button" class="copy-chip" @click="copyText('781245651', '新生群群号')">
            新生群：781245651
          </button>
          <button type="button" class="copy-chip" @click="copyText('ethan_hzq@163.com', '邮箱')">
            邮箱：ethan_hzq@163.com
          </button>
        </footer>
      </aside>

      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>
