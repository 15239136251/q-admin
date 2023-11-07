<template>
  <div class="toolbar">
    <div class="top-bar__left">
      <el-icon @click="SET_COLLAPSE">
        <Fold />
      </el-icon>
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
      <!-- 切换暗黑模式 -->
      <div class="top-bar__item">
        <el-switch
          v-model="htmlType"
          class="ml-2"
          style="--el-switch-on-color: #2c2c2c; --el-switch-off-color: #fff"
          @change="typeChange"
        />
      </div>
      <!-- 锁屏 -->
      <el-tooltip v-if="showLock" effect="dark" :content="t('navbar.lock')" placement="bottom">
        <div class="top-bar__item">
          <el-icon>
            <Lock />
          </el-icon>
        </div>
      </el-tooltip>
      <!-- 切换语言 -->
      <el-tooltip v-if="currentLocale === 'zh-CN'" effect="dark" placement="bottom" :content="t('navbar.switchEn')">
        <div class="top-bar__item" @click="changeLoacle('en-US')">
          <el-icon>
            <Switch />
          </el-icon>
        </div>
      </el-tooltip>
      <el-tooltip v-if="currentLocale === 'en-US'" effect="dark" :content="t('navbar.switchZh')" placement="bottom">
        <div class="top-bar__item" @click="changeLoacle('zh-CN')">
          <el-icon>
            <Switch />
          </el-icon>
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
            <el-dropdown-item @click="goHome">首页</el-dropdown-item>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click="loginInit">重置缓存</el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import topMenu from './TopMenu.vue'
import topSearch from './TopSearch.vue'
import useLocale from '@/utils/useLocale'
import { useUserStore } from '@/store/user'
import { useCommonStore } from '@/store/common'
import { switchHtmlClass } from '@/utils/utils'
import { ref } from 'vue'
import router from '@/router';

const commonStore = useCommonStore()
const { SET_COLLAPSE } = commonStore
const htmlType = ref(true)
const showLock = true
/* 语言切换 */
const { i18n: { t }, currentLocale, changeLoacle } = useLocale()
const { logout, loginInit } = useUserStore()
const goHome = () => {
  router.push({
    path: '/dashboard/index'
  })
}
const typeChange = () => {
  if (htmlType.value) {
    switchHtmlClass('dark')
  } else {
    switchHtmlClass('white')
  }
}
typeChange()
</script>

<style scoped>
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>