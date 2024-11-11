<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["config", "click"])


function configClick() {
  emits("config")
}

function clickHandle(e) {
  e.stopPropagation();
  emits("click")
}


</script>
<template>
  <div class="game_card">
    <div class="game_backgroud">
      <img :src="icon" :alt="title">
    </div>
    <div class="game_content" @click="clickHandle">
      <div class="content_title">
        <span>Play</span>
        <i class="iconfont icon-shezhi" @click="configClick"></i>
      </div>
      <div class="content_main">
        <div class="title_line">{{ title }}</div>
        <div class="desc_line">{{ description }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.game_card {
  position: relative;
  display: inline-block;
  width: 200px;
  cursor: pointer;
  margin: 6px;

  &:hover .game_backgroud {
    transform: translateY(-40px);
  }

  .game_backgroud {
    transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background-color: #56c2e6;
    height: 70px;
    position: relative;
    bottom: -52px;
    z-index: -1;
    border-radius: 10px;
    overflow: hidden;
    text-align: right;

    img {
      width: 75px;
      height: 75px;
      object-fit: cover;
    }
  }

  .game_content {
    color: #fff;
    background-color: #1C204B;
    border-radius: 10px;
    height: 96px;
    padding: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .content_title {
      font-size: 14px;

      display: flex;
      justify-content: space-between;

      .icon-shezhi {
        color: #56c2e6;
        font-size: 20px;
      }
    }

    .content_main {
      .title_line {
        font-size: 20px;
        margin-bottom: 12px;
      }

      .desc_line {
        font-size: 12px;
      }
    }
  }
}
</style>