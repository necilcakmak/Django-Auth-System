import axios from "axios";

export const getPosts = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/post/post-list`);
};
