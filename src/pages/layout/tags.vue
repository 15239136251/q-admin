<template>
    <div class="q-tags" v-if="showTag">
        <el-tabs
        v-model="active"
        type="card"
        :closable="tagLen !== 1"
        @edit="handleTabsEdit"
        @tab-click="openTag"
        >
        <el-tab-pane
          :key="item.label + index"
          v-for="(item, index) in taglist"
          :label="item.label"
          :name="item.path"
        >
        </el-tab-pane>
        </el-tabs>
  </div>
</template>
<script lang="ts" setup>
  import { ref, toRefs, computed, watch, onMounted } from 'vue'
  import type { TabPaneName } from 'element-plus'
  import { useTagsStore, Tag } from '@/store/tags'
import router from '@/router';

  const tagsStore = useTagsStore()

  const { taglist, tag, tagWel, showTag } = toRefs(tagsStore)
  const { DEL_TAG, DEL_ALL_TAG } = tagsStore

  const active = ref('')

  const tagLen = computed(() => {
    return taglist.value.length
  })

  const setActive = () => {
    active.value = tag.value.path
  }

  const findTag = (path: string) => {
    const tag =  taglist.value.find(_tag => _tag.path === path)
    const tagIndex =  taglist.value.findIndex(_tag => _tag.path === path)
    return {
      tag: tag as Tag,
      index: tagIndex
    }
  } 

  interface OpenTag extends Tag {
    paneName? :string
  }

  const openTag = (tab: OpenTag) => {
    let newTag: any;
    if (tab.paneName) {
      newTag = findTag(tab.paneName as string).tag
    } else {
      newTag = tab
    }

    router.push({
      path: newTag.path,
      query: newTag.query
    })
  }

  const closeAllTags = () => {
    DEL_ALL_TAG()
    router.push({
      path: tagWel.value.path,
      query: tagWel.value.query
    })
  }

  const handleTabsEdit = (
    targetName: TabPaneName | undefined,
    action: 'remove' | 'add'
  ) => {
    if (action === "remove") {
      let {tag: _tag, index} = findTag(targetName as string);
      console.log(_tag);
      DEL_TAG(_tag as Tag)
      if (tag.value.path === _tag?.path) {
        const key = index === 0 ? index : index - 1
        _tag = taglist.value[key]; //如果关闭本标签让前推一个
        openTag(_tag)
      }
      // this.$store.commit("DEL_TAG", tag);
      // if (tag.value === this.tag.value) {
      //   tag = this.tagList[key === 0 ? key : key - 1]; //如果关闭本标签让前推一个
      //   this.openTag(tag);
      // }
    }
  }

  watch(tag, () => {
    setActive()
  })

  onMounted(() => {
    setActive()
  })
</script>
<style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
</style>