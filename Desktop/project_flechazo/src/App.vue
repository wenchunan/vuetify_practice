<template>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/stylesheets/all";

ol, ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #FFFFFF;
}
a, a:hover {
    text-decoration: none;
    color: #fff;
}
#app {
  font-family: Segoe UI,Avenir, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
  line-height: 1.5;
}

.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary + .btn, .btn:focus {
    box-shadow: 0 0 0 0;
}
</style>
