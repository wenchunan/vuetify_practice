<template>
<VueLoading :active="isLoading">
    <img src="@/assets/pic/loading.svg" alt="loadingSvg">
</VueLoading>
    <div class="wrap overflow-hidden">
        <header class="header_background">
              <div class="row flex-lg-row d-flex align-items-center gx-0">
                  <div class="header_pic col-12 col-lg">
                      <img src="@/assets/pic/homePagePic.png"  class="img-fluid" alt="homePagePic">
                  </div>
                  <div class="col-12 col-lg header_describe p-5 ">
                      <h4>我在想</h4>
                      <h3>你戴上會是什麼樣子</h3>
                      <ul class="pt-4">
                        <li class="h5 pb-2">不懼分秒追逐時光流逝</li>
                        <li class="h5 pb-2">從細節彰顯非凡氣度</li>
                        <li class="h5 pb-2">精心裝點璀璨生活</li>
                        <li class="h5 pb-2">每一天都能非比尋常</li>
                      </ul>
                  </div>
              </div>
              <div class="title_primary container">
                  <h2 class="title_english fst-italic ps-6 mb-0">About us</h2>
                  <h1 class="title fs-2 fw-bold">關於品牌</h1>
              </div>
              <div class="container">
                  <div class="row">
                      <div class="py-5 col-12 col-md-6 wow fadeInLeft" data-wow-duration="3s"
                      >
                          <h4>發光並非太陽的專利</h4>
                          <h3>你也可以</h3>
                          <span><em>最浪漫的不是陪你到老<br>
                          而是助你悄悄變美  精緻到老</em></span>
                          <p class="pt-5 pe-md-6 pe-5">我們的目標是打造一個女性化、永恆、優雅、現代與復古的飾品品牌，在平凡的生活中點綴一些不平凡，讓女孩們在每個舉手投足間，都是那最美的風景。</p>
                      </div>
                      <div class="col-12 col-md-6 mb-8 pt-4 aboutPicBg position-relative wow fadeInRight" data-wow-duration="3s">
                          <img src="@/assets/pic/AboutPic.png" class="aboutPic position-absolute img-fluid" alt="關於品牌圖片" width="500">
                      </div>
                  </div>
              </div>
        </header>
        <section class="position-relative">
            <div class="bg_video">
                <video class="bg_video_content" autoplay muted loop>
                    <source src="@/assets/video/coupon_video.mp4" type="video/mp4">
                </video>
            </div>
            <div class="discount_title py-10">
                <div class="d-flex flex-column align-items-center justify-content-center wow fadeInUp" data-wow-duration="3s">
                    <h2 class="title_english fst-italic ps-10 mb-0">Celebrate</h2>
                    <h1 class="fs-2 fw-bold px-1 mb-4">歡慶周年</h1>
                    <p class="text-center text-md-start mb-5 mb-md-5 px-5">
                      即日起至 2022-05-31<br class="d-md-none">全館消費不限金額，即享
                      <strong class="fs-5">85%</strong>
                      折扣
                    </p>
                    <div class="discount_code">
                        <p ref="couponCode" class="position-absolute copyCoupon" :class="{'d-none':isCopied}" style="color: transparent">new85</p>
                        <div class="btn btn-secondary text-center fs-small fs-md-5 text-white fw-bold px-4 py-2" @click.once="copyCouponCode">馬上領取</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-primary">
              <section class="pb-5">
                    <div class="title_primary container">
                        <h2 class="title_english fst-italic ps-6 mb-0">On sale</h2>
                       <h1 class="title fs-2 fw-bold">特價商品</h1>
                    </div>
                    <div class="container d-flex pt-4 sale-container">
                        <swiper
                            :breakpoints="swiperOptions.breakpoints"
                            :modules="modules"
                            :pagination="{ clickable: true }"
                            :space-between="10"
                            loop
                            :autoplay="{ delay: 3000 }"
                          >
                            <swiper-slide v-for="item in saleProducts" :key="item.id">
                                <div class="sale-item">
                                    <a @click="routerPush(item.id)">
                                      <img :src="item.imageUrl" :alt="item.title" class="products-img img-fluid">
                                    </a>
                                    <div class="d-flex align-items-center justify-content-between px-2">
                                          <div class="pt-2 w-100">
                                              <a @click="routerPush(item.id)" class="sale-item-name">
                                                <p class="fs-5 fw-normal mb-0">{{ item.title }}</p>
                                              </a>
                                              <p><del>NT$ {{ item.origin_price }} </del>
                                              <span class="ms-3">NT$ {{ item.price }}</span></p>
                                          </div>
                                          <a @click="toggleFavorite(item)">
                                                <i v-if="favoriteId.includes(item.id)" class="bi bi-heart-fill flex-shrink-1 pe-1 pe-md-0 pe-lg-0 fs-4"></i>
                                                <i v-else class="bi bi-heart fs-4 flex-shrink-1 pe-1 pe-md-0 pe-lg-0"></i>
                                          </a>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
              </section>
              <section class="section_popular">
                <div class="title_primary container">
                  <h2 class="title_english fst-italic ps-6 mb-0">Popular</h2>
                  <h1 class="title fs-2 fw-bold">本周人氣</h1>
                </div>
                <div class="container mt-5 mb-md-0">
                    <div class="row row-cols-md-2 row-cols-lg-2 gx-2">
                      <div class="col-lg-6 col-md-12 col-12 pb-5">
                        <div class="popular_left d-lg-flex d-md-flex wow fadeInLeft" data-wow-delay="0.2s" data-wow-duration="1.5s">
                          <img src="@/assets/pic/popularPic1-1.png" alt="莫奈花園的琥珀鎖住了春天" class="img-fluid">
                          <span class="bg-secondary d-block p-3 d-lg-none d-md-none text-center">莫奈花園的琥珀鎖住了春天</span>
                          <div class="position-relative">
                            <span class="p-3 bg-secondary popular_span h5 position-relative d-none d-lg-block d-md-block">莫奈花園的琥珀鎖住了春天</span>
                            <img src="@/assets/pic/popularPic1-2.png" alt="莫奈花園的琥珀鎖住了春天" width="280" class="position-absolute top-100 start-0 translate-middle d-none d-lg-block d-md-block">
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6  col-md-12 col-12 pt-md-10 ">
                        <div class="d-lg-flex d-md-flex wow fadeInRight" data-wow-delay="0.2s" data-wow-duration="1.5s">
                            <img src="@/assets/pic/popularPic2-1.png" alt="你無處安放的優雅" class="img-fluid">
                            <span class="bg-secondary p-3 d-block d-lg-none d-md-none text-center">你無處安放的優雅</span>
                            <div class="position-relative">
                              <span class="p-3 bg-secondary h5 position-relative popular_span d-none d-lg-block d-md-block">你無處安放的優雅</span>
                              <img src="@/assets/pic/popularPic2-2.png" alt="你無處安放的優雅" width="280" class="position-absolute top-100 start-0 translate-middle d-none d-lg-block d-md-block">
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="container mt-2 mt-md-11 p-md-5 p-6">
                  <router-link to="/products" class="shopping-btn h5">
                    來去逛逛
                  </router-link>
                </div>
              </section>
              <section class="pb-10">
                <div class="title_primary container">
                  <h2 class="title_english fst-italic ps-6 mb-0">Products</h2>
                  <h1 class="title fs-2 fw-bold">商品專區</h1>
                </div>
                <div class="container pt-5">
                    <div class="row px-3 wow fadeInUp" data-wow-duration="2.5s">
                        <div class="col-lg-3 col-md-6 p-0">
                          <div class="cardProduct-home position-relative">
                              <a @click.prevent="goToCategory('戒指')" class="card-img-home rounded-0 d-block">
                                  <img src="@/assets/pic/productsRing.png" class="card-img-top rounded-0" alt="戒指專區">
                              </a>
                              <div class="position-absolute top-50 start-50 text-light translate-middle">
                                  <h4>戒指 Ring</h4>
                              </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 p-0">
                          <div class="cardProduct-home position-relative">
                              <a @click.prevent="goToCategory('手鍊')" class="card-img-home rounded-0 d-block">
                                  <img src="@/assets/pic/productsBracelet.png" class="card-img-top rounded-0" alt="手鍊專區">
                              </a>
                              <div class="position-absolute top-50 start-50 text-light translate-middle">
                                  <h4>手鍊 Bracelet</h4>
                              </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 p-0">
                          <div class="cardProduct-home position-relative">
                              <a @click.prevent="goToCategory('項鍊')" class="card-img-home rounded-0 d-block">
                                  <img src="@/assets/pic/productsNecklace.png" class="card-img-top rounded-0" alt="項鍊專區">
                              </a>
                              <div class="position-absolute top-50 start-50 text-light translate-middle">
                                  <h4>項鍊 Necklace</h4>
                              </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 p-0">
                          <div class="cardProduct-home position-relative">
                              <a @click.prevent="goToCategory('耳環')" class="card-img-home rounded-0 d-block">
                                  <img src="@/assets/pic/productsEarrings.png" class="card-img-top rounded-0" alt="耳環專區">
                              </a>
                              <div class="position-absolute top-50 start-50 text-light translate-middle">
                                  <h4>耳環 Earrings</h4>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
              </section>
        </section>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import localStorageFavorite from '@/libs/localStorageFavorite'

export default {
  data () {
    return {
      saleProducts: [],
      isCopied: false,
      isLoading: false,
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      modules: [Navigation, Pagination, Autoplay],
      swiperOptions: {
        breakpoints: {
          1: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      }
    }
  },
  components: {
    Swiper, SwiperSlide
  },
  mixins: [localStorageFavorite],
  methods: {
    getSale () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        const productsAll = res.data.products
        this.isLoading = false
        productsAll.forEach((item) => {
          if (item.price !== item.origin_price) {
            this.saleProducts.push(item)
          }
        })
      })
        .catch(() => {
          this.$StatusMsg(false, '讀取', '讀取特價商品失敗')
          this.isLoading = false
        })
    },
    routerPush (id) {
      this.$router.push(`/product/${id}`)
    },
    goToCategory (category) {
      this.$router.push({
        name: 'products',
        params: { categoryName: category }
      })
    },
    copyCouponCode () {
      // this.$StatusMsg(true, '複製', '您已成功複製優惠碼!')
      // 建立 Range 物件
      const range = document.createRange()
      range.selectNode(this.$refs.couponCode)
      // 取得 Selection 物件
      const selection = window.getSelection()
      // 先清空當前選取範圍
      selection.removeAllRanges()
      // 加入 Range
      selection.addRange(range)
      document.execCommand('copy') // 執行瀏覽器複製命令
      this.isCopied = true
      this.$statusMsg(true, '複製', '您已成功複製優惠碼!')
    }
  },
  mounted () {
    this.getSale()
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
