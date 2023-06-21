<template>
  <div>
    <el-container class="layout-container" style="height: 100vh">
      <el-aside :width="isCollapse ? '60px' : '240px'">
        <layout-sidebar></layout-sidebar>
      </el-aside>
      <el-container direction="vertical">
        <el-header class="q-top">
          <layout-header></layout-header>
        </el-header>
        <el-main style="padding: 0;">
          <layout-content></layout-content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
<script lang="ts" setup>
import { toRefs } from 'vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContent from './components/LayoutContent.vue'
import LayoutSidebar from './components/LayoutSidebar.vue'
import { useCommonStore } from '@/store/common'
import useColors from '@/utils/useColors';

const commonStore = useCommonStore()
const { isCollapse } = toRefs(commonStore)

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