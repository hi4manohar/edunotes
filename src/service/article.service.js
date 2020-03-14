import axios from "axios";
import * as appConfig from "../config/index.config";

export const articleService = {
  articleList,
  articleDetails
};

function articleList() {
  return new Promise((resolve, reject) => {
    axios
      .get(appConfig.API_URL + "article-list")
      .then(function(response) {
        if (response.data.status === true) {
          resolve({
            status: true,
            data: response.data.data
          });
        } else {
          reject({
            status: false,
            msg: response.data.msg
          });
        }
      })
      .catch(function(error) {
        reject({
          status: false,
          msg: error
        });
      });
  });
}

function articleDetails() {
  return new Promise((resolve, reject) => {
    axios
      .get(appConfig.API_URL + "article-list")
      .then(function(response) {
        console.log(response);
        if (response.data.status === true) {
          resolve({
            status: true,
            data: response.data.data
          });
        } else {
          reject({
            status: false,
            msg: response.data.msg
          });
        }
      })
      .catch(function(error) {
        reject({
          status: false,
          msg: error
        });
      });
  });
}
