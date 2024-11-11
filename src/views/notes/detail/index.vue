<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AvaterInfo from './components/AvaterInfo.vue'

const route = useRoute();


const detailMeta = computed(() => {
  if (!route.meta) return {};
  return {
    ...route.meta
  }
})

</script>
<template>
  <div class="markdown-wrap">
    <div class="title">{{ detailMeta.title }}</div>
    <AvaterInfo :time="detailMeta.createTime" />
    <router-view />
    <div v-if="detailMeta.tags && detailMeta.tags.length" class="tag_wrap">
      <span>标签：</span>
      <router-link v-for="tag in detailMeta.tags" :key="tag" class="tag" :to="`/notes?tag=${tag}`">{{ tag
        }}</router-link>
    </div>
  </div>
</template>
<style lang="less">
@import url('@/assets/css/markdown.less');
</style>
<style lang="less" scoped>
.markdown-wrap {
  padding: 0 24px;

  .title {
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    margin-top: 20px;
  }

  .tag_wrap {
    margin-bottom: 24px;
    margin-top: 12px;

    .tag {
      background-color: #f7f8fa;
      color: #515767;
      padding: 4px 6px;
      font-size: 14px;
      border-radius: 4px;
      margin-right: 4px;

      cursor: pointer;
    }
  }
}
</style>
