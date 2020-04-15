import axios from "axios";
import * as appConfig from "../config/index.config";
import store from "../store";

export const answersService = {
    answersList,
};

function answersList(param) {
    return new Promise((resolve, reject) => {
        param.page = param.page ? param.page : "";
        param.tags = param.tags ? param.tags : "";
        axios.get(`${appConfig.API_URL}answers/list?page=${param.page}&tags=${param.tags}`, {
            headers: {
                "auth-token": store.state.user.token_id
            }
        }).then(function (response) {
            if (response.data.status === true) {
                resolve({
                    status: true,
                    data: response.data.data,
                    tags: response.data.tags
                });
            } else {
                reject({
                    status: false,
                    msg: response.data.msg
                });
            }
        })
        .catch(function (error) {
            reject({
                status: false,
                msg: error
            });
        });
    });
}
