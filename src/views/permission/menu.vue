<template>
  <div>
    <el-card>
      <div class="flex align-center justify-between">
        <div class="align-bottom">
          <el-button type="primary"><el-icon class="el-icon--left"><Plus /></el-icon>{{ t('common.btns.add') }}</el-button>
          <el-button type="warning"><el-icon class="el-icon--left"><Edit /></el-icon>{{ t('common.btns.edit') }}</el-button>
          <el-button type="danger"><el-icon class="el-icon--left"><Delete /></el-icon>{{ t('common.btns.delete') }}</el-button>
          <el-button type="primary"><el-icon class="el-icon--left"><Refresh /></el-icon>{{ t('common.btns.refresh') }}</el-button>
          <el-button type="info" disabled>{{ t('common.btns.export') }}</el-button>
          <el-text v-if="multipleSelection.length" class="ml-4 font-size-sm text-gray-400">已选 {{ multipleSelection.length }} 项</el-text>
        </div>
        <div>
          <el-input v-model="search" class="w-64" placeholder="请输入发货人或编号"></el-input>
        </div>
      </div>
      <div class="mt-4">
        <el-table ref="multipleTableRef" :data="list" style="width: 100%; height: 660px;" @selection-change="handleSelectionChange" row-key="id">
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column prop="id" label="ID" width="120" align="center" />
          <el-table-column prop="label" label="标题" width="120" align="center" />
          <el-table-column prop="icon" label="图标" width="80" align="center">
            <template #default="scope">
              <el-icon size="20px">
                <component :is="scope.row.icon" />
              </el-icon>
            </template>
          </el-table-column>
          <el-table-column prop="path" label="路径" align="center" />
          <el-table-column prop="type" label="类型" align="center">
            <template #default="scope">
              <el-tag v-if="scope.row.type === 0" type="warning">菜单目录</el-tag>
              <el-tag v-else-if="scope.row.type === 1" type="danger">菜单项</el-tag>
              <el-tag v-else-if="scope.row.type === 2" type="success">操作按钮</el-tag>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="createTime" label="创建时间" width="200" align="center" />
          <el-table-column prop="createName" label="创建人" width="120" align="center" /> -->
          <el-table-column prop="modifyTime" label="修改时间" width="200" align="center" />
          <!-- <el-table-column prop="modifyName" label="修改人" width="120" align="center" /> -->
          <el-table-column prop="isActive" label="可用" width="60" align="center">
            <template #default="scope">
              <el-checkbox class="disabCheck" :checked="scope.row.isActive" disabled></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="180" max-width="180" align="center">
            <template #default="scope">
              <div class="flex justify-around">
                <el-tooltip 
                  :content="t('common.btns.view')"
                  placement="top"
                >
                  <div class="top-bar__item flex align-center">
                    <el-button type="primary" size="small">
                      <el-icon><View /></el-icon>
                    </el-button>
                  </div>
                </el-tooltip>
                <el-tooltip 
                  :content="t('common.btns.edit')"
                  placement="top"
                >
                  <div class="top-bar__item flex align-center">
                    <el-button type="primary" size="small">
                      <el-icon><Edit /></el-icon>
                    </el-button>
                  </div>
                </el-tooltip>
                <el-tooltip 
                  :content="t('common.btns.delete')"
                  placement="top"
                >
                  <div class="top-bar__item flex align-center">
                    <el-button type="danger" size="small">
                      <el-icon><Delete /></el-icon>
                    </el-button>
                  </div>
                </el-tooltip>
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
import { toRefs, ref, computed } from 'vue'
import { useSidebarStore } from '@/store/sidebar'
import { getBaseList } from '@/api/list'
import useLocale from '@/utils/useLocale'

const sidebarStore = useSidebarStore()

const { menus } = toRefs(sidebarStore)

/* 语言切换 */
const { i18n: { t } } = useLocale()
const search = ref('')
const multipleSelection = ref([])
const currentPage = ref(1)
const pageSize = ref(20)

const list = computed(() => {
  return menus.value.filter((item: any) => (item.label.indexOf(search.value) !== -1 || item.path.indexOf(search.value) !== -1))
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

}

init()
</script>

<style scoped>

</style>