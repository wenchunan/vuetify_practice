<template>
  <ToastMsg/>
  <router-view/>
</template>

<script>
import ToastMsg from '@/components/ToastMsg.vue'
export default {
  components: {
    ToastMsg
  }
}
</script>

<style lang="scss">
@import "./assets/stylesheets/all";
</style>
