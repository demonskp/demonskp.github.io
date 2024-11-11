<script setup>
import { computed, defineProps, toRefs, } from 'vue';
import { ElImage } from 'element-plus'

const props = defineProps({
  item: {
    type: Object,
    default(){
      return {
        id: String,
        title: String,
        description: String,
        createTime: String,
      }
    }
  }
});

const { item } = toRefs(props);

const description = computed(()=>{
  if(!item.value.description) return '';
  return item.value.description.slice(0, 80) + '...'
})

</script>

<template>
  <div class="card">
    <div class="content">
      <router-link class="title" :to="`/notes/detail/${item.id}`">
        <div>{{ item.title }}</div>
      </router-link>
      <div class="description">{{ description }}</div>
      <div class="meta">{{ item.createTime }}</div>
    </div>
    <ElImage fit="cover" v-if="item.poster" class="image" :src="item.poster" lazy alt="预览" />
  </div>
</template>

<style lang="less" scoped>
.card {
  width: calc(100% - 24px);
  display: flex;
  align-items: center;
  padding: 16px 12px;

  border-bottom: 1px solid #f0f0f0;

  .content {
    flex: 1;
    color: #999;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #333;

      &:visited {
        color: #333;
      }
    }
    .description {
      font-size: 13px;
      line-height: 24px;
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .image {
    width: 150px;
    height: 100px;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>