<template>
  <div>
    <el-card>
      <div class="flex align-center justify-between">
        <div class="align-bottom">
          <el-button type="primary"><el-icon class="el-icon--left"><Plus /></el-icon>新增</el-button>
          <el-button type="warning"><el-icon class="el-icon--left"><Edit /></el-icon>编辑</el-button>
          <el-button type="danger"><el-icon class="el-icon--left"><Delete /></el-icon>删除</el-button>
          <el-button type="primary"><el-icon class="el-icon--left"><Refresh /></el-icon>刷新</el-button>
          <el-button type="info" disabled>导出</el-button>
          <el-text v-if="multipleSelection.length" class="ml-4 font-size-sm text-gray-400">已选 {{ multipleSelection.length }} 项</el-text>
        </div>
        <div>
          <el-input v-model="search" class="w-64" placeholder="请输入发货人或编号"></el-input>
        </div>
      </div>
      <div class="mt-4">
        <el-table ref="multipleTableRef" :data="list" style="width: 100%; height: 660px;" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" />
          <el-table-column prop="id" label="ID" width="50" />
          <el-table-column prop="name" label="发货人" width="120" />
          <el-table-column prop="docno" label="编号" width="200" />
          <el-table-column prop="city" label="城市" width="120" />
          <el-table-column prop="address" label="地址" width="300" />
          <el-table-column prop="status" label="状态" width="100">
            <template #default="scope">
              <el-tag v-if="scope.row.status === 0" type="danger">未通过</el-tag>
              <el-tag v-else-if="scope.row.status === 1">待提交</el-tag>
              <el-tag v-else-if="scope.row.status === 2" type="success">已提交</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="200" />
          <el-table-column prop="createName" label="创建人" width="120" />
          <el-table-column prop="modifyTime" label="修改时间" width="200" />
          <el-table-column prop="modifyName" label="修改人" width="120" />
          <el-table-column prop="isActive" label="可用" width="120">
            <template #default="scope">
              <el-checkbox class="disabCheck" :checked="scope.row.isActive" disabled></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" min-width="240" max-width="200">
            <template #default="scope">
              <div class="flex justify-around">
                <el-button type="primary" size="small">
                  <el-icon class="el-icon--left"><View /></el-icon>
                  详情
                </el-button>
                <el-button type="warning" size="small">
                  <el-icon class="el-icon--left"><Edit /></el-icon>
                  编辑
                </el-button>
                <el-button type="danger" size="small">
                  <el-icon class="el-icon--left"><Delete /></el-icon>
                  删除
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="my-4 flex align-bottom justify-end">
        <div>
          <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 50]"
            :background="true" layout="sizes, prev, pager, next" :total="150" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getBaseList } from '@/api/list'

const search = ref('')
const tableData = ref([])
const multipleSelection = ref([])
const currentPage = ref(1)
const pageSize = ref(20)

const list = computed(() => {
  return tableData.value.filter((item: any) => (item.name.indexOf(search.value) !== -1 || item.docno.indexOf(search.value) !== -1))
})

const handleSelectionChange = (val: any) => {
  multipleSelection.value = val
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  init()
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  init()
}
const init = async () => {
  const data: any = await getBaseList({page: currentPage.value, pageSize: pageSize.value})
  tableData.value = data.data
}

init()
</script>

<style lang="scss">
.disabCheck>.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
  border-color: #fff;
}

.disabCheck>.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}

.disabCheck>.el-checkbox__input.is-disabled+span.el-checkbox__label {
  color: #606266;
}

.disabCheck>.el-checkbox__label {
  font-size: 12px;
}
</style>