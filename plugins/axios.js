/* eslint-disable */
import * as _ from 'lodash';
import { Message } from 'element-ui';
export default function ({ $axios, app, store }) {
  $axios.defaults.withCredentials = true;
  // 添加请求拦截器
  $axios.interceptors.request.use(
    function (config) {
      return config;
    },
    error => { return Promise.reject(error); }
  );
  // 添加响应拦截器
  $axios.interceptors.response.use(
    response => { return response; },
    error => {
      // 对请求错误做些什么
      const code = parseInt(error.response && error.response.status);
      const permittedPaths = ['/login'];
      switch (code) {
        case 401:
          if (!_.includes(permittedPaths, window.location.pathname)) {
            store.dispatch('auth/logout');
            sessionStorage.clear();
            store.$router.replace({ name: 'login' });
          }
          break;
        case 403:
          app.router.replace({ name: '403' });
          break;
        case 402:
          Message.error(error.response.data.message);
          break;
      }
      return Promise.reject(error);
    }
  );
};
