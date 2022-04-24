<template>
<div class="py-5 py-md-7 bg-primary shadow-bg">
    <div class="container overflow-hidden" :class="favoriteId.length > 0 ? 'vh-auto' : 'vh-70'">
        <h1 class="fw-bold pt-6 mb-3 fs-4 col-12 col-lg-7 mb-md-5 mx-auto">我的最愛</h1>
      <!-- 收藏夾為空 -->
        <div class="row">
            <div class="col-12 col-lg-7 mb-md-5 mx-auto text-center" v-if="favorite.length===0">
              <i class="fa-solid fa-triangle-exclamation text-primaryDark fa-2x mb-3"></i>
                <p class="fw-bold mb-4">我的最愛裡還沒有商品ㄛ ~</p>
                <router-link class="btn btn-secondary text-light" to="/products">來去逛逛
                </router-link>
            </div>
            <div class="col-12 col-lg-7 mb-md-5 mx-auto" v-else>
                  <table class="table bg-secondary p-4 rounded text-primary">
                      <tr class="d-none d-md-flex row g-0 p-4 text-light border-0">
                          <td class="col-3">商品資料</td>
                          <td class="col-4">名稱</td>
                          <td class="col-2">單件價格</td>
                          <td class="col-3">加入購物車</td>
                          <td class="col-1"></td>
                      </tr>
                      <tr class="row g-0 p-4 align-items-center" v-for="item in favorite" :key="item.id">
                          <td class="col-11 col-md-3 mb-md-0 border-0">
                            <router-link :to="`/product/${item.id}`">
                              <img :src="item.imageUrl" :alt="item.title" class="me-4 product-img">
                            </router-link>
                          </td>
                          <td class="col-11 col-md-4 mb-md-0 border-0">
                              <p class="text-base">{{ item.title }}</p>
                          </td>
                          <td class="col-6 col-md-2 order-4 order-md-0 border-0">
                              <div class="d-flex d-md-block align-items-end">
                                  <p class="me-3 me-md-0">NT$ {{ item.price }}</p>
                              </div>
                          </td>
                          <td class="col-12 col-md-2 order-3 order-md-0  mb-md-0 border-0">
                              <button type="button" class="btn btn-outline-primary text-light" @click="addToCart(item)">加入購物車</button>
                          </td>
                          <td class="col-1 order-2 order-md-0 border-0">
                              <button type="button" class="btn btn-sm" @click="toggleFavorite(item)">x</button>
                          </td>
                      </tr>
                  </table>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import localStorageFavorite from '@/libs/localStorageFavorite'
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  mixins: [localStorageFavorite],
  methods: {
    addToCart (product, qty = 1) {
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, {
        data: {
          product_id: product.id,
          qty
        }
      }).then((res) => {
        emitter.emit('get-cart')
        this.$statusMsg(res, '加入', '已成功加入購物車')
      }).catch(() => {
        this.$statusMsg(false, '加入', '加入購物車失敗')
      })
    }
  },
  mounted () {
    emitter.emit('get-cart')
    // 接收來自FrontNavbar的cartData資料
    emitter.on('push-cart-data', (cartData) => {
      this.cartData = cartData
    })
  }
}
</script>
