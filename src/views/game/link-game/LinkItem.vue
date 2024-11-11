<script setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: () => ({ name: "", alive: true }),
  },
  isSelect: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  if (!props.item.alive) {
    return "item-hide";
  }
  if (props.isSelect) {
    return "item-select";
  }
  return "item";
});
</script>

<template>
  <div :class="className">
    {{ props.item.name }}
  </div>
</template>
<style lang="less" scoped>
.item {
  width: 80px;
  height: 100px;
  background: bisque;
  margin: 5px 0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;

  cursor: pointer;
}

.item-select {
  &:extend(.item);

  border: 1px solid skyblue;
  color: skyblue;
  font-size: 35px;
}

.item-hide {
  &:extend(.item);
  pointer-events: none;
  opacity: 0;
}
</style>
