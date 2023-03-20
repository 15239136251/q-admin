<template>
    <div class="q-sidebar">
        <logo />
        <el-scrollbar style="height: 100%">
            <el-menu unique-opened :default-active="1" mode="vertical" :show-timeout="200"
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
const menu: any[] = []
</script>

<style scoped></style>