<template>
<FrontNavbar/>
<router-view/>
<FrontFooter/>
</template>
<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  components: { FrontNavbar, FrontFooter }
}
</script>

<style lang="scss">
@import './assets/stylesheets/all';
#app {
  ol, ul {
  list-style: none;
  }
  a {
  text-decoration: none;
  color: #000;
  }
}
</style>
