<script setup>
import headJpg from "@/assets/images/header/header_pao.jpg"

</script>
<template>
  <div class="self_introduce">
    <div class="header_wrap">
      <img :src="headJpg" alt="" srcset="">
    </div>
    <div class="content_wrap">
      <div class="content_item">
        <h2>关于我</h2>
        <ul>
          <li>我是一名来自深圳的工程师，主职Web前端，偶尔也会做一点Flutter的项目。</li>
          <li>喜欢开源项目，相信互联网开源精神。</li>
        </ul>
      </div>
      <div class="content_item">
        <h2>联系我</h2>
        <ul>
          <li>
            <a href="https://github.com/demonskp" target="_blank">
              Github
            </a>
          </li>
        </ul>
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
    padding: 12px;
    padding-left: 22px;

    .content_item {
      margin-bottom: 22px;

      h2 {
        font-size: 22px;
        margin-bottom: 6px;
      }
    }
  }
}
</style>