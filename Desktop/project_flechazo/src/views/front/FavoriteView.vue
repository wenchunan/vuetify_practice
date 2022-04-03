<template>
<div class="py-10 bg-primary">
    <div class="container overflow-hidden">
    <div class="row">
        <h5 class="pb-5">我的最愛</h5>
        <div class="col-12 col-lg-7 mb-md-5 mx-auto">
                <table class="table bg-color-content p-4 rounded text-primary" v-if="cartData.carts">
                    <tr class="d-none d-md-flex row g-0 p-4 text-light border-0">
                        <td class="col-3">商品資料</td>
                        <td class="col-4">名稱</td>
                        <td class="col-2">單件價格</td>
                        <td class="col-3">加入購物車</td>
                        <td class="col-1"></td>
                    </tr>
                    <tr class="row g-0 p-4 align-items-center" v-for="item in cartData.carts" :key="item.id">
                        <td class="col-11 col-md-3 mb-md-0 border-0">
                            <img :src="item.product.imageUrl" alt="{{item.product.title }}" class="me-4 product-img">
                        </td>
                        <td class="col-11 col-md-4 mb-md-0 border-0">
                            <p class="text-base">{{item.product.title }}</p>
                        </td>
                        <td class="col-6 col-md-2 order-4 order-md-0 border-0">
                            <div class="d-flex d-md-block align-items-end">
                                <p class="me-3 me-md-0">NT$ {{item.product.price}}</p>
                            </div>
                        </td>
                        <td class="col-12 col-md-2 order-3 order-md-0  mb-md-0 border-0">
                            <button type="button" class="btn btn-primary">加入購物車</button>
                        </td>
                        <td class="col-1 order-2 order-md-0 border-0">
                            <button type="button" class="btn btn-sm" @click="removeCartItem(item.id)">x</button>
                        </td>
                    </tr>
                </table>
            </div>
    </div>
    </div>
</div>
    <FrontFooter></FrontFooter>
</template>
<script>
import FrontFooter from '@/components/FrontFooter.vue'
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      products: [],
      productId: ''
    }
  },
  components: {
    FrontFooter
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        console.log(res.data.data)
        this.cartData = res.data.data
      })
    },
    removeCartItem (id) {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`).then((res) => {
        this.getCart()
        emitter.emit('get-cart')
      })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
<style lang="scss">
.bg-color-content {
    background-color:#CCB69A;
}
.btn-outline-primary:hover {
    color: #fff;
    background-color: #755B44;
}
.product-img {
    width: 130px;
    height: 130px;
    -o-object-fit: cover;
    object-fit: cover;
}

</style>
