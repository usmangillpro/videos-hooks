import axios from "axios";

const KEY = "AIzaSyAhllsjzysJ5uFtviHEqOOf6NUgN9BmpgY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
