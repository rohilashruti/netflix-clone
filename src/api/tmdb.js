import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4ce420f119bf4ac2c30e4849afb42768",
    language: "en-US",
  },
});

export default instance;
