<template>
  <div class="">
    <el-card class="">
      <el-row :gutter="10" :class="isDown ? 'h-12 overflow-hidden' : ''">
        <el-col class="mt-2 font-size-md" v-for="item in configs.filter.list" :lg="item.config.row?.lg || 6"
          :md="item.config.row?.md || 8" :sm="item.config.row?.sm || 12" :xs="item.config.row?.xs || 24">
          <div class="flex align-center">
            <div class="px-2" style="width: 100px; text-align: end;">{{ item.label }}</div>
            <component class="flex-1" :is="item.component" v-model="queryfilter[item.value]"></component>
          </div>
        </el-col>
      </el-row>
      <div class="flex justify-end">
        <el-button type="primary" @click="query">
          <el-icon class="el-icon--left">
            <Search />
          </el-icon>查询
        </el-button>
        <el-button type="primary">
          <el-icon class="el-icon--left">
            <Refresh />
          </el-icon>
          重置
        </el-button>
        <el-button type="primary" @click="handleClick">
          <div class="flex align-center" v-if="isDown">
            <el-icon class="el-icon--left">
              <ArrowDown />
            </el-icon>
            <span>展开</span>
          </div>
          <div class="flex align-center" v-else>
            <el-icon class="el-icon--left">
              <ArrowUp />
            </el-icon>
            <span>收起</span>
          </div>
        </el-button>
      </div>
    </el-card>
    <div class="">
      <el-card class="mt-5">
        <el-row class="mb-5">
          <el-col :md="12" :sm="24">
            <div class="flex justify-start">
              <el-button type="primary">全选</el-button>
              <el-button type="primary">反选</el-button>
              <el-button type="primary">清空</el-button>
            </div>
          </el-col>
          <el-col :md="12" :sm="24">
            <div class="flex justify-end">
              <el-button type="primary">
                <el-icon class="el-icon--left">
                  <Plus />
                </el-icon>新增
              </el-button>
              <el-button type="primary">
                <el-icon class="el-icon--left">
                  <Refresh />
                </el-icon>刷新
              </el-button>
              <el-button type="danger">
                <el-icon class="el-icon--left">
                  <Delete />
                </el-icon>删除
              </el-button>
              <el-dropdown class="ml-3">
                <el-button type="primary">
                  更多<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>导入</el-dropdown-item>
                    <el-dropdown-item>导出</el-dropdown-item>
                    <el-dropdown-item>设置列显隐</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
        <div>
          <el-table stripe border ref="multipleTableRef" empty-text="暂无数据" :data="tableData" max-height="500"
            @selection-change="handleSelectionChange">
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
                    <el-icon class="el-icon--left">
                      <View />
                    </el-icon>
                    详情
                  </el-button>
                  <el-button type="warning" size="small">
                    <el-icon class="el-icon--left">
                      <Edit />
                    </el-icon>
                    编辑
                  </el-button>
                  <el-button type="danger" size="small">
                    <el-icon class="el-icon--left">
                      <Delete />
                    </el-icon>
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
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { getBaseList } from '@/api/list'
type stringKey = {
  [key: string]: any
}

const queryfilter: stringKey = reactive({
  username: '',
  city: '',
  address: '',
  dateBeg: '',
  deteEnd: ''
})

const configs = {
  filter: {
    title: '用户信息',
    list: [{
      label: '名称',
      value: 'username',
      component: 'el-input',
      props: {},
      config: {
        row: {
          lg: 6,
          md: 8,
          sm: 12,
          xs: 24,
        }
      }
    }, {
      label: '城市',
      value: 'city',
      component: 'el-input',
      props: {},
      config: {}
    }, {
      label: '地址',
      value: 'address',
      component: 'el-input',
      props: {},
      config: {}
    }, {
      label: '起始时间',
      value: 'dateBeg',
      component: 'el-date-picker',
      props: {},
      config: {}
    }, {
      label: '结束时间',
      value: 'dateEnd',
      component: 'el-date-picker',
      props: {},
      config: {}
    }]
  },
  table: {

  }
}

const tableData = ref([])
const multipleSelection = ref([])
const currentPage = ref(1)
const pageSize = ref(20)



const isDown = ref(configs.filter.list.length > 4)

const handleClick = () => {
  isDown.value = !isDown.value
}
const query = () => {
  console.log('query', queryfilter)
  init()
}
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
  const data: any = await getBaseList({ page: currentPage.value, pageSize: pageSize.value })
  tableData.value = data.data
}

init()
</script>

<style lang="scss" scoped></style>