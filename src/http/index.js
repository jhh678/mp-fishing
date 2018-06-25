import Vue from 'vue'
import fly from 'flyio'
import qs from 'qs'
import config from '@/config'
import apiUrls from '@/https/apis'

let timerId = {}
const TIMEOUT = 20000 // 接口20秒超时
// const NODE_ENV = (process.env.NODE_ENV || 'development').trim()
const BASE_URL = config.envConfig.apiOrigin
fly.config.baseURL = BASE_URL
fly.config.timeout = TIMEOUT
// fly.config.headers.common['Authorization'] = AUTH_TOKEN
fly.config.headers['Content-Type'] = 'application/json;charset=UTF-8'
// 添加请求拦截
fly.interceptors.request.use(function (config) {
  // 请求之前处理
  // 添加Loading
  wx.showLoading({
    title: '拼命加载中...',
    mask: true
  })
  // 设置接口超时的错误提示。
  timerId[config.url] = setTimeout(() => {
    wx.hideLoading()

    wx.showToast({
      title: '链接超时！',
      icon: 'none'
    })
  }, TIMEOUT)
  return config
}, function (error) {
  // 请求发生错误处理
  return Promise.reject(error)
})
// 添加响应拦截
fly.interceptors.response.use(function (response) {
  // 请求正确响应时处理
  clearTimeout(timerId[response.config.url])

  if (response.status === 200) {
    // modify response
    const code = response.data.code
    const msg = response.data.msg || '请求异常，请稍后再试！'
    // 如果token过期，重新授权
    if (code === 101) {
      wx.showToast({
        title: 'token过期，请重新登录',
        icon: 'none'
      })
    } else if (code !== 200) {
      wx.showToast({
        title: msg,
        icon: 'none'
      })
    }
  } else {
    let msg = response.statusText || '请求异常，请稍后再试！'
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  }
  return response
}, function (error) {
  // 响应发生错误处理
  wx.showToast({
    title: error.msg,
    icon: 'none'
  })
  return Promise.reject(error)
})

let createfly = (baseURL, url) => {
  return {
    /*
     * fly get 请求
     * @param {Object} data - 需要的传参，选传，默认值为空对象
     * @param {Object} config - 其他配置项，选传，默认值为空对象
     * */
    get(data = {}, config = {}) {
      return fly.get(url, data, Object.assign({}, {
        baseURL: baseURL
      }, config))
    },
    /*
     * fly post 请求
     * @param {Object} data - 需要的传参，选传，默认值为空对象
     * @param {Object} config - 其他配置项，选传，默认值为空对象
     * */
    post(data = {}, config = {}) {
      return fly.post(url, data, Object.assign({}, {
        baseURL: baseURL
      }, config))
    }
  }
}

const api = (key) => {
  return createfly(BASE_URL, apiUrls[key])
}

export default api

Vue.prototype.$api = api
