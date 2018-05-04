import axios from 'axios'

const baseUrl = 'http://10.3.133.83:8888/';
// const baseUrl = 'http://localhost:8888/';

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

import router from '../router/router.js';
export default {

    get(_url, _params = {}){
        document.querySelector('.markAll').style.display = 'block';
        return new Promise((resolve, reject) => {
            axios({
                method:'get',
                url:filterUrl(_url),
                data:_params,
                headers:{
                    'token':window.localStorage.getItem('phome')
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

                    router.push({name:'phome'})
                } else {
                    resolve(res)
                    document.querySelector('.markAll').style.display = 'none';
                    
                }
            }).catch((error) => {
                reject(error)
                document.querySelector('.markAll').style.display = 'none';
            })
        })
    },
    post(_url, _params = {}){
             
        // var params = new URLSearchParams();
        // params.append('username', _params.username);
        // params.append('password', _params.password);
        document.querySelector('.markAll').style.display = 'block';
        return new Promise((resolve, reject) => {

            axios({
                method:'post',
                url:filterUrl(_url),
                data:_params,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'token':window.localStorage.getItem('phone')
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
            }).then((res) => {

                if(!res.data.state && res.data.msg=='NoState'){

                    router.push({name:'userlogin'})
                } else {
                    resolve(res)
                    document.querySelector('.markAll').style.display = 'none';
                    
                }                   
            }).catch((error) => {
                document.querySelector('.markAll').style.display = 'none';
                reject(error)
            })
        })
    }
}