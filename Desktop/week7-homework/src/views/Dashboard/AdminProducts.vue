<template>
       <div class="container">
        <!-- 建立產品按鈕 -->
        <div class="text-end mt-4">
          <button
            type="button"
            class="btn btn-primary"
            @click="openModal(true)"
          >
            建立新的產品
          </button>
        </div>
        <!-- 表單內容 -->
        <table class="table mt-4">
          <thead>
            <tr>
              <th>分類</th>
              <th>產品名稱</th>
              <th>原價</th>
              <th>售價</th>
              <th>是否啟用</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{item.category}}</td>
              <td>{{item.title}}</td>
              <td>{{item.origin_price}}</td>
              <td>{{item.price}}</td>
              <td>
                <span v-if="item.is_enabled" class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    @click="openModal(false, item)"
                  >
                    編輯</button
                  ><button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    @click="openDelProductModal(item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <AdminPagination :pages='pagination' @emit-pages="getProducts"></AdminPagination>
        <AdminProductModal
            @update-product="updateProduct"
            :product="tempProduct"
            :isNew="isNew"
            ref="productModal"
        ></AdminProductModal>
        <AdminDelProduct
            :tempProduct="tempProduct"
            ref="delModal"
            @del-item="delProduct"
        ></AdminDelProduct>
      </div>
</template>
<script>
import AdminPagination from '@/components/AdminPagination.vue'
import AdminProductModal from '@/components/AdminProductModal.vue'
import AdminDelProduct from '@/components/AdminDelProduct.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      currentPage: 1,
      tempProduct: {},
      isNew: false,
      modal: {
        delModal: ''
      }
    }
  },
  components: {
    AdminPagination,
    AdminProductModal,
    AdminDelProduct
  },
  methods: {
    getProducts (page = 1) {
      this.currentPage = page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
        //   console.log(res.data.products)
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = { ...item }
        this.isNew = false
      }
      this.$refs.productModal.openModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let http = 'post'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
      }

      this.$http[http](api, { data: this.tempProduct })
        .then((res) => {
          alert(res.data.message)
          this.$refs.productModal.hideModal()
          this.getProducts(this.currentPage)
        })
        .catch((err) => alert(err.response.data.message))
    },
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      this.$refs.delModal.openModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message)
          this.$refs.delModal.hideModal()
          this.getProducts(this.currentPage)
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
