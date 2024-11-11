<script setup>
import { useRouter } from 'vue-router';
import GameCard from './components/GameCard.vue';
import linkGameIcon from '@/assets/images/link_game.svg';

const router = useRouter();

function routeTo(name) {
  router.push({ name })
}

</script>
<template>
  <GameCard title="连连看" description="拼音连连看" :icon="linkGameIcon" @click="routeTo('link-game')"
    @config="routeTo('link-game-settings')" />
  <GameCard title="塞尔达传说" description="塞尔达传说地图" :icon="linkGameIcon" @click="routeTo('zelda-game')"
    @config="routeTo('zelda-game-settings')" />
</template>
