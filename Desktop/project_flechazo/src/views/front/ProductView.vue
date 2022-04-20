<template>
<VueLoading :active="isLoading">
  <img src="@/assets/pic/loading.svg" alt="loadingSvg">
</VueLoading>
<div class="bg-primary">
    <div class="container py-5 overflow-hidden">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb px-0 mb-0 py-3 pt-6">
                <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                <li class="breadcrumb-item"><router-link to="/products">商品</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">戒指</li>
            </ol>
        </nav>
        <div class="row pt-2">
          <div class="col-md-6 col-12">
              <img :src="product.imageUrl" alt="" class="productSize img-fluid">
          </div>
            <div class="col-md-6 col-12 pt-md-0 pt-5">
                <h1 class="fw-bold mb-1">{{ product.title }}</h1>
                <span class="d-block pb-5 text-light">{{ product.category }}</span>
                <p class="pb-4">{{ product.description }}</p>
                <p class="mb-0 text-light"><del>NT$ {{ product.origin_price }}</del></p>
                <p class="h4 fw-bold text-light pb-3">NT$ {{ product.price }}</p>
                <div class="d-flex mt-4">
                   <select class="form-select bg-secondary border-0 me-2" v-model.number="qty">
                      <option v-for="num in 20" :key="`${num}-${product.id}`">{{ num }}</option>
                    </select>
                  <div class="btn-group btn-group-sm w-100">
                    <button
                        type="button"
                        class="border-0 rounded py-2 me-1 w-100 notice-btn text-white text-nowrap fw-bold fs-6"
                        @click="addToCart(product.id)"
                    >
                    加入購物車
                    </button>
                    <button
                        type="button"
                        class="border-0 rounded notice-btn"
                        @click="toggleFavorite(product)"
                    >
                          <i v-if="favoriteId.includes(product.id)" class="bi bi-heart-fill fs-4 text-white "></i>
                          <i v-else class="bi bi-heart fs-4 text-light"></i>
                    </button>
                </div>
                </div>
            </div>
        </div>
        <div class="pb-5 pt-5">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">購買須知</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">退換貨辦法</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                 <div class="fl-5 mt-3 text-light">
                      <p class="mb-0">超商取貨到貨簡訊皆由超商系統自動發送通知，由於超商簡訊漏發嚴重，我們會於訂單發貨中、已發貨、已到貨時發送Email通知。</p>
                      <p class="mb-0">還請留意Email訂單通知訊息，若因未注意包裹配送狀態而未取貨包裹遭退回，請聯繫我們重新安排出貨（需負擔二次寄送的運費）。</p>
                      <p class="mb-0">若第二次配送仍未取貨包裹遭退回，將不再進行第三次寄送，我們會扣除退貨運費後，將訂單款項退回給您。</p>
                      <p class="mb-0">若需查詢配送進度，訂單查詢中都會顯示出貨進度，若官網顯示出貨後3天都未收到到貨通知，請聯繫客服協助您查詢。</p>
                 </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <p class="mt-3 mb-0 text-light">為保障雙方的權益，在您收到包裹後直至開箱，若您發現收到的商品不符或損壞、瑕疵等情形，</p>
                      <p class="mb-0 text-light"> 請於3日內錄影或拍照聯繫我們，如經客服人員確認有瑕疵損壞事實，我們會儘速為您處理。</p>
                    <p class="mt-1 fw-light text-light">注意事項<br>
                      ‧  為保障消費者權益，皆享有網路購物7天鑑賞期（鑑賞期非試用期），以取貨當日開始計算，如超過此期限則無法辦理退貨。<br>
                      ‧  任何退換貨在商品寄出前，請先與客服人員聯繫確認後再寄出，否則無法受理。<br>
                      ‧  退貨商品須為收到商品時的完整包裝，商品無配戴痕跡，保持商品原樣。<br>
                      ‧  耳針耳環因屬個人貼身物品，考量衛生問題，拆封後無法辦理退換貨。<br>
                      ‧  瑕疵商品僅提供退款，或同款換新服務，無提供換款服務。<br>
                      ‧  因商品瑕疵或寄錯商品所產生的運費，皆由 flechazo 負擔，造成您的不便及困擾，我們深感抱歉。
                      </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import emitter from '@/utils/emitter'
import localStorageFavorite from '@/libs/localStorageFavorite'
export default {
  data () {
    return {
      product: [],
      id: '',
      qty: 1,
      isLoading: false
    }
  },
  mixins: [localStorageFavorite],
  methods: {
    getProduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(url).then((res) => {
        this.product = res.data.product
        this.isLoading = false
      }).catch(() => {
        this.isLoading = false
        this.$statusMsg(false, '載入', '載入商品失敗')
      })
    },
    addToCart (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty: this.qty
      }
      this.$http.post(url, { data }).then((res) => {
        emitter.emit('get-cart')
        this.$statusMsg(res, '加入', '已成功加入購物車')
        this.qty = 1
      }).catch(() => {
        this.$statusMsg(false, '加入', '加入購物車失敗')
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
  }
}
</script>
