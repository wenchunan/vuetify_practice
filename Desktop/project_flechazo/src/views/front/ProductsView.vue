<template>
<VueLoading :active="isLoading">
  <img src="@/assets/pic/loading.svg" alt="loadingSvg">
</VueLoading>
<div class="bg_products vh-40 vh-lg-70"></div>
<div class="bg-primary pt-5 pb-lg-14 pb-md-14 pb-7">
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-3 aside">
                <h1 class="fs-5 listTitle">商品分類</h1>
                <ul class="mt-3 p-0">
                  <li class="pe-lg-4 pe-md-1">
                        <button class="btn btn-outline-secondary text-light w-100 border-bottom-0 rounded-0" type="button" @click.prevent="filterCategory = ''" :class="{ active: filterCategory === '' }">全部商品</button>
                    </li>
                    <li class="pe-lg-4 pe-md-1">
                        <button class="btn btn-outline-secondary text-light w-100 border-bottom-0 rounded-0" type="button" @click.prevent="filterCategory = '戒指'" :class="{ active: filterCategory === '戒指' }">戒指</button>
                    </li>
                    <li class="pe-lg-4 pe-md-1">
                        <button class="btn btn-outline-secondary text-light w-100 border-bottom-0 rounded-0" type="button" @click.prevent="filterCategory = '項鍊'" :class="{ active: filterCategory === '項鍊' }">項鍊</button>
                    </li>
                    <li class="pe-lg-4 pe-md-1">
                        <button class="btn btn-outline-secondary text-light w-100 border-bottom-0 rounded-0" type="button" @click.prevent="filterCategory = '耳環'" :class="{ active: filterCategory === '耳環' }">耳環</button>
                    </li>
                    <li class="pe-lg-4 pe-md-1">
                        <button class="btn btn-outline-secondary text-light w-100 rounded-0" type="button" @click.prevent="filterCategory = '手鍊'" :class="{ active: filterCategory === '手鍊' }">手鍊</button>
                    </li>
                </ul>
            </div>
            <div class="col-md-9">
                <div class="row gx-3">
                    <div class="col-md-6 col-lg-4 mb-3 wow fadeInUp" data-wow-duration="1.5s" v-for="product in filterCategories" :key="product.id">
                      <div class="cardProduct position-relative">
                        <router-link :to="`/product/${product.id}`" class="card-img">
                            <img :src="product.imageUrl" class="card-img-top" :alt="product.title">
                        </router-link>
                        <div class="d-flex justify-content-between align-items-center px-1">
                            <div>
                                <router-link :to="`/product/${product.id}`">{{ product.title }}</router-link>
                                <p v-if="product.origin_price == product.price">NT$ {{ product.price }}</p>
                                <p v-else>NT$ {{ product.price }}</p>
                            </div>
                            <a @click="toggleFavorite(product)">
                                <i v-if="favoriteId.includes(product.id)" class="bi bi-heart-fill fs-4 "></i>
                                <i v-else class="bi bi-heart fs-4 text-light"></i>
                            </a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import localStorageFavorite from '@/libs/localStorageFavorite'
export default {
  data () {
    return {
      products: [],
      isLoading: false,
      filterCategory: '',
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  mixins: [localStorageFavorite],
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        this.isLoading = false
        const { categoryName } = this.$route.params
        if (categoryName) {
          this.filterCategory = categoryName
        }
      })
        .catch(() => {
          this.isLoading = false
          this.$statusMsg(false, '載入', '發生錯誤，請重新整理頁面')
        })
    }
  },
  computed: {
    // 根據依賴的值變更做計算處理
    // 在products中篩出所點選的filterCategory分類
    filterCategories () {
      if (this.filterCategory) {
        return this.products.filter(item => {
          const data = item.category.includes(this.filterCategory)
          return data
        })
      }
      return this.products
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
