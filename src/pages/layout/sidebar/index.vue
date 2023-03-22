<template>
    <div class="q-sidebar">
        <logo />
        <el-scrollbar style="height: 100%">
            <el-menu unique-opened :default-active="1" mode="vertical" :show-timeout="200" active-text-color="#fff"
        background-color="#20222a" text-color="#9c9da1"
                :collapse="keyCollapse">
                <sidebar-item :menu="menu" :screen="screen" first :props="props"
                    :collapse="keyCollapse"></sidebar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import logo from '../logo.vue'

const keyCollapse = false

const props = {}
const screen = 1
const menu: any[] = [{
    label: '测试',
    path: '/',
    icon: 'location',
    isOpen: 1
}, {
    label: '工作台',
    path: '/dashbord/index',
    icon: 'icon-manage',
    isOpen: 1,
    children: [{
        label: '通知公告',
        path: '/dashbord/brand',
        icon: 'icon-brand',
        isOpen: 1,
    }]
}]
</script>

<style scoped></style>