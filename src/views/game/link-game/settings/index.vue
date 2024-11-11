<script setup>
import { ref } from "vue";
import { ElTabs, ElTabPane } from "element-plus";
import PinyinWords from "./PinyinWords/index.vue";

const activeName = ref("拼音词库");
</script>
<template>
  <div class="setting-page">
    <ElTabs v-model="activeName">
      <ElTabPane label="拼音词库" name="拼音词库"> <PinyinWords /> </ElTabPane>
      <ElTabPane label="Config" name="second">Config</ElTabPane>
    </ElTabs>
  </div>
</template>
<style lang="less" scoped>
.setting-page {
  padding: 20px;
}
</style>
