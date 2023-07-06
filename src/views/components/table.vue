<template>
  <div class="">
    <el-card>
      <el-table :data="computedData" stripe style="width: 100%" max-height="500">
          <el-table-column type="selection" width="55" />
          <el-table-column v-for="item in table" :key="item.id" :prop="item.prop" :label="item.label" :width="item.width">
              <template #default="scope">
                  {{ scope.row[item.prop] }}
              </template>
          </el-table-column>
          <el-table-column label="操作">
              <template #header>
                  <el-input v-model="search" size="small" placeholder="Type to search" />
              </template>
              <template #default="scope">
                  <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
          </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const table = ref([{
  id: 1,
  label: 'ID',
  prop: 'id',
  width: 50
}, {
  id: 2,
  label: '名称',
  prop: 'name',
  width: 200
}, {
  id: 3,
  label: '编码',
  prop: 'code',
  width: 200
}, {
  id: 4,
  label: '可用',
  prop: 'is_active',
  width: 180
}])
const data: any = ref([{
  id: 1,
  name: '名称1',
  code: '编码1',
  show: true,
  is_active: 'Y'
}])
const search = ref('')

const computedData = computed(() => {
  return data.value.filter((item: any) => (item.name.indexOf(search.value) !== -1 || item.code.indexOf(search.value) !== -1))
})

const handleEdit = (index: number, row: any) => {
console.log(index, row)
}
const handleDelete = (index: number, row: any) => {
console.log(index, row)
}
const init = () => {
  const num = 30
  for (let i = 2; i <= num; i++) {
      data.value.push({
          id: i,
          name: '名称' + i,
          code: '编码' + i,
          show: true,
          is_active: i % 2 === 0 ? 'Y' : 'N'
      })
  }
}


init()
</script>

<style lang="scss" scoped>
</style>