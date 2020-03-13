import axios from 'axios';
import * as appConfig from '../config/index.config';

export const articleService = {
    articleList
};

async function articleList() {

    return new Promise((resolve, reject) => {

        axios.get(appConfig.API_URL + 'article-list').then(function(response) {
            console.log(response);
            if( response.data.status === true ) {
                resolve(response.data.data);
            } else {
                reject({
                    status: false,
                    msg: response.data.msg
                });
            }
        }).catch(function(error) {
            reject({
                status: false,
                msg: error
            });
        })

    })
}