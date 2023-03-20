<template>
    <div class="menu-wrapper">
        <template v-for="item in menu">
            <!-- 没有下级菜单 -->
            <el-menu-item 
                v-if="validatenull(item[childrenKey])"
                :index="item[pathKey]"
                :key="item[labelKey]"
                :class="{'is-active': vaildActive(item)}"
                @click="open(item)"
            >
                <i :class="item[iconKey]"></i>
                <span slot="title" :alt="item[pathKey]">{{ item[labelKey] }}</span>
            </el-menu-item>
            <!-- 有下级菜单 -->
            <el-submenu
                v-else-if="!validatenull(item[childrenKey])"
                :index="item[pathKey]"
                :key="item[labelKey]"
            >
                <template slot="title">
                    <i :class="item[iconKey]"></i>
                    <span slot="title" :alt="item[pathKey]" :class="{'el-menu--display':collapse && first}">{{ item[labelKey] }}</span>
                </template>
                <template v-for="(child, cindex) in item[childrenKey]">
                    <el-menu-item 
                        v-if="validatenull(item[childrenKey])"
                        :index="item[pathKey]"
                        :key="item[labelKey]"
                        :class="{'is-active': vaildActive(item)}"
                        @click="open(item)"
                    >
                        <i :class="item[iconKey]"></i>
                        <span slot="title" :alt="item[pathKey]">{{ item[labelKey] }}</span>
                    </el-menu-item>
                    <!-- 下级菜单 -->
                    <sidebar-item 
                        v-else-if="child.rules[1] === '1'"
                        :menu="[child]"
                        :key="cindex"
                        :props="props"
                        :screen="screen"
                        :collapse="collapse"
                    ></sidebar-item>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script setup lang="ts" name="sidebarItem">
import { validatenull } from '@/utils/valldate';
import { defineProps, computed, toRefs, ComputedRef } from 'vue'
import config from './config'

interface Menu {
    label: string
    path: string
    icon: string
    children?: Menu[]
    isOpen: boolean
}
const props = defineProps({
    menu: {
        type: Array<Menu>
    },
    screen: {
        type: Number
    },
    first: {
        type: Boolean,
        default: false
    },
    props: {
        type: Object,
        default: () => {
          return {}
        }
    },
    collapse: {
        type: Boolean
    }
})

const { menu, screen, first, collapse } = toRefs(props)

const labelKey = computed(() => {
    return props.props.label || config.propsDefault.label
})
const pathKey = computed(() => {
    return props.props.path || config.propsDefault.path
})
const iconKey = computed(() => {
    return props.props.icon || config.propsDefault.icon
})
const childrenKey = computed(() => {
    return props.props.children || config.propsDefault.children
})
const isOpenKey: ComputedRef<string> = computed(() => {
    return props.props.isOpen || config.propsDefault.isOpen
})

const vaildActive = (item: Menu) => {
    if (validIsOpen(item)) return false
}
const validIsOpen = (item: Menu) => {
    if (item[isOpenKey.value] === 2) {
        return true
    }
}
const open = (item: Menu) => {
    console.log("🚀 ~ file: siderbarItem.vue:84 ~ open ~ item:", item)
}
</script>

<style scoped>

</style>