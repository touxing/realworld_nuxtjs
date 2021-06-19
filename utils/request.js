/**
 * 基于axios封装请求模块
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// todo: 请求拦截

// todo: 响应拦截

export default instance