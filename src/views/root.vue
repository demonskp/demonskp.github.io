<template>
  <router-view />
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
if (route.path === "/") {
  router.replace({ name: "home" });
}
</script>
<style>
html, body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

* {
  padding: 0;
  margin: 0;
}
</style>
