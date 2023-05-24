<template>
    <div class="error-page">
        <div class="img" style=" background-image: url('/img/bg/404.svg');"></div>
        <div class="content">
            <h1>404</h1>
            <div class="desc">抱歉，你访问的页面不存在</div>
            <div class="actions">
                <router-link :to="{ path: '/dashboard' }">
                    <el-button type="primary">返回首页</el-button>
                </router-link>
            </div>
        </div>
         <!-- 底部信息栏 -->
         <div class="w-screen h-10 text-xs fixed left-0 bottom-0">
            <div class="h-5 bg-gray-300 flex items-center justify-center">
                <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2023002542号-1</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="error-404">

</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>