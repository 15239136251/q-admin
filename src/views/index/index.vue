<template>
  <div class="index">
    <el-row gutter="20">
      <el-col :span="24" class="mb-5">
        <el-card>
          <p class="flex justify-center align-center">
            <img src="https://img.shields.io/badge/Release-V3.1.1-green.svg" alt="Downloads">
            <img src="https://img.shields.io/badge/JDK-1.8+-green.svg" alt="Build Status">
            <img src="https://img.shields.io/badge/Spring%20Cloud-2021-blue.svg" alt="Coverage Status">
            <img src="https://img.shields.io/badge/Spring%20Boot-2.7-blue.svg" alt="Downloads">
            <a target="_blank" href="https://bladex.vip">
              <img src="https://img.shields.io/badge/Saber%20Author-Small%20Chill-ff69b4.svg" alt="Downloads">
            </a>
            <a target="_blank" href="https://bladex.vip">
              <img src="https://img.shields.io/badge/Copyright%20-@BladeX-%23ff3f59.svg" alt="Downloads">
            </a>
          </p>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="card text-gray-500">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item :title="item.title" :name="index" v-for="(item, index) in leftInfo" :key="index">
              <ol start="1" style="font-size: 12px;">
                <li v-for="(content, index) in item.contents" :key="content + index">{{ index + 1 }}. {{ content }}</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card text-gray-500">
          <div>
            <span>产品名称</span> 
            <el-divider direction="vertical"></el-divider>
            <el-tag type="info">后台管理模板</el-tag>
          </div>
          <el-divider content-position="right" class="my-3">
            <el-icon><Star /></el-icon>
          </el-divider>
          <div>
            <span>账号</span> 
            <el-divider direction="vertical"></el-divider>
            <el-tag type="success">管理员(admin)</el-tag>
            <el-divider direction="vertical"></el-divider>
            <el-tag type="info">测试人员(test)</el-tag>
            <el-divider direction="vertical"></el-divider>
            <el-tag type="warning">游客(youke)</el-tag>
          </div>
          <el-divider content-position="right" class="my-3">
            <el-icon><Star /></el-icon>
          </el-divider>
          <div>
            <span>项目地址</span> 
            <el-divider direction="vertical"></el-divider>
            <el-link href="https://github.com/15239136251/q-admin/tree/master" target="_blank">https://github.com/15239136251/q-admin</el-link>
          </div>
          <el-divider content-position="right" class="my-3">
            <el-icon><Star /></el-icon>
          </el-divider>
          <div>
            <span>博客地址</span> 
            <el-divider direction="vertical"></el-divider>
            <el-link href="https://quhaibin.cn/home/index" target="_blank">https://quhaibin.cn</el-link>
          </div>
        </el-card>
        <el-card class="mt-5" v-if="updatelogs.length">
          <el-collapse v-model="logsActiveNames">
            <el-collapse-item :title="item.title" :name="index" v-for="(item, index) in updatelogs" :key="index">
              <ol start="1" style="font-size: 12px;">
                <li v-for="(content, index) in item.contents" :key="content + index">{{ index + 1 }}. {{ content }}</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref([0, 1])
const leftInfo = ref([{
  title: '欢迎使用 Q admin',
  contents: [
    '首页布局方便参考了saber'
  ]
}, {
  title: '什么是 Q admin',
  contents: [
    'Q admin 是一个后台管理页面模板。',
    '属于一个SPA项目。'
  ]
}])

const logsActiveNames = ref([0])
const updatelogs = ref([{
  title: '1.0.0 TEST发布',
  contents: [
    '[初始化]修改首页'
  ]
}])

const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>
.card {
  font-size: 14px;

  a {
    font-size: 12px;
  }
}
</style>