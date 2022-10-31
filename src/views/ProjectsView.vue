<template>
  <div class="project-view-wrapper">
    <div class="project-view-title">Projects</div>
    <div class="project-view-items">
      <ProjectItem :list="store.projectList" />
    </div>
  </div>
</template>

<script setup>
import ProjectItem from "../components/ProjectItem.vue";
import { useStore } from "../stores/profile";

const store = useStore();
</script>

<style scoped>
.project-view-wrapper {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.project-view-title {
  font-size: 3rem;
  font-family: Monaco;
  margin-bottom: 2rem;
}
.project-view-items {
  display: flex;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
