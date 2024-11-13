<script setup>
import SideBar from "./components/SideBar.vue"
</script>
<template>
  <div class="content_wrap">
    <div class="content">
      <router-view />
    </div>
    <div>
      <SideBar />
    </div>
  </div>
</template>
<style lang="less" scoped>
.content_wrap {
  display: flex;
  justify-content: center;
  padding-top: 12px;

  width: 100%;
  min-height: 100%;

  .content {
    width: 730px;
    background: #fff;
    border-radius: 4px;
  }
}
</style>