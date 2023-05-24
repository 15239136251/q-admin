<template>
    <div class="q-sidebar">
        <logo />
        <el-scrollbar style="height: 100%">
            <el-menu unique-opened :default-active="menuActive" mode="vertical" :show-timeout="200" active-text-color="#fff"
        background-color="#20222a" text-color="#9c9da1"
                :collapse="isCollapse">
                <sidebar-item :menu="menus" :screen="screen" first :props="props"
                    :collapse="isCollapse"></sidebar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import logo from '../logo.vue'
import { toRefs } from 'vue';
import { useSidebarStore } from '@/store/sidebar';
import { useCommonStore } from '@/store/common'
import { useTagsStore } from '@/store/tags'

const commonStore = useCommonStore()
const { isCollapse } = toRefs(commonStore)

const sidebarStore = useSidebarStore()
const { menus } = toRefs(sidebarStore)

const tagsStore = useTagsStore()
const { menuActive } = toRefs(tagsStore)
console.log("🚀 ~ file: index.vue:30 ~ menuActive:", menuActive)

const props = {}
const screen = 1
</script>

<style scoped></style>