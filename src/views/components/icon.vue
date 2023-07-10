<template>
  <div>
    <qb-icon @select="iconChange"></qb-icon>
  </div>
</template>

<script setup lang="ts">
import qbIcon from '@/components/Icon/index.vue'
import { ElMessage } from 'element-plus';
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()
const copy = async (text: string) => {
  try {
    await toClipboard(text)
    ElMessage({
      type: 'success',
      message: `复制成功: ${text}`
    })
  } catch (error) {
    ElMessage({
      type: 'error',
      message: '复制失败'
    })
  }
}
const iconChange = (name: string) => {
  copy(name)
}
</script>

<style scoped>

</style>