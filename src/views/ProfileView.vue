<template>
  <div class="profile-view-wrapper">
    <div class="profile-view-img">
      <img :src="profileConfig.profileImg" alt="Profile Picture" />
    </div>
    <div class="profile-view-content">
      <div class="profile-view-title">{{ profileConfig.title }}</div>
      <span class="profile-view-desc">{{ profileConfig.desc }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profileConfig: Object,
});
</script>

<style scoped>
.profile-view-wrapper {
  margin: 1rem;
  display: flex;
}
.profile-view-content {
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profile-view-title {
  font-size: 3rem;
  font-family: Monaco;
  margin-bottom: 2rem;
  text-align: center;
}
.profile-view-desc {
  padding: 0 2rem;
  font-family: Courier New;
  font-size: 1.5rem;
}
.profile-view-img {
  width: 50vw;
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 40vw;
  padding: 0.5rem;
  border: 0.3rem solid white;
}
</style>
