<template>
<div class="bg-primary pb-12">
    <div class="container pt-6 pb-0">
        <OrderNav :order-is-paid="isPaid"></OrderNav>
    </div>
    <div class="container">
        <div class="row m-3" >
            <div class="col-xl-6 col-md-6 mx-auto bg-secondary p-5 rounded">
                <div class="d-flex flex-column align-items-center">
                    <h2 class="fw-bolder">訂單已完成付款，感謝您的購買！</h2>
                    <i class="bi bi-check-circle-fill flex mt-3"></i>
                    <div class="d-flex w-100 justify-content-center pt-4">
                        <a href="#/" class="w-50 btn btn-outline-primary text-light me-2">前往首頁</a>
                        <a href="#/products" class="w-50 btn btn-outline-primary text-light">前往商店</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<FrontFooter></FrontFooter>
</template>
<script>
import FrontFooter from '@/components/FrontFooter.vue'
import OrderNav from '@/components/OrderNav.vue'
export default {
  data () {
    return {
      isPaid: true
    }
  },
  components: {
    FrontFooter, OrderNav
  }
}
</script>
<style lang="scss">
.bi.bi-check-circle-fill {
    font-size: 100px;
}
</style>
