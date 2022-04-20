<template>
<div class="bg-primary pb-12">
    <div class="container pt-6 pb-0">
        <OrderNav :order-is-paid="isPaid"></OrderNav>
    </div>
    <div class="container">
        <div class="row m-3" >
            <div class="col-xl-6 col-md-6 mx-auto bg-secondary p-5 rounded">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="fs-2 fw-bolder">訂單已完成付款，感謝您的購買！</h1>
                    <i class="bi bi-check-circle-fill flex mt-3"></i>
                    <div class="d-flex w-100 justify-content-center pt-4">
                        <router-link to="/" class="w-50 btn btn-outline-primary text-light me-2">前往首頁</router-link>
                        <router-link to="/products" class="w-50 btn btn-outline-primary text-light">前往商店</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import OrderNav from '@/components/OrderNav.vue'
export default {
  data () {
    return {
      isPaid: true
    }
  },
  components: {
    OrderNav
  }
}
</script>
