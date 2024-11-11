<script setup>
import {notes} from "@/datas/notes";
import { computed, toRefs } from "vue";
import { useRoute } from "vue-router";
import NoteItem from './components/NoteItem.vue'
import TagHeader from "./components/TagHeader.vue";

const route = useRoute();

const list = computed(()=>{
  const { tag={} } = toRefs(route.query || {});
  let result = notes;
  if(tag.value !==undefined && tag.value !== null) {
    result = result.filter((item)=>item.tags?.find(tagStr=>tagStr === tag.value));
  }

  return result
})

</script>
<template>
  <div>
    <TagHeader v-if="route.query.tag" :tag="route.query.tag" :numb="list.length" />
    <NoteItem v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>
