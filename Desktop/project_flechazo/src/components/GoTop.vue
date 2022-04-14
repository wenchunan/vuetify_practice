<template>
    <div @click="goTop">
        <div class="go-top" :class="yScrollValue < 50 ? 'd-none':''">
            <div class="bg-secondary py-2 px-3 rounded" style="opacity:0.6">
                <i class="bi bi-arrow-up-circle-fill text-white"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      yScrollValue: ''
    }
  },
  methods: {
    goTop () {
      document.documentElement.scrollTop = 0
    },
    scrollWatch () {
      this.yScrollValue = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollWatch)
  }
}
</script>
<style>
.go-top {
    position: fixed;
    bottom: 5rem;
    right: 2rem;
    z-index: 100;
    cursor: pointer;
}
@media(max-width: 576px) {
  .go-top {
    display: none;
}
}
</style>
