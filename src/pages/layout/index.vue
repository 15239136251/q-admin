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
                <!-- 标签卡区域 -->
                <tags></tags>
                <transition name="fade-scale">
                    <search class="q-view" v-show="false"></search>
                </transition>
                <!-- 主体视图层 -->
                <div style="height:100%;overflow-y:auto;overflow-x:hidden;" id="q-view" v-show="true">
                    <keep-alive>
                        <router-view class="q-view" v-if="$route.meta.keepAlive"/>
                    </keep-alive>
                    <router-view class="q-view" v-if="!$route.meta.keepAlive"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import top from './top/index.vue'
import tags from './tags.vue'
import sidebar from './sidebar/index.vue'

const isCollapse = ref(false)
</script>

<style scoped>

</style>