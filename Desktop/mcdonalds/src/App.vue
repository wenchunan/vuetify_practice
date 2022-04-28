<template>
<FrontNavbar/>
<router-view/>
</template>
<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
export default {
  components: { FrontNavbar }
}
</script>

<style lang="scss">
@import './assets/stylesheets/all';
</style>
