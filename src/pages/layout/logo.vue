<template>
    <div class="q-logo">
        <transition name="fade">
            <span v-if="keyCollapse" class="q-logo_subtitle" key="0">
                Q
            </span>
        </transition>
        <transition-group name="fade">
            <template v-if="!keyCollapse">
                <span class="q-logo_title" key="1">Qhb Admin </span>
            </template>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
const keyCollapse = false
</script>

<style lang="scss">
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
    position: fixed;
    left: 0;
    top: 0;
    width: 240px;
    height: 64px;
    line-height: 64px;
    background-color: #20222a;
    font-size: 20px;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    color: rgba(255, 255, 255, 0.8);
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
        color: #fff;
    }
}</style>