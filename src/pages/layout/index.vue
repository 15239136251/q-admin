<template>
    <div class="q-contail" :class="{'q--collapse': isCollapse}">
        <!-- 顶部导航栏 -->
        <div class="q-header">
            <top ref="top" />
        </div>
        <!-- 中间区域 -->
        <div class="q-layout">
            <!-- sidebar -->
            <div class="q-left">
                <sidebar />
            </div>
            <!-- main -->
            <div class="q-main">
                <h1>Main</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import top from './top/index.vue'
import sidebar from './sidebar/index.vue'

const isCollapse = ref(false)
</script>

<style scoped>

</style>