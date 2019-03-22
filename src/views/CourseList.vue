<template>
  <div class="course">
    <h1>课程列表</h1>
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="{name:'course',id:1}">课程1</router-link>
      <router-link to="/course/2">课程2</router-link>
    </div>
   
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Course extends Vue {}
</script>
