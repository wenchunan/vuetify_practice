<template>
  <!-- <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#" class="navigation__link"><span>01</span>首頁 flechazo</a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link"
              ><span>02</span>商品專區</a
            >
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link"
              ><span>03</span>飾品保養</a
            >
          </li>
          <li class="navigation__item">
            <a href="#/about" class="navigation__link"><span>04</span>關於品牌</a>
          </li>
        </ul>
      </nav>
    </div> -->

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
<style lang="scss">
.navigation {
  &__checkbox {
    display: none;
  }
  &__button {
    background-color: #c3af94;
    height: 5rem;
    width: 5rem;
    position: fixed;
    top: 3rem;
    right: 3rem;
    border-radius: 50%;
    z-index: 2000;
    // box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
    text-align: center;
    cursor: pointer;

    // @include respond(tab-port) {
    //   top: 4rem;
    //   right: 4rem;
    // }
    // @include respond(phone) {
    //   top: 3rem;
    //   right: 3rem;
    // }
  }
  &__background {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    position: fixed;
    top: 3.5rem;
    right: 3.5em;
    background-image: radial-gradient(
     #CCB69A,
     #755B44
    );
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    // transform: scale(80);

    // @include respond(tab-port) {
    //   top: 4.5rem;
    //   right: 4.5rem;
    // }
    // @include respond(phone) {
    //   top: 3.5rem;
    //   right: 3.5rem;
    // }
  }
  &__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;

    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }
  &__item {
    margin: 1rem;
  }
  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 2rem;
      font-weight: 400;
      padding: 1rem 2rem;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fff 50%
      );
      background-size: 220%;
      transition: all 0.4s;
      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }
    &:hover,
    &:active {
      background-position: 100%;
      color: #755B44;
      transform: translateX(1rem);
    }
  }
  // Fucntionality
  &__checkbox:checked ~ &__background {
    transform: scale(80);
  }
  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }
  // icon
  &__icon {
    position: relative;
    margin-top: 2.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: #755B44;
      display: inline-block;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 5px;
      transition: all 0.2s;
      width: 38px;
    }
    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }
  &__button:hover &__icon::before {
    top: -1rem;
  }
  &__button:hover &__icon::after {
    top: 1rem;
  }
  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }
  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
  }
  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
}

</style>
