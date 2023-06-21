<template>
    <div class="top-menu">
        <el-menu
            default-active="0"
            mode="horizontal"
        >
            <el-menu-item v-for="(menu, index) in topMenus" :key="menu.label + index"  :index="index" @click="open(menu)">
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
import router from '@/router';
import { Menu } from '@/store/sidebar';
import { toRefs } from 'vue'
import { useSidebarStore } from '@/store/sidebar'

const sidebarStore = useSidebarStore()

const { topMenus } = toRefs(sidebarStore)

const open = (item: any) => {
    console.log("🚀 ~ file: siderbarItem.vue:84 ~ open ~ item:", item)
    router.push({
        path: item.path,
        query: item.query
    })
}
</script>

<style scoped lang="scss">
</style>