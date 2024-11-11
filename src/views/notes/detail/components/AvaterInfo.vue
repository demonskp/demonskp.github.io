<script setup>
import { MY_AVATAR } from "@/datas/common";
import { toRefs, defineProps } from "vue";

const props = defineProps({
  writer: {
    type: Object,
    default() {
      return {
        name: 'Demonskp',
        avater: MY_AVATAR,
      }
    }
  },
  time: String,
})
const { writer, time } = toRefs(props)
</script>
<template>
  <div class="avater_info">
    <img :src="writer.avater" :alt="writer.name">
    <div class="content">
      <div class="title">{{ writer.name }}</div>
      <div class="info">{{ time }}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.avater_info {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 18px 0 24px 0;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 8px;

    .title {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
    .info {
      color: #969696;
      font-size: 12px;
      margin-top: 6px;
    }
  }
}
</style>