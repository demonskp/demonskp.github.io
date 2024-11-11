<script setup>
import SideBar from "./components/SideBar.vue"
import HeadMenu from "./components/HeadMenu.vue"
</script>
<template>
  <div class="layout">
    <HeadMenu />
    <div class="content_wrap">
      <div class="content">
        <router-view />
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.layout {
  background-color: #f9f9f9;

  .content_wrap {
    display: flex;
    justify-content: center;

    width: 100%;
    min-height: 100%;

    .content {
      width: 730px;
      background: #fff;
      border-radius: 4px;
    }
  }
}
</style>