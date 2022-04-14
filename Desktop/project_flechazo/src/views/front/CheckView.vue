<template>
<VueLoading :active="isLoading">
  <img src="@/assets/pic/loading.svg" alt="loadingSvg">
</VueLoading>
<div class="bg-color pb-12">
    <div class="container py-5 overflow-hidden">
        <OrderNav :cartData="cartData"></OrderNav>
        <div class="row row-cols-1 row-cols-lg-2 flex-column-reverse flex-lg-row my-5 gx-6">
            <div class="col">
                <VueForm ref="form" v-slot="{ errors }" @submit="createOrder" class="bg-color-content py-5 px-4 rounded-2">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email<sup>*</sup>：</label>
                        <VueField
                        id="email"
                        name="email"
                        type="email"
                        class="form-control"
                        :class="{ 'is-invalid': errors['email'] }"
                        placeholder="請輸入 Email"
                        rules="email|required"
                        v-model="form.user.email"
                        ></VueField>
                        <ErrorMessage
                        name="email"
                        class="invalid-feedback"
                        ></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">姓名<sup>*</sup>：</label>
                        <VueField
                        id="name"
                        name="姓名"
                        type="text"
                        class="form-control"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        placeholder="請輸入姓名"
                        rules="required"
                        v-model="form.user.name"
                        ></VueField>
                        <ErrorMessage
                        name="姓名"
                        class="invalid-feedback"
                        ></ErrorMessage>
                    </div>
                     <div class="mb-3">
                        <label for="tel" class="form-label">電話<sup>*</sup>：</label>
                        <VueField
                        id="tel"
                        name="電話"
                        type="number"
                        class="form-control"
                        :class="{ 'is-invalid': errors['電話'] }"
                        placeholder="請輸入電話"
                        :rules="isPhone"
                        v-model="form.user.tel"
                        ></VueField>
                        <ErrorMessage
                        name="電話"
                        class="invalid-feedback"
                        ></ErrorMessage>
                    </div>
                     <div class="mb-3">
                        <label for="address" class="form-label">地址<sup>*</sup>：</label>
                        <VueField
                            id="address"
                            name="地址"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors['地址'] }"
                            placeholder="請輸入地址"
                            rules="required"
                            v-model="form.user.address"
                            ></VueField>
                            <ErrorMessage
                            name="地址"
                            class="invalid-feedback"
                            ></ErrorMessage>
                    </div>
                     <div class="mb-3">
                        <label for="message" class="form-label">留言</label>
                        <textarea
                        id="message"
                        class="form-control"
                        cols="30"
                        rows="10"
                        v-model="form.message"
                        ></textarea>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-outline-primary text-light" :disabled="Object.keys(errors).length > 0 || cartData.carts.length === 0">送出訂單</button>
                    </div>
                </VueForm>
            </div>
            <div class="col">
                <div class="bg-color-content py-3 px-5 rounded-2 mb-3">
                    <div class="row py-4 align-items-center border-bottom" v-if="cartData.carts">
                        <div class="col-6">
                            <p>商品資訊</p>
                        </div>
                        <div class="col-3">
                            <p>數量</p>
                        </div>
                        <div class="col-3">
                            <p>小計</p>
                        </div>
                    </div>
                    <div class="row py-4 align-items-center border-bottom" v-for="item in cartData.carts" :key="item.id">
                        <div class="col-6">
                             <div class="d-flex align-items-center">
                                 <img class="me-4 product-img" :src="item.product.imageUrl" alt="{{item.product.title }}">
                                 <p>{{item.product.title }}</p>
                             </div>
                        </div>
                        <div class="col-3 px-4">
                            <p>{{item.qty}}</p>
                        </div>
                        <div class="col-3">
                            <p>NT$ {{item.total}}</p>
                        </div>
                    </div>
                    <div class="row px-4 pt-4 border-top border-white border-2">
                        <div class="col-9">
                            <p class="fw-bold text-lg"  v-if="cartData.final_total !== cartData.total">折扣價:</p>
                            <p class="ftext-lg" v-else>總計:</p>
                        </div>
                        <div class="col-3">
                            <p class="fw-bold text-lg ps-3" v-if="cartData.final_total !== cartData.total">NT$ {{cartData.final_total}}</p>
                            <p class="fw-bold text-lg ps-3" v-else>NT$ {{cartData.total}}</p>
                        </div>
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
import emitter from '@/utils/emitter'
import OrderNav from '@/components/OrderNav.vue'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      products: [],
      productId: '',
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    FrontFooter, OrderNav
  },
  methods: {
    getCart () {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
        this.isLoading = false
      })
    },
    createOrder () {
      const order = this.form
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then((res) => {
          this.$statusMsg(res, '送出', '已成功送出訂單')
          this.$refs.form.resetForm()
          this.getCart()
          emitter.emit('get-cart')
          this.$router.push(`/order/${res.data.orderId}`)
        }).catch(() => {
          this.$statusMsg(false, '送出', '送出訂單失敗')
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼'
    }
  },
  mounted () {
    this.getCart()
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
.product-img {
    width: 130px;
    height: 130px;
    overflow: hidden;
    -o-object-fit: cover;
    object-fit: cover;
}
label sup {
    color: #de2c2c;
}
</style>
