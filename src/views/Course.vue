<template>
  <div class="course">
    <h1>课程详细{{this.$route.params.id}}</h1>
    <div id="nav">
      <router-link to="/course/chapter">章节</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Course extends Vue {}
</script>
