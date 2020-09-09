<template>
  <div class="p-10 bg-primary pb-3 pt-2 portal-homepage full-height text-white">
    我是子页面
    <br>
    默认layout（不需要配置，默认父亲页面）指向 <span class="text-danger font-weight-bold">‘/lauouts/default.vue’</span>
    <br>
    如不需要layout ，需要配置  <span class="text-danger font-weight-bold">layout:'none || '自己定义layout''</span>
    <br>
    <test class="mt-3" />
    <br>
    <el-button class="mt-3" @click="$router.push('/parent')">跳转嵌套路由</el-button>

  </div>
</template>
<script>
import test from '~/components/test'
import { mapActions } from 'vuex'
export default {
  // lauout配置，配置项指向 layouts下面对应的vue文件
  // layout: 'none',
  // 中间件功能，打印出来可以看到，类似于一个拦截作用
  middleware: 'test',
  components: {
    test
  },
  mounted() {
    this.test3().then(res => {
      console.log('请求成功代理失效')
    }).catch(() => {
      console.log('报错了')
    })
  },
  methods: {
    ...mapActions('check', [
      'test3'
    ])
  }
}
</script>
