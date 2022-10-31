import { defineStore } from "pinia";

export const useStore = defineStore("profile", {
  state: () => ({
    projectList: [
      { title: "Project One", image: "src/assets/logo.svg" },
      { title: "Project Two", image: "src/assets/logo.svg" },
      { title: "Project Three", image: "src/assets/logo.svg" },
    ],
  }),
});
