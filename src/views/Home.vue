<template>
  <div class="home">
    <router-link to="/">主页</router-link> |
      <router-link to="/course/1">课程1</router-link>
      <router-link to="/course/2">课程2</router-link>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
