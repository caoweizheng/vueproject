import axios from 'axios';

const baseUrl = 'http://10.3.133.83:8888/';

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}
 
export default {
    get(_url,_params = {}){
        return new Promise((resolve,reject) => {

            axios({
                url : filterUrl(_url),
                _params : _params,
                method:'get',
                headers:{
                    'token':window.localStorage.getItem('token')
                }
            }).then((res) =>{
                // 判断是否已经是登录状态 如果不是跳转到登录页面
                // if(!res.data.status && res.data.message == 'unauth'){
                //     router.push({name:'login'});
                // } else {
                    resolve(res.data);
                // }
            }).catch((error) => {
                reject(error);
            })
        })
    },
    post(_url,_params = {}){
        return new Promise((resolve,reject) => {
            axios({
				url: filterUrl(_url),
				method: 'post',
				data: _params,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
                    'auth':window.localStorage.getItem('token')
                },
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
					  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
                    return ret
				}], 
            }).then(res => {
				if(!res.data.status && res.data.error == "unauthorized"){
					router.push('login');
					return false;
				}				
                resolve(res.data)
            }).catch(error => {
				
            	reject(error)
            })
        })
    }
}

