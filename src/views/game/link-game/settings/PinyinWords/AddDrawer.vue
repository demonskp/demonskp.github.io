<script setup>
import { useVModel } from "@vueuse/core";
import {
  ElDrawer,
  ElButton,
  ElInput,
  ElRadioGroup,
  ElRadio,
  ElSelect,
  ElOption,
} from "element-plus";
import { defineProps, defineEmits, ref, computed } from "vue";
import { gameApi } from "@/api";
import { pinyin } from "pinyin-pro";
import { staticHelp } from "@/helper";

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue", "success"]);

const addDrawer = useVModel(props, "modelValue", emit);
const wordsInput = ref("");
const pinyinsInput = ref("");
const gameInput = ref("");
const type = ref("auto");
const gameList = ref(staticHelp.gameList);
const wordArray = computed(() => {
  const result = [];
  if (!wordsInput.value) {
    return [];
  }
  if (type.value === "auto") {
    let inputArr = [];
    if (wordsInput.value.search(/,|，|\s/) >= 0) {
      inputArr = wordsInput.value.split(/,|，|\s/).filter((str) => !!str);
    } else {
      inputArr = wordsInput.value.split("").filter((str) => !!str);
    }
    inputArr.forEach((str) => {
      const yin = pinyin(str, { removeNonZh: true });
      result.push({ char: str, pinyin: yin });
    });
  }
  if (type.value === "hand") {
    let charArr = [];
    let yinArr = [];
    if (wordsInput.value.search(/,|，|\s/) >= 0) {
      charArr = wordsInput.value.split(/,|，|\s/).filter((str) => !!str);
      yinArr = pinyinsInput.value.split(/,|，|\s/).filter((str) => !!str);
    } else {
      charArr = wordsInput.value.split(" ").filter((str) => !!str);
      yinArr = pinyinsInput.value.split(" ").filter((str) => !!str);
    }
    charArr.forEach((str, index) => {
      const yin = yinArr[index];
      result.push({ char: str, pinyin: yin });
    });
  }

  return result;
});

async function addHandle() {
  await gameApi.addPinyinWords({
    date: Date.now(),
    game: gameInput.value,
    length: wordArray.value.length,
    type: type.value,
    words: wordArray.value,
  });
  emit("success");
  cancelHandle();
}

function cancelHandle() {
  addDrawer.value = false;
}

function typeChangeHandle(val) {
  if (val === "hand" && !!wordsInput.value.trim()) {
    let yinArr = [];
    let result = "";
    const splitChar = wordsInput.value.search(/,|，|\s/) >= 0 ? /,|，|\s/ : " ";
    const charArr = wordsInput.value.split(splitChar).filter((str) => !!str);
    charArr.forEach((str) => {
      const yin = pinyin(str, { removeNonZh: true });
      yinArr.push(yin);
    });
    result = yinArr.join(wordsInput.value.search(/,|，|\s/) >= 0 ? "," : " ");
    pinyinsInput.value = result;
  }
}
</script>
<template>
  <ElDrawer v-model="addDrawer" title="添加拼音词库">
    <template #default>
      <div>
        <ElRadioGroup v-model="type" @change="typeChangeHandle">
          <ElRadio label="auto">智能生成</ElRadio>
          <ElRadio label="hand">手动输入</ElRadio>
        </ElRadioGroup>
      </div>
      <div>
        <div>
          <div>游戏</div>
          <ElSelect v-model="gameInput" placeholder="请选择">
            <ElOption
              v-for="item in gameList"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </ElSelect>
        </div>
        <div>
          <div>汉字</div>
          <ElInput v-model="wordsInput" type="textarea" />
        </div>
        <div v-show="type === 'hand'">
          <div>拼音</div>
          <ElInput v-model="pinyinsInput" type="textarea" />
        </div>
      </div>
      <div>
        <span class="worder-black" v-for="item in wordArray" :key="item.char">
          {{ item.char }}({{ item.pinyin }})
        </span>
      </div>
      <div>{{ wordArray.length }}</div>
    </template>

    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelHandle">取消</el-button>
        <el-button type="primary" @click="addHandle">添加</el-button>
      </div>
    </template>
  </ElDrawer>
</template>
<style lang="less" scoped>
.worder-black {
  margin: 3px;
}
</style>
