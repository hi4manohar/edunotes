import * as appConfig from "../config/index.config";
import store from "../store";

export const welcomeService = {
  getWelcomeData,
  getBoardList,
  getclasslist,
  getappdetails
};

function getWelcomeData() {
  return new Promise((resolve, reject) => {
    store.$axios
      .get(appConfig.API_URL + "start/getwelcome")
      .then(function(response) {
        if (response.data.status === true) {
          resolve({
            status: true,
            data: response.data.data
          });
        } else {
          resolve({
            status: false,
            msg: response.data.msg
          });
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

function getBoardList() {
  return new Promise((resolve, reject) => {
    store.$axios
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
    store.$axios
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

function getappdetails() {
  return new Promise((resolve, reject) => {
    store.$axios
      .get(appConfig.API_URL + "start/app_details")
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
