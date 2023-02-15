import axios from "axios";

const config = {
  url: "https://api.hnpwa.com/v0/",
};

function fetchNewsList() {
  return axios.get(`${config.url}news/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.url}jobs/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.url}ask/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.url}user/${username}.json`);
}

function fetchAskInfo(id) {
  return axios.get(`${config.url}item/${id}.json`);
}
export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchAskInfo,
};
