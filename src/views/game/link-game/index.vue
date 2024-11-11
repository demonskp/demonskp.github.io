<script setup>
import { ElMessageBox, ElDialog, ElButton } from "element-plus";
import { onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { gameApi } from "../../../api";
import LinkItem from "./LinkItem.vue";
import { Howl } from "howler";

import wowSoundSrc from "../../../assets/sounds/link-game/wow.mp3";
import unbelievableSrc from "../../../assets/sounds/link-game/unbelievable.mp3";
import goodSrc from "../../../assets/sounds/link-game/good.mp3";
import victorySrc from "../../../assets/sounds/link-game/victory.mp3";
import errAoSrc from "../../../assets/sounds/link-game/err-ao.mp3";
import bgSrc from "../../../assets/sounds/link-game/bg.mp3";

const spellArr = ref([]);

const score = ref(0);
const leftArr = ref([]);
const rightArr = ref([]);
const leftSelect = ref("");
const rightSelect = ref("");
const rightCheckMap = ref({});
const router = useRouter();
const dialogShow = ref(true);

const unbilivableSound = new Howl({
  src: unbelievableSrc,
});

const wowSound = new Howl({
  src: wowSoundSrc,
});

const goodSound = new Howl({
  src: goodSrc,
});

const victorySound = new Howl({
  src: victorySrc,
});
const errAoSound = new Howl({
  src: errAoSrc,
});

const bgSound = new Howl({
  src: bgSrc,
  loop: true,
  volume: 0.2,
});

onUnmounted(() => {
  bgSound.stop();
});

function mixArr(arr) {
  let left = [];
  let right = [];

  arr.forEach((item) => {
    left.push({ name: item.char, alive: true });
    right.push({ name: item.pinyin, alive: true });
  });

  left.sort(() => 0.5 - Math.random());
  right.sort(() => 0.5 - Math.random());

  return {
    left,
    right,
  };
}

function createCheckMap(arr) {
  const result = {};
  arr.forEach((item) => {
    result[item.char] = item.pinyin;
  });

  return result;
}

async function init() {
  dialogShow.value = false;
  const wordsItem = await gameApi.queryPinyinWords("连连看");
  spellArr.value = wordsItem?.words.slice(0, 16) || [];

  if (!spellArr.value.length) {
    await ElMessageBox.alert("请先配置词库", {
      "confirm-button-text": "去配置",
    });
    router.push({ name: "game-settings" });
    return;
  }

  const { left, right } = mixArr(spellArr.value);
  leftArr.value = left;
  rightArr.value = right;
  rightCheckMap.value = createCheckMap(spellArr.value);
  score.value = 0;
  leftSelect.value = "";
  rightSelect.value = "";

  bgSound.play();
}

function itemClickHandle(item, type) {
  if (type === "left") {
    leftSelect.value = item.name;
  }
  if (type === "right") {
    rightSelect.value = item.name;
  }
  checkRight();
}

function yesSoundsPlay() {
  const yesSounds = [unbilivableSound, wowSound, goodSound, unbilivableSound];
  const yesIndex = Math.round(Math.random() * 3);
  yesSounds[yesIndex]?.play();
}

function victorySoundPlay() {
  victorySound.play();
}

function errSoundPlay() {
  errAoSound.play();
}

function checkRight() {
  const key = leftSelect.value;
  const val = rightSelect.value;

  console.log(key, val);
  if (!(key && val)) {
    return;
  }

  if (rightCheckMap.value[key] !== val) {
    errSoundPlay();
  }

  // 消除
  if (rightCheckMap.value[key] === val) {
    leftArr.value.map((item) => {
      if (item.name === key) {
        item.alive = false;
      }
    });
    rightArr.value.map((item) => {
      if (item.name === val) {
        item.alive = false;
      }
    });
    score.value = score.value + 10;
    leftSelect.value = "";
    rightSelect.value = "";

    if (!leftArr.value.filter((item) => item.alive).length) {
      bgSound.stop();
      victorySoundPlay();
      setTimeout(() => {
        alert("恭喜你取得胜利");
        init();
      });
    } else {
      yesSoundsPlay();
    }
  }
}
</script>
<template>
  <div class="link-game">
    <div class="game-title">
      <div class="main-title">文字连连看</div>
      <div>得分：{{ score }}</div>
    </div>
    <div class="game-playground">
      <div class="game-pad">
        <LinkItem
          v-for="(item, index) in leftArr"
          :isSelect="leftSelect === item.name"
          :key="item.name + index"
          :item="item"
          @click="itemClickHandle(item, 'left')"
        />
      </div>
      <div class="game-pad">
        <LinkItem
          v-for="(item, index) in rightArr"
          :isSelect="rightSelect === item.name"
          :key="item.name + index"
          :item="item"
          @click="itemClickHandle(item, 'right')"
        />
      </div>
    </div>
  </div>
  <ElDialog v-model="dialogShow" :show-close="false" width="570px">
    <template #header="{ titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass" style="text-align: center">
        连连看
      </h4>
    </template>
    <div style="text-align: center">
      <ElButton @click="init">开始游戏</ElButton>
    </div>
  </ElDialog>
</template>
<style lang="less" scoped>
@font-face {
  font-family: "HYJunKaiW";
  src: url("../../../assets/fonts/HYJunKaiW.ttf");
}
.link-game {
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: HYJunKaiW;

  .game-title {
    color: #fff;
    margin: 50px 0;
    text-align: center;
    .main-title {
      font-size: 40px;
      font-weight: bold;
      color: transparent;
      background-image: repeating-linear-gradient(
        135deg,
        transparent 0,
        transparent 1px,
        white 2px,
        white 4px
      );
      -webkit-background-clip: text;
    }
  }

  .game-playground {
    display: flex;
    justify-content: space-between;
    width: 800px;
    .game-pad {
      flex: 1;
      margin: 0 5px;
      background: #fff;
      border-radius: 8px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
}
</style>
