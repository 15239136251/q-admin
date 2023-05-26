<template>
  <div class="mt-3">
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
        <el-card>2</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { zr_0, zr_1 } from '@/utils/canvas'
import * as echarts from 'echarts'

const echarsDom1: Ref<HTMLElement | any> = ref(null)

const option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
onMounted(() => {
  zr_0()
  zr_1()

  //5.创建echarts初始化对象
  const myEcharts = echarts.init(echarsDom1.value)
  myEcharts.setOption(option)
})
</script>

<style lang="scss" scoped></style>