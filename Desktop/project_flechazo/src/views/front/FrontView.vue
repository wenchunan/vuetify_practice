<template>
  <FrontNavbar/>
  <GoTop/>
  <router-view/>
  <FrontFooter/>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import GoTop from '@/components/GoTop.vue'
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  components: {
    FrontNavbar, GoTop, FrontFooter
  }
}
</script>
