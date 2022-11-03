<template>
  <div class="landing-wrapper">
    <div class="landing-content">
      <div class="landing-header">Hi, I'm Phindi</div>
      <div class="landing-desc">A Junior Software Engineer</div>
    </div>
  </div>
  <ProfileView />
  <ProjectsView />
</template>

<script setup>
import ProjectsView from './ProjectsView.vue'
import ProfileView from './ProfileView.vue';
</script>

<style scoped>
.landing-wrapper {
  height: 100%;
  background-image: url("../assets/desk-top.jpg");
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
