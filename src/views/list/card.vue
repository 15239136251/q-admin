<template>
  <div class="mb-10">
    <div class="flex align-items-center justify-between mb-5">
      <div class="align-bottom">
        <el-button type="primary"><el-icon class="el-icon--left">
            <Plus />
          </el-icon>{{ t('common.btns.add') }}</el-button>
      </div>
      <div>
        <el-input v-model="search" class="w-64" placeholder="请输入信息"></el-input>
      </div>
    </div>
    <el-row gutter="20">
      <el-col class="mb-5" :lg="6" :md="12" :sm="24" v-for="item in list" :key="item.id">
        <el-card class="flex flex-col justify-between cursor-pointer">
          <div class="flex align-center justify-between">
            <div class="w-14 h-14 rounded-full bg-blue-300 flex align-center justify-center">
              <el-icon size="24" class="text-blue-600">
                <component :is="item.icon" />
              </el-icon>
            </div>
            <div>
              <el-button type="success" size="small" v-if="item.status === 1">已启用</el-button>
              <el-button type="info" size="small" disabled v-else>已停用</el-button>
            </div>
          </div>
          <div class="py-3 h-24">
            <div class="font-bold">{{ item.title }}</div>
            <div class="font-size-sm mt-2 text-gray-500">{{ item.description }}</div>
          </div>
          <div class="flex justify-between">
            <el-avatar class="bg-blue-300 text-blue-600" size="small"> {{ item.key }} </el-avatar>
            <div>
              <el-dropdown trigger="click" :disabled="item.status != 1">
                <span class="el-dropdown-link">
                  <el-icon>
                    <MoreFilled />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>{{ t('common.btns.management') }}</el-dropdown-item>
                    <el-dropdown-item>{{ t('common.btns.delete') }}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="p-4 flex align-bottom justify-end">
        <div>
          <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 50]"
            :background="true" layout="sizes, prev, pager, next" :total="150" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getCardList } from '@/api/list'
import useLocale from '@/utils/useLocale'

/* 语言切换 */
const { i18n: { t } } = useLocale()
const search = ref('')
const tableData = ref([])
const currentPage = ref(1)
const pageSize = ref(20)

const list: any = computed(() => {
  return tableData.value.filter((item: any) => (item.title.indexOf(search.value) !== -1 || item.description.indexOf(search.value) !== -1))
})

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  init()
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  init()
}
const init = async () => {
  const data: any = await getCardList({page: currentPage.value, pageSize: pageSize.value})
  tableData.value = data.data
}

init()
</script>

<style lang="scss" scoped></style>