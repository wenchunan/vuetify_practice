<template>
<VueLoading :active="isLoading">
  <img src="@/assets/pic/loading.svg" alt="loadingSvg">
</VueLoading>
<div class="bg-primary pb-12 shadow-bg">
    <div class="container py-5 overflow-hidden">
        <h1 class="fw-bold pt-md-7 pt-6 mb-3 fs-4">購物車</h1>
        <div class="row gx-6">
            <div class="col-12 col-lg-7 mb-4">
                <div class="bg-secondary p-4 text-primary text-center" v-if="cartData.carts.length <= 0">
                    <p class="text-xl fw-bolder py-3">您的購物車目前沒有商品<br>快去逛逛放入喜歡的商品吧</p>
                    <router-link to="/products" class="btn btn-outline-primary text-light">前往商店</router-link>
                </div>
                <table class="table bg-secondary p-3 mb-0 text-primary" v-else>
                    <tr class="d-none d-md-flex row g-0 p-4 text-light border-0">
                        <td class="col-4">商品資料</td>
                        <td class="col-2">單件價格</td>
                        <td class="col-3">數量</td>
                        <td class="col-2">小計</td>
                        <td class="col-1"></td>
                    </tr>
                    <tr class="row g-0 p-3 align-items-center" v-for="item in cartData.carts" :key="item.id">
                        <td class="col-11 col-md-4 mb-md-0 border-0">
                            <div class="d-flex align-items-center">
                                <img :src="item.product.imageUrl" :alt="item.product.title" class="me-4 product-img">
                                <p class="text-base">{{ item.product.title }}</p>
                            </div>
                        </td>
                        <td class="col-6 col-md-2 order-4 order-md-0 border-0">
                            <div class="d-flex d-md-block align-items-end">
                                <p class="me-3 me-md-0">NT$ {{ item.product.price }}</p>
                            </div>
                        </td>
                        <td class="col-12 col-md-3 order-3 order-md-0  mb-md-0 border-0">
                            <div class="d-flex d-flex w-100 w-md-75 position-relative">
                                <div class="input-group input-group-sm">
                                    <div class="input-group mb-3">
                                        <select
                                            id=""
                                            class="form-select border-0 bg-info"
                                            v-model="item.qty"
                                            @change="updateCartItem(item)"
                                            >
                                        <option
                                            :value="num"
                                            v-for="num in 20"
                                            :key="`${num}${item.id}`"
                                        >
                                            {{ num }}
                                        </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="col-6 col-md-2 order-4 order-md-0 text-end text-md-start border-0">
                            <span class="d-inline d-md-none">小計:</span>
                            NT$ {{ item.total }}
                        </td>
                        <td class="col-1 order-2 order-md-0 border-0">
                            <button type="button" class="btn btn-sm" @click="removeCartItem(item.id)">x</button>
                        </td>
                    </tr>
                <tfoot>
                      <tr class="d-flex justify-content-between p-2">
                        <td class="border-bottom-0"><button class="btn btn-outline-primary text-light" type="button" @click="removeAllCart">清空購物車</button></td>
                        <td class="border-bottom-0"><button class="notice-btn fw-bold border-0 rounded py-2 px-3" type="button"><router-link to="/products">繼續購物</router-link></button></td>
                    </tr>
                  </tfoot>
                </table>
            </div>
            <div class="col-12 col-lg-5">
                <table class="table bg-secondary p-4 text-primary">
                    <thead>
                        <tr class="d-block m-2">
                            <th class="border-0">訂單摘要</th>
                        </tr>
                    </thead>
                    <tbody class="p-4">
                        <tr class="border-0">
                            <th class="ps-3">總計</th>
                            <td class="text-end pe-3">NT$ {{ cartData.total }}</td>
                        </tr>
                        <tr class="border-0">
                            <th class="ps-3"><input type="text" placeholder="請輸入優惠折扣碼" v-model="coupon_code" class="input-coupon w-100 bg-primary text-light p-2 rounded border-0"></th>
                            <td class="text-end pe-3">
                                <button type="button" class="btn btn-outline-primary text-light" @click="addCouponCode">使用</button>
                            </td>
                        </tr>
                        <tr v-if="cartData.final_total !== cartData.total">
                            <th class="text-danger ps-3">折扣價</th>
                            <td class="text-danger text-end pe-3">NT$ {{ cartData.final_total }}</td>
                        </tr>
                        <tr v-else>
                            <th class="ps-3">總金額</th>
                            <td class="text-end pe-3">NT$ {{ cartData.total }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                          <tr class="border-bottom-0">
                            <td colspan="5" class="border-bottom-0 py-3 pe-3 text-end">
                                <button type="button" class="notice-btn btn fw-bold border-0 rounded py-2 px-3" :disabled="cartData.carts.length === 0"><router-link to="/check" >前往結帳</router-link></button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      products: [],
      productId: '',
      coupon_code: '',
      isLoading: false
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
        this.isLoading = false
      }).catch((err) => {
        console.log(err)
      })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.getCart()
          this.$statusMsg(res, '更新', '已成功更新購物車')
        }).catch(() => {
          this.$StatusMsg(false, '更新', '更新購物車失敗')
        })
    },
    removeCartItem (id) {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`).then((res) => {
        this.getCart()
        emitter.emit('get-cart')
        this.$statusMsg(res, '刪除', '已成功刪除品項')
      }).catch(() => {
        this.$StatusMsg(false, '刪除', '刪除品項失敗')
      })
    },
    removeAllCart () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`).then((res) => {
        this.getCart()
        emitter.emit('get-cart')
        this.$statusMsg(res, '刪除', '已成功清空購物車')
      }).catch(() => {
        this.$StatusMsg(false, '刪除', '清空購物車失敗')
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon }).then((res) => {
        this.getCart()
        this.$statusMsg(res, '套用', '已套用優惠券')
      }).catch(() => {
        this.$statusMsg(false, '套用', '套用優惠券失敗')
      })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
