<script setup>
import { MenuList } from '@/datas/menu';
</script>
<template>
  <el-affix>
    <div class="head_menu">
      <div class="content">
        <div class="content_main">
          <div class="logo">
            <router-link to="/home">
              <img src="/icon.ico" alt="" srcset="">
            </router-link>
          </div>
          <div class="nav-bar">
            <router-link v-for="item in MenuList" :key="item.key" :to="item.path" class="nav-bar-item">
              {{ item.label }}
            </router-link>
          </div>
        </div>

        <div class="content_options">
          <a href="https://github.com/demonskp" target="_blank">
            <i class="iconfont icon-github" style="font-size: 24px;" />
          </a>
        </div>
      </div>
    </div>
  </el-affix>
</template>
<style lang="less" scope>
.head_menu {
  height: var(--head-height);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 12px;

  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, .05);

  .content {
    width: 1020px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content_main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;

      .logo {
        cursor: pointer;
        margin-right: 12px;
      }

      .nav-bar {
        display: flex;
        height: 100%;

        .nav-bar-item {
          color: var(--text-color);
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 12px;

          &:hover {
            color: var(--text-color-link);
            border-bottom: 2px solid var(--text-color-link);
          }
        }
      }
    }

    .content_options {

      a {
        display: flex;
        align-items: center;
      }
    }

  }
}
</style>