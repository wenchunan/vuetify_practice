<template>
  <FrontNavbar/>
  <GoTop/>
  <ToastMsg/>
  <router-view/>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import GoTop from '@/components/GoTop.vue'
import ToastMsg from '@/components/ToastMsg.vue'
export default {
  components: {
    FrontNavbar, GoTop, ToastMsg
  }
}
</script>
