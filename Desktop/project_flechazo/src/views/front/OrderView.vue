<template>
<div class="bg-color pb-12">
    <div class="container py-5">
        <div class="row pt-7 pb-3">
            <nav aria-label="breadcrumb">
                    <ol class="breadcrumb px-0 mb-0 py-3">
                        <li class="breadcrumb-item"><a href="#/cart">購物車</a></li>
                        <li class="breadcrumb-item"><a href="#/cart">建立訂單</a></li>
                        <li class="breadcrumb-item"><a href="#/cart">訂單確認</a></li>
                    </ol>
                </nav>
        </div>
         <!-- <div class="row row-cols-4 row-cols-sm-4 my-8">
            <div class="col text-center">
                <div class="d-flex flex-column justify-content-center">
                     <i class="bi bi-check2-circle check-step-icon"></i>
                     <span>1</span>
                     <span>購物車</span>
                </div>
            </div>
            <div class="col text-center">
                <div class="d-flex flex-column justify-content-center">
                     <i class="bi bi-check2-circle check-step-icon"></i>
                     <span>2</span>
                     <span>建立訂單</span>
                </div>
            </div>
            <div class="col text-center">
                <div class="d-flex flex-column justify-content-center">
                     <i class="bi bi-check2-circle check-step-icon"></i>
                     <span>3</span>
                     <span>訂單確認</span>
                </div>
            </div>
            <div class="col text-center">
                <div class="d-flex flex-column justify-content-center">
                     <i class="bi bi-check2-circle check-step-icon"></i>
                     <span>4</span>
                     <span>完成購物</span>
                </div>
            </div>
        </div> -->
    </div>
    <div class="container" v-if="order.is_paid">
        <div class="row m-3" >
            <div class="col-xl-6 col-md-6 mx-auto bg-color-content p-5 rounded">
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
    <div class="container" v-else>
        <div class="row">
            <div class="col-xl-6 col-md-6 mx-auto">
                <div class="order-header">
                    <h3 class="text-center py-3">訂單資訊</h3>
                </div>
                <div class="order-body bg-color-content p-5">
                <table class="table text-light">
                    <tbody>
                        <tr>
                            <td scope="row" class="fw-bold" width="30%">訂單日期</td>
                            <td>{{ getDate(order.create_at) }}</td>
                        </tr>
                        <tr>
                            <td scope="row" class="fw-bold" width="30%">訂單編號</td>
                            <td>{{order.id}}</td>
                        </tr>
                        <tr>
                            <td scope="row" class="fw-bold" width="30%">訂單金額</td>
                            <td>NT$ {{order.total}}</td>
                        </tr>
                        <tr>
                            <td scope="row" class="fw-bold" width="30%">收件人姓名</td>
                            <td>{{user.name}}</td>
                        </tr>
                        <tr>
                            <td scope="row" class="fw-bold" width="30%">收件人信箱</td>
                            <td>{{user.email}}</td>
                        </tr>
                        <tr>
                            <td scope="row" class="fw-bold" width="30%">收件人電話</td>
                            <td>{{user.tel}}</td>
                        </tr>
                        <tr>
                            <td scope="row" class="fw-bold" width="30%">收件人地址</td>
                            <td>{{user.address}}</td>
                        </tr>
                        <tr>
                            <td scope="row" class="fw-bold" width="30%">備註</td>
                            <td><p v-if="order.message">{{ order.message }}</p><p v-else>無</p></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" class="btn btn-primary py-2 py-sm-3 mt-2 mt-sm-4 w-100" v-if="!order.is_paid" @click="payOrder">確認付款</button>
            </div>
            </div>
        </div>
    </div>
</div>
<FrontFooter></FrontFooter>
</template>
<script>
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  data () {
    return {
      order: {},
      user: {},
      products: {},
      isPaid: false
    }
  },
  watch: {
    is_paid () {
      this.is_paid = this.order.is_paid
    }
  },
  components: {
    FrontFooter
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.id}`
      this.$http.get(url).then((res) => {
        this.order = res.data.order
        this.user = res.data.order.user
        this.products = res.data.order.products
      })
    },
    getDate (timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString()
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.id}`
      this.$http.post(url).then((res) => {
        this.getOrder()
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getOrder()
  }
}
</script>
<style lang="scss">
.bg-color {
    background-color: #755B44;
}
.bg-color-content {
    background-color: #CCB69A
}
.bi.bi-check-circle-fill {
    font-size: 100px;
}

</style>
