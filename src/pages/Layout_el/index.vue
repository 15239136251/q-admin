<template>
  <div>
    <el-config-provider :locale="locale">
      <el-container class="layout-container" style="height: 100vh">
        <el-aside :width="isCollapse ? '60px' : '240px'" style="transition: width .3s;">
          <layout-sidebar></layout-sidebar>
        </el-aside>
        <el-container direction="vertical">
          <el-header class="q-top">
            <layout-header></layout-header>
          </el-header>
          <el-main>
            <layout-content></layout-content>
          </el-main>
        </el-container>
      </el-container>
    </el-config-provider>
  </div>
</template>
  
<script lang="ts" setup>
import { toRefs, computed } from 'vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContent from './components/LayoutContent.vue'
import LayoutSidebar from './components/LayoutSidebar.vue'
import { useCommonStore } from '@/store/common'
import useColors from '@/utils/useColors';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import useLocale from '@/utils/useLocale'

/* 语言切换 */
const { i18n, currentLocale, changeLoacle } = useLocale()

const commonStore = useCommonStore()
const { isCollapse } = toRefs(commonStore)
const locale = computed(() => (i18n.locale.value === 'zh-CN' ? zhCn : en))
const { init } = useColors()
init()
</script>
  
<style>
.layout-container {
  transition: all .3s;
}
.layout-container .el-header {
  position: relative;
  /* background-color: var(--el-color-primary-light-7); */
  color: var(--el-text-color-primary);
}

.layout-container .el-aside {
  color: var(--el-text-color-primary);
  /* background: var(--el-color-primary-light-8); */
}

.layout-container .el-menu {
  border-right: none;
}
</style>