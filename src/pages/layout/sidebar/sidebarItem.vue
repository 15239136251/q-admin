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
                <el-icon v-if="item[iconKey].indexOf('icon-') != -1" >
                    <i class="iconfont" :class="item[iconKey]"></i>
                </el-icon>
                <el-icon v-else>
                    <component :is="item[iconKey]" />
                </el-icon>
                <span :alt="item[pathKey]">{{ item[labelKey] }}</span>
            </el-menu-item>
            <!-- 有下级菜单 -->
            <el-sub-menu
                v-else-if="!validatenull(item[childrenKey])"
                :index="item[pathKey]"
                :key="item[labelKey]"
            >
                <template #title>
                    <el-icon v-if="item[iconKey].indexOf('icon-') != -1" >
                        <i class="iconfont" :class="item[iconKey]"></i>
                    </el-icon>
                    <el-icon v-else>
                        <component :is="item[iconKey]" />
                    </el-icon>
                    <span :alt="item[pathKey]" :class="{'el-menu--display':collapse && first}">{{ item[labelKey] }}</span>
                </template>
                <template v-for="(child, cindex) in item[childrenKey]">
                    <el-menu-item 
                        v-if="validatenull(child[childrenKey])"
                        :index="child[pathKey]"
                        :key="child[labelKey]"
                        :class="{'is-active': vaildActive(child)}"
                        @click="open(child)"
                    >
                        <el-icon v-if="child[iconKey].indexOf('icon-') != -1" >
                            <i class="iconfont" :class="child[iconKey]"></i>
                        </el-icon>
                        <el-icon v-else>
                            <component :is="child[iconKey]" />
                        </el-icon>
                        <span :alt="child[pathKey]">{{ child[labelKey] }}</span>
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
            </el-sub-menu>
        </template>
    </div>
</template>

<script setup lang="ts" name="sidebarItem">
import router from '@/router';
import { Menu } from '@/store/sidebar';
import { validatenull } from '@/utils/valldate';
import { defineProps, computed, toRefs, ComputedRef } from 'vue'
import config from './config'

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
console.log("🚀 ~ file: sidebarItem.vue:101 ~ menu:", menu)

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
    router.push({
        path: item.path,
        query: item.query
    })
}

console.log(validatenull([{
        label: '通知公告',
        path: '/dashbord/brand',
        icon: 'icon-brand',
        isOpen: 1,
    }]), 123)
</script>

<style scoped>

</style>