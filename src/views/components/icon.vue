<template>
  <div>
    <qb-icon @select="iconChange"></qb-icon>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'
import qbIcon from '@/components/Icon/index.vue'
import { ElMessage } from 'element-plus';
// import { } from 'vue3'

const iconChange = (name: string) => {
  ElMessage({
    type: 'success',
    message: name
  })

}
</script>

<style scoped>

</style>