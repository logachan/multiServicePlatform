import axios from "axios"
import { IsBaseURL } from "./interceptor"




const PostService = (url, body) => {
    IsBaseURL()
    return new Promise(function (resolve, reject) {
        axios.post(url, body, {})
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

const getService = (url) => {
    IsBaseURL()
    return new Promise(function(resolve, reject){
        axios.get(url)
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const commonService = {
    PostService,
    getService
}
