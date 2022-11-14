<template>
  <div
    class="project-item"
    v-for="item in list"
    :key="item"
    @click="goToProject(item.link)"
  >
    <img :src="item.image" alt="" />
    <div class="project-title">{{ item.title }}</div>
  </div>
</template>

<script setup>
defineProps({
  list: Array,
});

const goToProject = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
.project-item {
  width: 40%;
  margin: 1rem 0;
  border: 0.5rem solid whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0.3rem;
}
img {
  width: 100%;
}
.project-title {
  font-size: 2rem;
  text-align: center;
}
</style>
