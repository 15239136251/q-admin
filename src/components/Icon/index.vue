<template>
  <el-card>
    <el-row>
      <el-col :span="24" v-for="item in iconTabs" :key="item.label">
        <h3 class="pt-5 pb-2">{{ item.label }}</h3>
        <el-row>
          <div class="icon cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800" v-for="icon in item.icons" :key="icon" @click="selectIcon(icon)">
            <el-icon>
              <component :is="icon"></component>
            </el-icon>
            <span class="font-size-md mt-4">{{ icon }}</span>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts" name="QbIcon">
import { ref, toRefs } from 'vue'
import icons from './icons.json'

interface IconProps {
  
}

const props = defineProps<IconProps>()
const emit = defineEmits(['select'])

const iconTabs = ref(Object.keys(icons).map(key => {
  return {
    label: key,
    icons: icons[key]
  }
}))

const selectIcon = (iconName: string) => {
  emit('select', iconName)
}


</script>

<style scoped>
.icon {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid var(--el-border-color-light);
}
</style>