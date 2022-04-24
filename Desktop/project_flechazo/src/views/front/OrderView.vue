<template>
<VueLoading :active="isLoading">
  <img src="@/assets/pic/loading.svg" alt="loadingSvg">
</VueLoading>
<div class="bg-primary pb-12 shadow-cart-bg">
    <div class="container pt-6 pb-0">
        <OrderNav :orderId="order"></OrderNav>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-md-6 mx-auto">
                <div class="order-header">
                    <h1 class="fw-bold mx-auto text-center py-3 fs-2">訂單資訊</h1>
                </div>
                <div class="order-body bg-secondary p-5">
                    <table class="table text-light">
                        <tbody>
                            <tr>
                                <td scope="row" class="fw-bold" width="30%">訂單日期</td>
                                <td>{{ getDate(order.create_at) }}</td>
                            </tr>
                            <tr>
                                <td scope="row" class="fw-bold" width="30%">訂單編號</td>
                                <td>{{ order.id }}</td>
                            </tr>
                            <tr>
                                <td scope="row" class="fw-bold" width="30%">訂單金額</td>
                                <td>NT$ {{ order.total }}</td>
                            </tr>
                            <tr>
                                <td scope="row" class="fw-bold" width="30%">收件人姓名</td>
                                <td>{{ user.name }}</td>
                            </tr>
                            <tr>
                                <td scope="row" class="fw-bold" width="30%">收件人信箱</td>
                                <td>{{ user.email }}</td>
                            </tr>
                            <tr>
                                <td scope="row" class="fw-bold" width="30%">收件人電話</td>
                                <td>{{ user.tel }}</td>
                            </tr>
                            <tr>
                                <td scope="row" class="fw-bold" width="30%">收件人地址</td>
                                <td>{{ user.address }}</td>
                            </tr>
                            <tr>
                                <td scope="row" class="fw-bold" width="30%">備註</td>
                                <td><p v-if="order.message">{{ order.message }}</p><p v-else>無</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" class="border-0 rounded notice-btn text-light fw-bold fs-5 py-2 py-sm-3 mt-2 mt-sm-4 w-100" v-if="!order.is_paid" @click="payOrder">確認付款</button>
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
      order: {},
      user: {},
      products: {},
      id: '',
      isLoading: false
    }
  },
  components: {
    OrderNav
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.id}`
      this.$http.get(url).then((res) => {
        this.order = res.data.order
        this.user = res.data.order.user
        this.products = res.data.order.products
        this.isLoading = false
      })
    },
    getDate (timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString()
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.id}`
      this.$http.post(url).then((res) => {
        this.$statusMsg(res, '更新', '已付款成功')
        this.$router.push('/PayFinished')
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getOrder()
  }
}
</script>
