<script setup>
import headJpg from "@/assets/images/header/header_pao.jpg"

</script>
<template>
  <div class="self_introduce">
    <div class="header_wrap">
      <img :src="headJpg" alt="" srcset="">
    </div>
    <div class="content_wrap">
      <div>普通前端程序员</div>
      <div class="connect_wrap">
        <a href="https://github.com/demonskp" target="_blank">
          <i class="iconfont icon-github" style="font-size: 32px;" />
        </a>
        <a href="mailto:demonskp@qq.com">
          <i class="iconfont icon-weixin" style="font-size: 32px;" />
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.self_introduce {
  overflow: hidden;
  width: 100%;
  height: 100%;

  display: flex;

  .header_wrap {
    border-radius: 4px;
    overflow: hidden;
    margin-right: 15px;

    img {
      width: 200px;
      height: 100%;
      object-fit: cover;
    }
  }

  .content_wrap {
    position: relative;
    display: block;
    flex: 1;

    .connect_wrap {
      position: absolute;
      right: 15px;
      bottom: 15px;
      font-size: 14px;
      color: var(--text-color);

      a {
        color: var(--text-color);
      }

      i {
        font-size: 40px;
      }
    }
  }
}
</style>