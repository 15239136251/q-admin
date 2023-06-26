/* tags.ts */

import { getStore, setStore } from "@/utils/storage"
import { defineStore } from "pinia"

import config from '@/config/index'
import { identical } from "@/utils/utils"
const { tagWel } = config

export interface Tag {
    label: string
    path: string
    query?: any
    params?: any
    close?: boolean
}

const isFirstPage = false

// 处理首个标签
const setFistTag = (list: Tag[]) => {
    if (list.length === 1) {
        list[0].close = false
    } else {
        list.forEach(ele => {
            if (ele.path === tagWel.path && isFirstPage === false) {
                ele.close = false
            } else {
                ele.close = true
            }
        })
    }
}

interface TagsStore {
    tag: Tag,
    taglist: Tag[],
    tagWel: Tag,
    showTag: boolean
}

export const useTagsStore = defineStore('tagsStore', {
    state: (): TagsStore => {
        return {
            taglist: getStore({ name: 'taglist' }) || [tagWel],
            tag: getStore({ name: 'tag' }) || tagWel,
            tagWel: tagWel,
            showTag: false
        }
    }, 
    actions: {
        // 添加标签
        ADD_TAG(tag: Tag) {
            this.tag = tag
            setStore({ name: 'tag', content: this.tag })
            if (this.taglist.some(_tag => identical(_tag, tag))) return
            this.taglist.push(tag)
            setFistTag(this.taglist)
            setStore({ name: 'taglist', content: this.taglist })
        },

        // 删除单个标签
        DEL_TAG(tag: Tag) {
            this.taglist = this.taglist.filter(_tag => {
                return !identical(_tag, tag)
            })
            setFistTag(this.taglist)
            setStore({ name: 'taglist', content: this.taglist })
        },

        // 删除全部标签
        DEL_ALL_TAG() {
            this.taglist = [this.tagWel]
            setStore({ name: 'taglist', content: this.taglist })
        },

        // 修改标签列表
        SET_TAG_LIST(taglist: Tag[]) {
            this.taglist = taglist
            setStore({ name: 'taglist', content: this.taglist })
        }
    },
    getters: {
        menuActive(): string {
            return this.tag.path
        }
    }
})