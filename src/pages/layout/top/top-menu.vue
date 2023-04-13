<template>
    <div class="top-menu">
        <el-menu
            default-active="0"
            class="el-menu-demo"
            mode="horizontal"
        >
            <el-menu-item v-for="(menu, index) in topMenus" :key="menu.label + index"  :index="index">
                <el-icon v-if="menu.icon.indexOf('icon-') != -1" >
                    <i class="iconfont" :class="menu.icon"></i>
                </el-icon>
                <el-icon v-else>
                    <component :is="menu.icon || 'Menu'" />
                </el-icon>
                {{ menu.label }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useSidebarStore } from '@/store/sidebar'

const sidebarStore = useSidebarStore()

const { topMenus } = toRefs(sidebarStore)
</script>

<style scoped>

</style>