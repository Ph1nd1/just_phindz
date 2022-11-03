<template>
  <div
    class="landing-wrapper"
    :style="{ 'background-image': `url(${background})` }"
  >
    <div class="landing-content">
      <div class="landing-header">{{ header }}</div>
      <div class="landing-desc">{{ desc }}</div>
    </div>
  </div>
  <ProfileView :profile-config="store.config.profileView" />
  <ProjectsView :project-view="store.config.projectsView" />
</template>

<script setup>
import ProjectsView from "./ProjectsView.vue";
import ProfileView from "./ProfileView.vue";
import { useStore } from "../stores/profile";
import { computed } from "vue";

const store = useStore();

const header = computed(() => {
  return store.config.landingView.header;
});

const desc = computed(() => {
  return store.config.landingView.desc;
});

const background = computed(() => {
  return store.config.landingView.backgroundImg;
});
</script>

<style scoped>
.landing-wrapper {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.landing-content {
  position: absolute;
  background: rgba(255, 255, 255, 0.649);
  width: 80%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.landing-header {
  font-family: cursiveFont;
  font-size: 13rem;
}
.landing-desc {
  font-family: Courier New;
  font-size: 2rem;
  text-align: end;
}
</style>
