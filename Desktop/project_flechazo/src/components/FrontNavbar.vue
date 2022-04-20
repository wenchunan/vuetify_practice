<template>
<div class="navbar navigation py-3 fixed-top container-fluid px-3 d-flex" :class="yScrollValue < 50 ? '':'navbar-bg'">
     <router-link class="navbar-brand" to="/"><img src="@/assets/pic/flechazo.png" width="110" alt=""></router-link>
     <div class="d-flex align-items-center">
       <div class="me-0 me-md-2" :class="yScrollValue < 50 ? 'd-none':''">
         <a href="#/favorite" class="btn position-relative px-1 me-3">
          <i class="bi bi-heart-fill text-primary fs-5"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">{{ favorite }}</span>
        </a>
       </div>
       <div class="me-2 me-md-4" :class="yScrollValue < 50 ? 'd-none':''">
         <a href="#/cart" class="btn position-relative px-1 me-3">
          <i class="bi bi-cart-fill text-primary fs-4"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2">{{ cartData.carts.length }}</span>
        </a>
       </div>
        <input type="checkbox" class="navigation__checkbox bar-toggler" id="navi-toggle"/>
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background me-2">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link to="/"
                @click="navCollapseBack"
                class="navigation__link">
                    <span>01</span>首頁 flechazo
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/products"
                @click="navCollapseBack"
                class="navigation__link">
                    <span>02</span>商品專區
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/protect"
                @click="navCollapseBack"
                class="navigation__link">
                    <span>03</span>飾品保養
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/about"
                @click="navCollapseBack"
                class="navigation__link">
                      <span>04</span>關於品牌
            </router-link>
          </li>
        </ul>
      </nav>
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
      favorite: '',
      yScrollValue: ''
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
      })
    },
    navCollapseBack () {
      const navbarToggle = document.querySelector('.bar-toggler')
      navbarToggle.click()
    },
    scrollWatch () {
      this.yScrollValue = window.scrollY
    }
  },
  mounted () {
    this.getCart()
    window.addEventListener('scroll', this.scrollWatch)
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
