<template>
  <div class="p-5">
    路由根据page菜单生成
    <el-button @click="$router.push('/parent/children')">跳转子路由</el-button>
    <nuxt-child />
  </div>
</template>
<script>
export default {
}
</script>
