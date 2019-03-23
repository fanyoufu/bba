<template>
  <div id="app">
    <header id="nav" class="c-header mb1">
      <nav class="c-container-inner">
        <router-link class="link current" to="/">主页</router-link> |
        <router-link class="link" :to="{ name: 'courselist' }"
          >课程</router-link
        >
        <router-link class="link" to="/about">关于</router-link>
      </nav>
    </header>
    <router-view />

    <footer class="c-footer">
      © 2005-2019 Mozilla 及各贡献者 内容可按这些许可协议使用。
    </footer>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
