
import axios from 'axios'

export default function ajax(url, data={}, type='GET'){
  return new Promise((resolve) => {
    let promise
    //发送ajax请求
    if(type === 'GET'){
      promise = axios.get(url,{
        parmas: data
      })
    }else{
      promise = axios.post(url, data)
    }

    //如果成功了，调用resolve
    promise.then(response => {
      resolve(response.data)
    })
    //失败了，直接显示异常就行
    .catch(error => {
      alert( '请求出错了：' +error.message)
    })
  })
}