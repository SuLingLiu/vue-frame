<template>
  <div id="app">
    <nav class="main-nav">
      <!-- 路由匹配成功，将自动设置 class 属性值 .router-link-active -->
      <router-link to="/">首页</router-link> 
      <router-link to="/shop">商品列表页</router-link>
      <router-link to="/routercase/1">路由示例</router-link>
      <router-link to="/grammar">语法区</router-link>
    </nav>
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "app",
    created() {
      // 组件创建完后获取数据，动态路由，以及hash等都不会多次触发，如果想要获取数据，可以在watch的$route里再次获取一下
    },
    watch: {
      $route(to, from) {
        //每次路由发生变化的时候触发
        //alert(88);
      }
    }
  };
</script>

<style lang="scss">
  @import "./css/common";

  .router-fade-enter-active,
  .router-fade-leave-active {
    transition: opacity 0.5s;
  }
  .router-fade-enter,
  .router-fade-leave-active {
    opacity: 0;
  }

  .main-nav {
    height: 56px;
    line-height: 56px;
    text-align: center;
    background: #31364a;
    a {
      font-size: 20px;
      padding: 0 10px;
      color: #999;
      &:hover,
      &.router-link-active {
        color: #fff;
      }
    }
  }
</style>
