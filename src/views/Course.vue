<template>
  <div class="bba-course c-container-inner">
    <h2 class="fsh1">课程详细{{ this.$route.params.id }}</h2>

    <div class="c-card mb1">
      <h3 class="c-card-title">课程目标</h3>
      <div class="c-card-content">
        课程目标课程目标课程目标课程目标课程目标课程目标课程目标课程目标,课程目标课程目标课程目标课程目标课程课程目标课程目标课程目标课程目标课程,课程目标课程目标课程目标课程目标课程,课程目标课程目标课程目标课程目标课程,课程目,标课程目标课程目标
      </div>
    </div>

    <dl class="c-list c-list-simple  c-list-rank mb1">
      <dt class="c-list-title">第一章</dt>
      <dd class="c-list-item">
        <h4 class="c-item-title">
          <router-link class="link" to="/chapter/1"
            >Python2爬虫学习系列教程-ok</router-link
          >
        </h4>
        <p class="c-item-meta">
          <span>100赞</span>
          <span>4天之前</span>
        </p>
      </dd>

      <dd class="c-list-item">
        <h4 class="c-item-title">
          <a href="./index.html">Python2爬虫学习系列教程</a>
        </h4>
        <p class="c-item-meta">
          <span>100赞</span>
          <span>4天之前</span>
        </p>
      </dd>

      <dd class="c-list-item">
        <h4 class="c-item-title">
          <a href="./index.html">Python2爬虫学习系列教程</a>
        </h4>
        <p class="c-item-meta">
          <span>100赞</span>
          <span>4天之前</span>
        </p>
      </dd>
    </dl>

    <dl class="c-list c-list-simple  c-list-rank mb1">
      <dt class="c-list-title">第一章</dt>
      <dd class="c-list-item">
        <h4 class="c-item-title">
          <a href="./index.html">Python2爬虫学习系列教程</a>
        </h4>
        <p class="c-item-meta">
          <span>100赞</span>
          <span>4天之前</span>
        </p>
      </dd>

      <dd class="c-list-item">
        <h4 class="c-item-title">
          <a href="./index.html">Python2爬虫学习系列教程</a>
        </h4>
        <p class="c-item-meta">
          <span>100赞</span>
          <span>4天之前</span>
        </p>
      </dd>

      <dd class="c-list-item">
        <h4 class="c-item-title">
          <a href="./index.html">Python2爬虫学习系列教程</a>
        </h4>
        <p class="c-item-meta">
          <span>100赞</span>
          <span>4天之前</span>
        </p>
      </dd>
    </dl>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Course extends Vue {}
</script>
