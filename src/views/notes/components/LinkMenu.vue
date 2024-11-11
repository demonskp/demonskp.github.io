<script setup>
import { effect, ref } from "vue";
const list = ref([]);

effect(() => {
  setTimeout(() => {
    const elList = document.querySelectorAll("h1,h2,h3,h4,h5");
    const itemList = [];
    const map = {
      "h1": 1,
      "h2": 2,
      "h3": 3,
      "h4": 4,
      "h5": 5,
    }
    elList.forEach(el => {
      itemList.push({
        title: el.innerText,
        lv: map[el.tagName.toLowerCase()],
        el,
      })
    })

    list.value = getMarginNum(itemList)
  }, 0)
})

function getMarginNum(list = []) {
  const marginLv = [];
  const result = list.map(item => {
    const lv = findLv(item.lv);
    marginLv.push({
      lv,
      meta: item.lv,
    });

    return {
      ...item,
      margin: lv * 10,
    }
  })

  function findLv(lv) {
    let index = marginLv.length - 1;
    let flag = false
    let result;
    while (!flag) {
      const preLvItem = marginLv[index];
      if (preLvItem === undefined) {
        result = 1;
        flag = true;
      } else if (lv > preLvItem.meta) {
        result = preLvItem.lv + 1;
        flag = true;
      } else if (lv === preLvItem.meta) {
        result = preLvItem.lv;
        flag = true;
      } else {
        index -= 1;
      }
    }

    return result;
  }

  return result;
}

function scrollTo(el) {
  console.log(el)
  el.scrollIntoView();
  // document.querySelector("#app").scroll(0, el.scrollHeight)
}

</script>
<template>
  <div class="link_menu">
    <div v-for="(item, index) in list" :key="index" class="menu_item" :style="`margin-left:${item.margin}px;`"
      @click="scrollTo(item.el)">
      {{ item.title }}</div>
  </div>
</template>
<style lang="less" scoped>
.link_menu {
  background-color: #fff;
  padding: 10px 12px;
  margin-left: 12px;
  color: var(--text-color);
  font-size: var(--font-size-lg);

  .menu_item {
    cursor: pointer;
    padding: 6px 0;

    &:hover {
      color: var(--text-color-link);
    }
  }
}
</style>
<style>
h1,
h2,
h3,
h4,
h5 {
  scroll-margin-top: calc(var(--head-height) + 24px);
}
</style>