import { createApp } from 'vue'
import { ElBreadcrumb, ElBreadcrumbItem, ElCard, ElInput, ElTag } from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/es/components/breadcrumb/style/css'
import 'element-plus/es/components/breadcrumb-item/style/css'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/tag/style/css'
import App from './App.vue'
import { router } from './router'
import './styles.css'

createApp(App)
  .use(router)
  .component('ElBreadcrumb', ElBreadcrumb)
  .component('ElBreadcrumbItem', ElBreadcrumbItem)
  .component('ElCard', ElCard)
  .component('ElInput', ElInput)
  .component('ElTag', ElTag)
  .mount('#app')
