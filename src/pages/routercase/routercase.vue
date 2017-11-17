<template>
  <div class="routerCase">
    <h1>{{title}}</h1>
    <p>动态参数：{{paramId}}</p>
    <nav>
      <router-link to="/routercase/1/case1">子路由1</router-link>
      <router-link to="/routercase/1/case2">子路由2</router-link>
    </nav>
    <router-view></router-view>
    <button @click="skip()">点击跳转到首页</button>
  </div>
</template>

<script>
  export default {
    name: "routerCase",
    data() {
      return {
        title: "路由示例"
      };
    },
    computed: {
      paramId() {
        //path: '/routercase/:id' $route 对象还提供了其它有用的信息如，$route.query、$route.hash 等等
        return this.$route.params.id;
      }
    },
    methods: {
      skip() {
        // this.$router.push("/home");
        this.$router.push({
          //this.$router.push 跟 this.$route.params，用的不是同一对象，this.$router多了一个r
          path: "/home",
          query: { id: 1 }
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
