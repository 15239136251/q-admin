<template>
    <div class="q-logo">
        <transition name="fade">
            <span v-if="isCollapse" class="q-logo_subtitle" key="0">
                Q
            </span>
        </transition>
        <transition-group name="fade">
            <template v-if="!isCollapse">
                <span class="q-logo_title" key="1">Qhb Admin </span>
            </template>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useCommonStore } from '@/store/common'

const commonStore = useCommonStore()
const { isCollapse } = toRefs(commonStore)
</script>

<style lang="scss" scoped>
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-active {
    transition: opacity 2.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.q-logo {
    height: 60px;
    line-height: 60px;
    // background-color: var(--qp-logo-bg-color);
    font-size: 20px;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    // color: var(--qp-logo-text-color);
    z-index: 1998;

    &_title {
        display: block;
        text-align: center;
        font-weight: 300;
        font-size: 20px;
    }

    &_subtitle {
        display: block;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        // color: var(--qp-logo-text-color, #fff);
    }
}</style>