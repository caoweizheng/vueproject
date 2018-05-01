import axios from 'axios'

const baseUrl = 'http://10.3.133.83:8888/'

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

import router from '../router/router.js';
export default {

    get(_url, _params = {}){


        return new Promise((resolve, reject) => {
            axios({
                method:'get',
                url:filterUrl(_url),
                data:_params,
                headers:{
                    'token':window.localStorage.getItem('username')
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],

            }).then((res) => {
                console.log(res.data.state)
                console.log(res.data.msg)
                     
                if(!res.data.state && res.data.msg=='NoState'){

                    router.push({name:'login'})
                } else {
                    resolve(res)
                    
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    post(_url, _params = {}){
             
        // var params = new URLSearchParams();
        // params.append('username', _params.username);
        // params.append('password', _params.password);

        return new Promise((resolve, reject) => {

            axios({
                method:'post',
                url:filterUrl(_url),
                data:_params,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'token':window.localStorage.getItem('username')
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
            }).then((res) => {
                resolve(res)                     
            }).catch((error) => {
                reject(error)
            })
        })
    }
}