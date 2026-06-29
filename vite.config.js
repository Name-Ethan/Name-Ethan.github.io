import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownOptions: {
        html: true,
        linkify: false,
        typographer: true,
      },
      markdownSetup(md) {
        const defaultLinkOpen =
          md.renderer.rules.link_open ||
          ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))

        md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
          const href = tokens[idx].attrGet('href')

          if (href && /^https?:\/\//.test(href)) {
            tokens[idx].attrSet('target', '_blank')
            tokens[idx].attrSet('rel', 'noreferrer')
          }

          return defaultLinkOpen(tokens, idx, options, env, self)
        }
      },
    }),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 85 },
      includePublic: true,
    }),
  ],
})
