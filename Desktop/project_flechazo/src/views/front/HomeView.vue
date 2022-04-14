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
        <div class="col-12 col-lg header_describe p-5">
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
      <div class="title_primary">
        <h2 class="title_english">About us</h2>
        <h2 class="title">關於品牌</h2>
      </div>
      <div class="row flex-lg-row d-flex">
          <div class="about_left container p-5 col-12 col-lg">
            <h4>發光並非太陽的專利</h4>
            <h3>你也可以</h3>
            <span><em>最浪漫的不是陪你到老<br>
            而是助你悄悄變美  精緻到老</em></span>
            <p class="pt-5">我們的目標是打造一個女性化、永恆、優雅、現代與復古的飾品品牌，在平凡的生活中點綴一些不平凡，讓女孩們在每個舉手投足間，都是那最美的風景。</p>
          </div>
          <div class="about_right col-12 col-lg">
            <div class="aboutPicBg position-relative">
              <img src="@/assets/pic/AboutPic.png" class="aboutPic img-fluid position-absolute" alt="關於品牌圖片" width="500">
            </div>
          </div>
      </div>
    </header>
    <section class="section_coupon">
      <div class="bg_video">
        <video class="bg_video_content" autoplay muted loop>
          <source src="@/assets/video/coupon_video.mp4" type="video/mp4">
        </video>
      </div>
      <div class="discount_title">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <h2 class="title_english">Celebrate</h2>
          <h3 class="h1 px-1 mb-4">歡慶周年</h3>
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
    <section class="section_bg">
      <section class="section_onSale">
        <div class="title_primary">
          <h2 class="title_english">On sale</h2>
          <h2 class="title">特價商品</h2>
        </div>
        <div class="container d-flex pt-5 sale-container">
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
                    <img :src="item.imageUrl" alt="{{item.title}}" class="products-img img-fluid">
                  </a>
                  <div class="d-flex align-items-center justify-content-between px-2">
                    <div class="pt-2 w-100">
                      <a @click="routerPush(item.id)" class="sale-item-name">
                        <p class="fs-5 fw-normal mb-0">{{item.title}}</p>
                      </a>
                      <p><del>NT$ {{item.origin_price}} </del>
                      <span class="ms-3">NT$ {{item.price}}</span>
                      </p>
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
        <div class="title_primary">
          <h2 class="title_english">Popular</h2>
          <h2 class="title">本周人氣</h2>
        </div>
        <div class="container mt-5 mb-md-0">
            <div class="row row-cols-md-2 row-cols-lg-2 gx-2">
              <div class="col-lg-6 col-md-12 col-12 pb-5">
                <div class="popular_left d-lg-flex d-md-flex">
                  <img src="@/assets/pic/popularPic1-1.png" alt="莫奈花園的琥珀鎖住了春天" class="img-fluid">
                  <span class="popular_title d-block d-lg-none d-md-none text-center">莫奈花園的琥珀鎖住了春天</span>
                  <div class="position-relative">
                    <span class="popular_title popular_span h5 position-relative d-none d-lg-block d-md-block">莫奈花園的琥珀鎖住了春天</span>
                    <img src="@/assets/pic/popularPic1-2.png" alt="莫奈花園的琥珀鎖住了春天" width="280" class="position-absolute top-100 start-0 translate-middle d-none d-lg-block d-md-block">
                  </div>
                </div>
              </div>
              <div class="col-lg-6  col-md-12 col-12 popular_right">
                <div class="d-lg-flex d-md-flex">
                    <img src="@/assets/pic/popularPic2-1.png" alt="你無處安放的優雅" class="img-fluid">
                    <span class="popular_title d-block d-lg-none d-md-none text-center">你無處安放的優雅</span>
                    <div class="position-relative">
                      <span class="popular_title h5 position-relative popular_span d-none d-lg-block d-md-block">你無處安放的優雅</span>
                      <img src="@/assets/pic/popularPic2-2.png" alt="你無處安放的優雅" width="280" class="position-absolute top-100 start-0 translate-middle d-none d-lg-block d-md-block">
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div class="go_shopping_span container">
          <a href="#/products" class="shopping-btn h5">
            來去逛逛
          </a>
        </div>
      </section>
      <section class="section-products">
        <div class="title_primary">
          <h2 class="title_english">Products</h2>
          <h2 class="title">商品專區</h2>
        </div>
        <div class="container pt-5">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-0 text-center">
            <div class="col">
               <a href="" @click.prevent="goToCategory('戒指')" class="position-relative productItem">
                  <div class="imgFilter">
                    <img src="@/assets/pic/productsRing.png" class="rounded-3 img-fluid" width="350" alt="戒指專區">
                  </div>
                  <div class="productItem-text">
                     <h4>戒指 Ring</h4>
                  </div>
               </a>
            </div>
            <div class="col">
              <a href="" @click.prevent="goToCategory('手鍊')"  class="mb-5 position-relative productItem">
                <div class="imgFilter">
                    <img src="@/assets/pic/productsBracelet.png" class="rounded-3 img-fluid" width="350" alt="手鍊專區">
                  </div>
                  <div class="productItem-text">
                     <h4>手鍊 Bracelet</h4>
                  </div>
              </a>
            </div>
            <div class="col">
              <a href="" @click.prevent="goToCategory('項鍊')" class="position-relative productItem">
                  <div class="imgFilter">
                    <img src="@/assets/pic/productsNecklace.png" class="rounded-3 img-fluid" width="350" alt="項鍊專區">
                  </div>
                  <div class="productItem-text">
                     <h4>項鍊 Necklace</h4>
                  </div>
              </a>
            </div>
            <div class="col">
              <a href="" @click.prevent="goToCategory('耳環')" class="mb-5 position-relative productItem">
                <div class="imgFilter">
                    <img src="@/assets/pic/productsEarrings.png" class="rounded-3 img-fluid" width="350" alt="耳環專區">
                  </div>
                  <div class="productItem-text">
                     <h4>耳環 Earrings</h4>
                  </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
  <FrontFooter></FrontFooter>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import FrontFooter from '@/components/FrontFooter.vue'
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
    Swiper, SwiperSlide, FrontFooter
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
        .catch((err) => {
          console.log(err)
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
<style lang="scss">
.header_background {
  min-width: 100%;
  background-image: url('@/assets/pic/homePage-background.png');
  background-size: cover;
}
.header_describe {
  height: 20%;
  background-color: rgba(183,164,139,0.4);
}

.about_right {
  padding-bottom: 120px;
}
.aboutPicBg {
  height: 350px;
  background-color: #B7A48B;
}
.aboutPic {
  top: 10%;
  left: -5%;
}
.title_english{
  color: rgba(255, 255, 255, 0.15);
  font-style: italic;
  padding-left: 200px;
  margin-bottom: -10px;
}
.title_primary{
  position: relative;
  padding-top: 70px;
  padding-bottom: 40px;
}
.title_primary .title {
  padding-left: 140px;
}
.title_primary .title:before {
  content: '';
  display: block;
  position: absolute;
  bottom: 28px;
  left: 0;
  min-width: 320px;
  height: 1px;
  background-color: #fff;
}
.section_coupon {
  position: relative;
}
.bg_video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-width: 100%;
  z-index: -1;
  overflow: hidden;
}
.bg_video_content {
  height: 100%;
  min-width: 100%;
  object-fit: cover;
}
.discount_title {
  padding: 160px 0px 160px 0px;
  background-color: rgba(0, 0, 0, 0.65);
}
.copyCoupon {
  z-index: -3;
}

.section_bg {
  background-color: #755B44;
}

.section_onSale {
  padding-bottom: 80px;
}
.products-img {
  height: 350px;
  width: 298px;
  -o-object-fit: cover;
  object-fit: cover;
  cursor: pointer;
}
.bi.bi-heart-fill, .bi.bi-heart {
  cursor: pointer;
}
.swiper {
  padding: 36px;
}
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -3px;
}

.popular_right {
  padding-top: 200px;
}
@media(max-width:767px) {
  .popular_right {
    padding-top: 20px;
 }
}
.popular_span {
  top: 35%;
  right: 28%;
}

.popular_title {
  background-color: #CCB69A;
  padding: 18px;
  max-width: 397px;
}
.shopping-btn {
    position: relative;
    padding: 18px 22px;
    letter-spacing: 4px;
    z-index: 5;
    transition: all .3s cubic-bezier(.68,-.55,.265,1.55);
}
.shopping-btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background:#CCB69A;
    width: 56px;
    height: 56px;
    z-index: -5;
    transition: all .5s cubic-bezier(.68,-.55,.265,1.55)
}

.shopping-btn:hover:before {
    width: 100%;
    background: #CCB69A;
}
.go_shopping_span {
  margin-top: 170px;
  padding: 50px;
}
@media(max-width:767px) {
  .go_shopping_span {
    margin-top: 10px;
 }
}
.productItem-text {
    position: relative;
    bottom: 50%;
    color: white;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden
}
.productItem:hover .productItem-text {
    opacity: 1;
    transform: translate(0,-30%)
}
.imgFilter img{
  transition-duration: 0.5s;
}
.imgFilter img:hover {
    filter: brightness(0.5);
    width: 110%;
}
.section-products {
  padding-bottom: 120px;
}
</style>
