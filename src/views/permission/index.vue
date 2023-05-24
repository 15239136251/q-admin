<template>
  <div class="index content">
      <el-card>
        <h1>按钮级别权限控制演示</h1>
        <el-row>
            <el-col :span="24">
              <el-checkbox-group :model-value="menuRoles" @change="checkboxChange">
                <el-checkbox label="user:view">查看</el-checkbox>
                <el-checkbox label="user:add">新增</el-checkbox>
                <el-checkbox label="user:update">更新</el-checkbox>
                <el-checkbox label="user:delete">删除</el-checkbox>
              </el-checkbox-group>
              <el-button @click="reload">确定</el-button>
            </el-col>
            <el-col :span="6"><el-button type="primary" v-hasPermission="['user:view']">查看</el-button></el-col>
            <el-col :span="6"><el-button type="success" v-hasPermission="['user:add']">新增</el-button></el-col>
            <el-col :span="6"><el-button type="warning" v-hasPermission="['user:update']">更新</el-button></el-col>
            <el-col :span="6"><el-button type="danger" v-hasPermission="['user:delete']">删除</el-button></el-col>
        </el-row>
      </el-card>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { usePermissionStore } from '@/store/permission'
const permissionStore = usePermissionStore()

const { menuRoles } = toRefs(permissionStore)
const { SET_MENU_ROLES } = permissionStore

const checkboxChange = (e: string[]) => {
  console.log("🚀 ~ file: index.vue:32 ~ checkboxChange ~ e:", e)
  SET_MENU_ROLES(e)
}

const reload = () => {
  location.reload()
}
</script>

<style lang="scss" scoped>
</style>