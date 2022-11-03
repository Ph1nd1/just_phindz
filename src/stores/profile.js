import { defineStore } from "pinia";

export const useStore = defineStore("profile", {
  state: () => ({
    config: {},
  }),
});
