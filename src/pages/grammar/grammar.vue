<template>
  <div class="grammar">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="n in even(numbers)">{{ n }}</li>
    </ul>
    <div>
      <button @click="changeMessage()">点击改变message的值</button>
      <p>Original message: "{{ message }}"</p>
      此处可以用computed，methods，watch，只要属性发生变化都会触发
      <p>Computed reversed message: "{{ reversedMessage() }}"</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "grammar",
    data() {
      return {
        title: "语法区",
        numbers: [1, 2, 3, 4, 5],
        message: "Hello"
      };
    },
    computed: {
      evenNumbers: function() {
        return this.numbers.filter(function(number) {
          return number % 2 === 0;
        });
      } /* ,
          // 计算属性的 getter
          reversedMessage: function() {
            // `this` 指向 vm 实例
            return this.message
              .split("")
              .reverse()
              .join("");
          } */
    },
    methods: {
      even: function(numbers) {
        return numbers.filter(function(number) {
          return number % 2 === 0;
        });
      },
      reversedMessage: function() {
        return this.message
          .split("")
          .reverse()
          .join("");
      },
      changeMessage: function() {
        this.message = "world";
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
