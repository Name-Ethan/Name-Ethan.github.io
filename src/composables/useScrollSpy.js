import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

export const activeSectionId = ref(null)

let observer = null
const headingStates = new Map()

export function useScrollSpy(sectionIdsRef, options = {}) {
  const topbarHeight = options.topbarHeight ?? 68

  function teardownObserver() {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    headingStates.clear()
  }

  function setupObserver() {
    teardownObserver()

    const ids = typeof sectionIdsRef.value === 'function'
      ? sectionIdsRef.value()
      : sectionIdsRef.value

    if (!ids || ids.length === 0) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          headingStates.set(entry.target.id, {
            isIntersecting: entry.isIntersecting,
            top: entry.boundingClientRect.top,
          })
        }

        let bestId = null
        let bestScore = -Infinity

        for (const [id, state] of headingStates) {
          let score

          if (state.isIntersecting) {
            score = 2000 - Math.abs(state.top - topbarHeight)
          } else if (state.top < topbarHeight) {
            score = -Math.abs(state.top - topbarHeight)
          } else {
            continue
          }

          if (score > bestScore) {
            bestScore = score
            bestId = id
          }
        }

        if (bestId !== null) {
          activeSectionId.value = bestId
        }
      },
      {
        rootMargin: `-${topbarHeight}px 0px 0px 0px`,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    )

    // Observe after DOM settles
    nextTick(() => {
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      }

      if (activeSectionId.value === null && ids.length > 0) {
        activeSectionId.value = ids[0]
      }
    })
  }

  const unwatch = watch(
    () => sectionIdsRef.value,
    () => {
      activeSectionId.value = null
      setupObserver()
    },
  )

  onMounted(() => {
    setupObserver()
  })

  onBeforeUnmount(() => {
    teardownObserver()
    unwatch()
  })
}
