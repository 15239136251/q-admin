<template>
    <div class="q-contail" :class="{'q--collapse': isCollapse}">
        <!-- 顶部导航栏 -->
        <div class="q-header">
            <!-- top -->
            <top />
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
import { ref, toRefs } from 'vue';
import top from './top/index.vue'
import tags from './tags.vue'
import sidebar from './sidebar/index.vue'
import { useCommonStore } from '@/store/common'
import useColors from '@/utils/useColors';

const commonStore = useCommonStore()
const { isCollapse } = toRefs(commonStore)

const { init } = useColors()
init()
</script>

<style scoped>

</style>