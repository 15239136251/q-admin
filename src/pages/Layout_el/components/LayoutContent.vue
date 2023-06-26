<template>
  <div>
    <tags></tags>
    <div class="">
      <transition name="fade-scale">
        <search v-show="false"></search>
      </transition>
      <div style="height:100%;overflow-y:auto;overflow-x:hidden;" id="q-view">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tags from './tags.vue'
</script>

<style scoped></style>