<template>
	<el-scrollbar style="height: 100%">
		<logo></logo>
		<el-menu unique-opened :default-active="menuActive" :show-timeout="200" :collapse="isCollapse">
			<sidebar-item :menu="menus" :screen="screen" first :props="props" :collapse="isCollapse"></sidebar-item>
		</el-menu>
	</el-scrollbar>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useSidebarStore } from '@/store/sidebar';
import { useCommonStore } from '@/store/common'
import { useTagsStore } from '@/store/tags'
import logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'

const commonStore = useCommonStore()
const { isCollapse } = toRefs(commonStore)

const sidebarStore = useSidebarStore()
const { menus } = toRefs(sidebarStore)

const tagsStore = useTagsStore()
const { menuActive } = toRefs(tagsStore)

const props = {}
const screen = 1

</script>

<style scoped></style>