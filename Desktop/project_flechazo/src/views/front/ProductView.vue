<template>
<div class="bg-color">
    <div class="container py-5 overflow-hidden">
        <div class="row align-items-center pt-5">
            <div class="col-md-6 pb-3 p-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb px-0 mb-0 py-3">
                        <li class="breadcrumb-item"><a href="#/">首頁</a></li>
                        <li class="breadcrumb-item"><a href="#/products">商品</a></li>
                        <li class="breadcrumb-item active" aria-current="page">戒指</li>
                    </ol>
                </nav>
                <div>
                    <img :src="product.imageUrl" alt="" class="productSize img-fluid">
                </div>
            </div>
            <div class="col-md-6 p-5">
                <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
                <span class="d-block pb-5 text-light">{{ product.category }}</span>
                <p class="pb-4">{{ product.description }}</p>
                <p class="mb-0 text-light"><del>NT$ {{ product.origin_price }}</del></p>
                <p class="h4 fw-bold text-light pb-3">NT$ {{ product.price }}</p>
                <form class="d-flex mt-4">
                  <input type="number" class="from-control w-100" min="1">
                  <div class="btn-group btn-group-sm w-100">
                    <button
                        type="button"
                        class="btn btn-color py-2 me-1"
                        @click="addToCart(product.id)"
                    >
                    加入購物車
                    </button>
                    <button
                        type="button"
                        class="btn btn-color py-2 me-1"
                        @click="toggleFavorite(product.id)"
                    >
                    加入願望清單
                    </button>
                </div>
                </form>
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
                 <div class="fl-5 mt-3">【重要須知】
                      <p>⭕ 超商取貨到貨簡訊皆由超商系統自動發送通知，由於超商簡訊漏發嚴重，我們會於訂單發貨中、已發貨、已到貨時發送Email通知，還請留意Email訂單通知訊息，
                      若因未注意包裹配送狀態而未取貨包裹遭退回，請聯繫我們重新安排出貨（需負擔二次寄送的運費），
                      若第二次配送仍未取貨包裹遭退回，將不再進行第三次寄送，我們會扣除退貨運費後，將訂單款項退回給您。</p>
                      <p>⭕若需查詢配送進度，訂單查詢中都會顯示出貨進度，若官網顯示出貨後3天都未收到到貨通知，請聯繫客服協助您查詢。</p>
                 </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <p class="mt-3">⭕ 退換貨辦法</p>
                  為保障雙方的權益，在您收到包裹後直至開箱，若您發現收到的商品不符或損壞、瑕疵等情形，
                    請於3日內錄影或拍照聯繫我們，如經客服人員確認有瑕疵損壞事實，我們會儘速為您處理。
                  <p class="mt-3">⭕ 注意事項</p>
                    ‧  為保障消費者權益，皆享有網路購物7天鑑賞期（鑑賞期非試用期），以取貨當日開始計算，如超過此期限則無法辦理退貨。<br>
                    ‧  任何退換貨在商品寄出前，請先與客服人員聯繫確認後再寄出，否則無法受理。<br>
                    ‧  退貨商品須為收到商品時的完整包裝，商品無配戴痕跡，保持商品原樣。<br>
                    ‧  耳針耳環因屬個人貼身物品，考量衛生問題，拆封後無法辦理退換貨。<br>
                    ‧  瑕疵商品僅提供退款，或同款換新服務，無提供換款服務。<br>
                    ‧  因商品瑕疵或寄錯商品所產生的運費，皆由 flechazo 負擔，造成您的不便及困擾，我們深感抱歉。
                </div>
            </div>
        </div>
    </div>
</div>
<FrontFooter></FrontFooter>
</template>
<script>
import emitter from '@/utils/emitter'
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  data () {
    return {
      product: [],
      id: ''
    }
  },
  components: {
    FrontFooter
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(url).then((res) => {
        console.log(res.data.product)
        this.product = res.data.product
      })
    },
    addToCart (qty) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: this.id,
        qty: 1
      }
      this.$http.post(url, { data }).then((res) => {
        console.log(res.data)
        emitter.emit('get-cart')
        alert(res.data.message)
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
  }
}
</script>
<style lang="scss">
.bg-color {
    background-color: #755B44;
}
.breadcrumb-item a{
    color: rgb(204, 204, 204);
}
.breadcrumb-item + .breadcrumb-item::before {
    color: rgb(204, 204, 204);
}
.breadcrumb-item.active {
    color: #fff
}
.productSize {
  height: 450px;
  width: 650px;
  -o-object-fit: cover;
  object-fit: cover;
}
.quantity-btn {
    line-height: 1;
    outline: none;
    padding: 0 8px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #fff;
    width: 48px;
    height: 36px;
    transition: all .5s;
}
.quantity {
    height: 36px;
    border: 1px solid hsla(0,0%,100%,.8);
    background: hsla(0,0%,100%,.8);
    border-radius: 0!important;
}
.btn-color {
    border: solid 1px #CCB69A;
    color: #fff
}
.btn:hover {
    color: #fff;
    background-color: #CCB69A
}
.btn:focus {
    outline: 0;
    box-shadow:none
}
.nav-link {
    color: #fff;
}
.nav-link:hover, .nav-link:focus {
    color: #fff;
}
.nav-tabs .nav-link.active{
    color: #fff;
    background-color: #CCB69A;
    border: none
}

.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border: none
}
</style>
