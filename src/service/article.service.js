import * as appConfig from "../config/index.config";
import store from "../store";

export const articleService = {
  articleList,
  articleDetails,
  subjectList,
  getBooksList,
  getBookDetails,
  syllabusArticleList,
  getArticleByChapter
};

function articleList(param) {
  return new Promise((resolve, reject) => {
    param.page = param.page ? param.page : "";
    store.$axios
      .get(appConfig.API_URL + "article-list", {
        params: {
          page: param.page,
          category: param.category ? param.category.trim() : ""
        },
        headers: {
          "auth-token": store.state.user.token_id
        }
      })
      .then(function(response) {
        if (response.data.status === true) {
          resolve({
            status: true,
            data: response.data.data
          });
        } else {
          console.log("articleListError", response);
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
    store.$axios
      .get(appConfig.API_URL + "article-list", {
        headers: {
          "auth-token": store.state.user.token_id
        }
      })
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

function subjectList() {
  return new Promise((resolve, reject) => {
    store.$axios
      .get(appConfig.API_URL + "class/get", {
        headers: {
          "auth-token": store.state.user.token_id
        }
      })
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

function syllabusArticleList(param) {
  return new Promise((resolve, reject) => {
    store.$axios
      .get(appConfig.API_URL + "class/get/" + param.subject, {
        headers: {
          "auth-token": store.state.user.token_id
        }
      })
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

function getArticleByChapter(param) {
  return new Promise((resolve, reject) => {
    store.$axios
      .get(appConfig.API_URL + "class/get/chapters/" + param.chaptername, {
        headers: {
          "auth-token": store.state.user.token_id
        }
      })
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
          reject("No Data Found");
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

function getBooksList() {
  return new Promise((resolve, reject) => {
    store.$axios
      .get(appConfig.API_URL + "books", {
        headers: {
          "auth-token": store.state.user.token_id
        }
      })
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

function getBookDetails(param) {
  return new Promise((resolve, reject) => {
    store.$axios
      .get(appConfig.API_URL + "books/" + param.bookid, {
        headers: {
          "auth-token": store.state.user.token_id
        }
      })
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
