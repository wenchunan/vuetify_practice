<template>
    <div class="container">
      <h2>產品列表</h2>
        <div class="row row-cols-1 row-cols-lg-4 g-3">
            <div class="col" v-for="product in products" :key="product.id">
                <div class="card h-100">
                    <img :src="product.imageUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{product.title}}</h5>
                        <p class="card-text">{{product.description}}</p>
                    </div>
                    <div class="card-footer bg-white border-top-0">
                      <!-- <router-link :to="`/product/${product.id}`" class="btn btn-primary">Go somewhere</router-link> -->
                      <div class="btn-group btn-group-sm">
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          @click="getProduct(product.id)"
                          :disabled="isLoadingItem === product.id"
                        >
                          <i
                            class="fas fa-spinner fa-pulse"
                            v-if="isLoadingItem === product.id"
                          ></i>
                          查看更多
                        </button>
                         <button
                            type="button"
                            class="btn btn-outline-danger"
                            @click="addToCart(product.id)"
                            :disabled="isLoadingItem === product.id"
                        >
                            <span
                            class="spinner-border spinner-border-sm"
                            v-show="isLoadingItem === product.id"
                            ></span>
                            加到購物車
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <FrontProductModal
          ref="frontProductModal"
          :product="product"
           @add-to-cart="addToCart">
        </FrontProductModal>
    </div>
</template>
<script>
import FrontProductModal from '@/components/FrontProductModal.vue'
import emitter from '@/libs/emitter'
export default {
  components: {
    FrontProductModal
  },
  data () {
    return {
      products: [],
      product: {},
      productId: '',
      isLoadingItem: ''
    }
  },
  methods: {
    addToCart (id, qty = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http
        .post(url, { data: cart })
        .then((response) => {
          alert(response.data.message)
          this.$refs.frontProductModal.closeModal()
          this.isLoadingItem = ''
          emitter.emit('get-cart')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`
      this.$http
        .get(url)
        .then((response) => {
          this.products = response.data.products
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getProduct (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoadingItem = id
      this.$http
        .get(url)
        .then((response) => {
          this.isLoadingItem = ''
          this.product = response.data.product
          this.isLoading = false
          this.$refs.frontProductModal.openModal()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
