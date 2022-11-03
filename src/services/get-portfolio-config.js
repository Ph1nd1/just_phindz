import axios from "axios";
import { useStore } from "../stores/profile";

export const getPortfolioConfig = async () => {
  const store = useStore();
  return await axios
    .get("src/constants/profileConfig.json")
    .then((res) => {
      store.config = res.data;
    })
    .catch((err) => {
      console.log("error", err);
    });
};
