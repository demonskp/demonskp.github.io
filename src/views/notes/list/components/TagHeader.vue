<script setup>
import { computed } from "vue"
import { TagMap } from '@/datas/tags'
import { ElDivider } from "element-plus";


const props = defineProps({
  tag: String,
  numb: Number,
})

const tagObj = computed(()=>{
  const obj = TagMap[props.tag] || {
    poster: '',
    description: '',
  };
  return obj;
})

</script>
<template>
  <div class="tag_header_wrap">
    <div class="tag_header">
      <img v-if="tagObj.poster" :src="tagObj.poster" alt="">
      <div class="info">
        <div class="title"><span v-if="!tagObj.poster">标签：</span>{{ props.tag }}</div>
        <div class="tips">收录了{{ props.numb }}篇文章</div>
      </div>
    </div>
    <ElDivider />
  </div>
</template>
<style lang="less" scoped>
.tag_header_wrap {
  padding: 25px 0;
  .tag_header {
    display: flex;

    img {
      margin-left: 25px;
      width: 78px;
      height: 78px;

      border: 1px solid #ddd;
      border-radius: 8px;
    }

    .info {
      margin-left: 25px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        display: inline;
        font-size: 21px;
        font-weight: 700;
        vertical-align: middle;
      }

      .tips {
        margin-top: 10px;
        font-size: 14px;
        color: #969696;
      }
    }
  }
}
</style>