<script setup>
import { ElTable, ElTableColumn, ElPopconfirm, ElButton } from "element-plus";
import { ref } from "vue-demi";
import { gameApi } from "@/api";
import AddDrawer from "./AddDrawer.vue";

const pinyinWords = ref([]);
const addDrawerShow = ref(false);

reseach();

async function deleteHandle(id) {
  await gameApi.deletePinyinWords(id);
  reseach();
}

async function reseach() {
  const result = await gameApi.getPinyinWords();
  pinyinWords.value = result;
}
</script>
<template>
  <div class="pinyin-words">
    <div>
      <ElButton @click="addDrawerShow = true">添加</ElButton>
    </div>
    <ElTable size="small" :data="pinyinWords" stripe border>
      <ElTableColumn prop="date" label="日期" />
      <ElTableColumn prop="game" label="游戏" />
      <ElTableColumn prop="length" label="长度" />
      <ElTableColumn prop="type" label="类型" />
      <ElTableColumn prop="_deal" label="操作">
        <template #default="{ row }">
          <ElPopconfirm title="确认删除?" @confirm="deleteHandle(row.id)">
            <template #reference>
              <a>删除</a>
            </template>
          </ElPopconfirm>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
  <AddDrawer v-model="addDrawerShow" title="添加拼音词库" @success="reseach" />
</template>
<style lang="less" scoped>
.pinyin-words {
  width: 70%;
  padding-top: 20px;
}
</style>
