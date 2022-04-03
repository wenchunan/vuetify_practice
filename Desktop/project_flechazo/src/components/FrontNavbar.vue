<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img src="@/assets/pic/flechazo.png" width="100" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">購物車</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/admin">後台</router-link>
        </li> -->
      </ul>
    </div>
     <a href="#/favorite" class="btn position-relative px-1 me-3">
     <i class="bi bi-heart-fill text-primary fs-5"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">{{favorite}}</span>
    </a>
    <a href="#/cart" class="btn position-relative px-1 me-3">
      <i class="bi bi-cart-fill text-primary fs-4"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2">{{cartData.carts.length}}</span>
    </a>
  </div>
  </nav>
</template>
<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      favorite: ''
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
      })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
    // 初始化先取得 localStorage 的數量
    if (JSON.parse(localStorage.getItem('favorite'))) {
      this.favoriteQty = JSON.parse(localStorage.getItem('favorite')).length
    } else {
      this.favoriteQty = 0
    }
    // 跨元件監聽收藏事件
    emitter.on('get-favorite', (favoriteData) => {
      this.favorite = favoriteData.length
    })
  }
}
</script>
