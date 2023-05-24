import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'

/* 引入路由 */
import router from '@/router/index'

/* 引入 bootstrap */
import "@popperjs/core";
import "bootstrap";

/* 引入ElementPlus组件 */
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/display.css'
/* 引入ElementPlus/icons-vue */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

/* 引入iconfont */
import "./icons/iconfont.css"

/* 引入 国际化 */
import i18n from './lang';

/* 
    引入自定义的mockXHR
    因为mockXHR不是默认导出的：export default{}
    所以引入时需要加大括号，这种可以引入多个
*/
import { mockXHR } from './mock/index'
/* 判断开发环境 */
if (import.meta.env.VITE_USER_NODE_ENV === 'mock') {
    console.log('Mock Start!')
    mockXHR()
}

/* 全局注册组件 */
import sidebarItem from './pages/layout/sidebar/sidebarItem.vue'

/* 引入 Pinia */
import { createPinia } from 'pinia'
const pinia = createPinia()

/* 引入自定义指令 */
import directives from './directives'

// 引入 WindiCss
import 'virtual:windi.css'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(i18n).use(ElementPlus).use(pinia)

// 注册自定义指令
directives(app)

app.component('sidebarItem', sidebarItem)
app.mount('#app')