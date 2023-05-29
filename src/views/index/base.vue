<template>
  <div class="my-3">
    <el-row gutter="20" class="font-size-base">
      <el-col :lg="6" :md="12" :xs="24" class="mb-3">
        <el-card class="rounded-lg bg-blue-600 text-white cursor-pointer">
          <div class="">总收入</div>
          <div class="flex align-items-center justify-between font-size-5xl relative mt-2">
            <div>
              <span>¥ 28,425.00</span>
            </div>
            <div>
              <canvas id="zr_0" width="120" height="100" class="absolute right-0"
                style="position: absolute; top: -15px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;">
              </canvas>
            </div>
          </div>
          <div class="flex align-items-center justify-between mt-6">
            <div class="flex align-items-center text-gray-400">
              自上周以来
              <span class="">
                <el-icon class="mx-1">
                  <Top />
                </el-icon>
                20.5%
              </span>
            </div>
            <div>
              <el-icon>
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="12" :xs="24" class="mb-3">
        <el-card class="rounded-lg cursor-pointer text-gray-400">
          <div class="">总退款</div>
          <div class="flex align-items-center justify-between font-size-5xl relative mt-2 text-black">
            <div>
              <span>¥ 425.00</span>
            </div>
            <div>
              <canvas id="zr_1" width="120" height="100" class="absolute right-0"
                style="position: absolute; top: -15px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;">
              </canvas>
            </div>
          </div>
          <div class="flex align-items-center justify-between mt-6">
            <div class="flex align-items-center">
              自上周以来
              <span class="text-green-500">
                <el-icon class="mx-1">
                  <Bottom />
                </el-icon>
                20.5%
              </span>
            </div>
            <div>
              <el-icon>
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="12" :xs="24" class="mb-3">
        <el-card class="rounded-lg cursor-pointer text-gray-400">
          <div class="">活跃用户(个)</div>
          <div class="flex align-items-center justify-between font-size-5xl relative mt-2 text-black">
            <div>
              <span>1010</span>
            </div>
            <div>

            </div>
          </div>
          <div class="flex align-items-center justify-between mt-6">
            <div class="flex align-items-center">
              自上周以来
              <span class="text-red-500">
                <el-icon class="mx-1">
                  <Top />
                </el-icon>
                20.5%
              </span>
            </div>
            <div>
              <el-icon>
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="12" :xs="24" class="mb-3">
        <el-card class="rounded-lg cursor-pointer text-gray-400">
          <div class="">产生订单(个)</div>
          <div class="flex align-items-center justify-between font-size-5xl relative mt-2 text-black">
            <div>
              <span>500</span>
            </div>
            <div>

            </div>
          </div>
          <div class="flex align-items-center justify-between mt-6">
            <div class="flex align-items-center">
              自上周以来
              <span class="text-green-500">
                <el-icon class="mx-1">
                  <Bottom />
                </el-icon>
                20.5%
              </span>
            </div>
            <div>
              <el-icon>
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row gutter="20" class="font-size-base">
      <el-col :lg="18" :md="24" class="mb-3">
        <el-card>
          <div ref="echarsDom1" style="width: 100%; height: 400px"></div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="24" class="mb-3">
        <el-card class="">
          <div ref="echarsDom2" style="width: 100%; height: 400px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row gutter="20" class="font-size-base">
      <el-col :lg="12" :md="24" class="mb-3">
        <el-card>
          <div class="h-10 flex align-center justify-between">
            <div> <span class="font-size-xl font-bold">表格信息</span>（1）</div>
            <div>
              <el-switch v-model="table1" active-text="本周" inactive-text="近三天" />
            </div>
          </div>
          <el-table :data="tableData" style="width: 100%" max-height="300">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default="scope">
                <el-button link type="primary" size="small">
                  view
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :lg="12" :md="24" class="mb-3">
        <el-card>
          <div class="h-10 flex align-center justify-between">
            <div> <span class="font-size-xl font-bold">表格信息</span>（2）</div>
            <div>
              <el-switch v-model="table2" active-text="本周" inactive-text="近三天" />
            </div>
          </div>
          <el-table :data="tableData" style="width: 100%" max-height="300">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default="scope">
                <el-button link type="primary" size="small">
                  view
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card>
          <el-row>
            <el-col :span="24">
              <div class="h-10 flex align-center justify-between">
                <div> <span class="font-size-xl font-bold">柱状图</span>（件）</div>
              </div>
            </el-col>
            <el-col :lg="18" :md="24">
              <div ref="echarsDom3" style="width: 100%; height: 400px"></div>
            </el-col>
            <el-col :lg="6" :md="24" class="md:mt-10">
              <el-row>
                <el-col :lg="24" :md="12" style="height: 200px;">
                  <div class="font-size-base">
                    <p class="text-gray-400">本月出库数量（件）</p>
                    <div class="font-size-5xl relative mt-2 text-black">
                      <div>
                        <span>500</span>
                      </div>
                    </div>
                    <div class="mt-6">
                      自上周以来
                      <span class="text-green-500">
                        <el-icon class="mx-1">
                          <Bottom />
                        </el-icon>
                        20.5%
                      </span>
                    </div>
                  </div>
                </el-col>
                <el-col :lg="24" :md="12" style="height: 200px;">
                  <div class="font-size-base">
                    <p class="text-gray-400">本月入库数量（件）</p>
                    <div class="font-size-5xl relative mt-2 text-black">
                      <div>
                        <span>400</span>
                      </div>
                    </div>
                    <div class="mt-6">
                      自上周以来
                      <span class="text-green-500">
                        <el-icon class="mx-1">
                          <Bottom />
                        </el-icon>
                        20.5%
                      </span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { zr_0, zr_1 } from '@/utils/canvas'
import { getBaseZr_0, getBaseZr_1, getBaseZr_2 } from '@/api/base'
import * as echarts from 'echarts'

const table1 = ref(false)
const table2 = ref(false)
const tableData = ref([{
  date: '2016-05-01',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
},
{
  date: '2016-05-02',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
},
{
  date: '2016-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
},
{
  date: '2016-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
},
{
  date: '2016-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
},
{
  date: '2016-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
}])
const echarsDom1: Ref<HTMLElement | any> = ref(null)
const echarsDom2: Ref<HTMLElement | any> = ref(null)
const echarsDom3: Ref<HTMLElement | any> = ref(null)

const echartsInit = async () => {
  // 创建echarts初始化对象
  const myEcharts1 = echarts.init(echarsDom1.value)
  const myEcharts1Data = await getBaseZr_0() as any
  myEcharts1.setOption(myEcharts1Data)
  const myEcharts2 = echarts.init(echarsDom2.value)
  const myEcharts2Data = await getBaseZr_1() as any
  myEcharts2.setOption(myEcharts2Data)
  const myEcharts3 = echarts.init(echarsDom3.value)
  const myEcharts3Data = await getBaseZr_2() as any
  myEcharts3.setOption(myEcharts3Data)
}

const init = () => {
  zr_0()
  zr_1()
  echartsInit()
}
onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped></style>