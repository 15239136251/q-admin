<template>
    <div class="q-sidebar">
        <logo />
        <el-scrollbar style="height: 100%">
            <el-menu unique-opened :default-active="1" mode="vertical" :show-timeout="200" active-text-color="#fff"
        background-color="#20222a" text-color="#9c9da1"
                :collapse="keyCollapse">
                <sidebar-item :menu="menus" :screen="screen" first :props="props"
                    :collapse="keyCollapse"></sidebar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import logo from '../logo.vue'
import { useSidebarStore } from '@/store/sidebar';
import { toRefs } from 'vue';

const sidebarStore = useSidebarStore()

const { menus } = toRefs(sidebarStore)

const keyCollapse = false

const props = {}
const screen = 1
</script>

<style scoped></style>