import axios from "axios";
import * as appConfig from "../config/index.config";

export const userService = {
  setConfig
};

function setConfig(param) {
  return new Promise((resolve, reject) => {
    axios
      .get(appConfig.API_URL + "auth/config", {
        params: {
          board: param.board,
          class: param.class
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
