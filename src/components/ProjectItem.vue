<template>
  <div class="project-item" v-for="item in list" :key="item">
    <img :src="item.image" alt="" />
    <div class="project-title">{{ item.title }}</div>
  </div>
</template>

<script setup>
defineProps({
  list: Array,
});
</script>

<style scoped>
img {
  width: 100%;
}
.project-title {
  font-size: 2rem;
  text-align: center;
}
</style>
