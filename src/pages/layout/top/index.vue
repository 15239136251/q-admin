<template>
    <div class="q-top">
        <div class="top-bar__left">
            <el-icon><Fold /></el-icon>
        </div>
        <div class="top-bar__title">
            <div class="top-bar__item">
                <top-menu></top-menu>
            </div>
            <div class="top-bar__item">
                <top-search></top-search>
            </div>
        </div>
        <div class="top-bar__right">
            <!-- 锁屏 -->
            <el-tooltip 
                v-if="showLock"
                effect="dark"
                :content="t('navbar.lock')"
                placement="bottom"
            >
                <div class="top-bar__item">
                    <el-icon><Lock /></el-icon>
                </div>
            </el-tooltip>
            <!-- 退出 -->
            <img class="top-bar__img" src="/img/avatar.jpg">
            <el-dropdown>
                <span class="">
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>首页</el-dropdown-item>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import topMenu from './top-menu.vue'
import topSearch from './top-search.vue'
import useLocale from '@/utils/useLocale'
/* 语言切换 */
const { i18n: { t } } = useLocale()
const showLock = true
</script>

<style lang="scss" scoped>

</style>