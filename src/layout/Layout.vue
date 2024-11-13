<script setup>
import HeadMenu from './HeadMenu.vue';
</script>
<template>
  <div class="layout">
    <HeadMenu />
    <div class="content_wrap">
      <router-view />
    </div>
  </div>
</template>
<style lang="less" scoped>
.layout {
  height: 100%;
  width: 100%;

  .content_wrap {
    width: 100%;
    min-height: calc(100% - var(--head-height));
    background-color: #f9f9f9;
  }
}
</style>