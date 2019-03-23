<template>
  <div class="bba-course c-container-inner">
    <h1>课程详细{{ this.$route.params.id }}</h1>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Course extends Vue {}
</script>
