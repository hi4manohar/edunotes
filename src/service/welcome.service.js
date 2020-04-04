import axios from "axios";
import * as appConfig from "../config/index.config";

export const welcomeService = {
  getWelcomeData,
  getBoardList,
  getclasslist
};

function getWelcomeData() {
  return new Promise((resolve, reject) => {
    axios
      .get(appConfig.API_URL + "start/getwelcome")
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

function getBoardList() {
  return new Promise((resolve, reject) => {
    axios
      .get(appConfig.API_URL + "start/getboardlist")
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

function getclasslist() {
  return new Promise((resolve, reject) => {
    axios
      .get(appConfig.API_URL + "start/getclasslist")
      .then(function(response) {
        if (response.status === 200) {
          if (response.data.status === true) {
            resolve({
              status: true,
              data: response.data.data
            });
          } else {
            reject(response.data.msg);
          }
        } else {
          reject("No Content Found");
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
}
