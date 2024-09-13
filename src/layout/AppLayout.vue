<script setup>
import SideBar from "./SideBar.vue";
import TopBar from "./TopBar.vue";
</script>

<template>
  <TopBar />
  <div class="tw-flex">
    <SideBar />
    <router-view />
  </div>
</template>

<style scoped></style>