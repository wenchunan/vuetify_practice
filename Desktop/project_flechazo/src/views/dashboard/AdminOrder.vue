<template>
<VueLoading :active="isLoading">
  <img src="@/assets/pic/loading.svg" alt="loadingSvg">
</VueLoading>
     <div class="container">
        <!-- 表單內容 -->
        <table class="table mt-7">
          <thead>
            <tr>
              <th>購買時間</th>
              <th>Email</th>
              <th>購買項目</th>
              <th>應付金額</th>
              <th>是否付款</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <template  v-for="item in orders" :key="item.id">
              <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
              <td>{{ $filters.date(item.create_at) }}</td>
              <td>{{item.user.email}}</td>
              <td>
                <ul class="list-unstyled">
                   <li v-for="product in item.products" :key="product.id">
                       {{ product.product.title }} {{ product.qty }}  {{ product.product.unit }}

                   </li>
                </ul>
              </td>
              <td>{{$filters.toThousands(item.total)}}</td>
              <td>
                <div class="form-ckeck form-switch">
                  <input
                    class="form-check-input"
                    id="flexSwitchCheckDefault"
                    type="checkbox"
                    v-model="item.is_paid"
                    @change="updatePaid(item)"
                  >
                  <label class="form-check-label" for="flexSwitchCheckDefault">
                    <span v-if="item.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    @click="openModal(item)"
                  >
                    檢視</button
                  ><button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    @click="openDelOrderModal(item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
            </template>
          </tbody>
        </table>
        <AdminOrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid"></AdminOrderModal>
        <AdminPagination :pages="pagination" @emit-pages="getOrders"></AdminPagination>
        <AdminDelProduct :tempProduct="tempOrder" ref="delModal" @del-item="delOrder"></AdminDelProduct>
      </div>
</template>
<script>
import AdminPagination from '@/components/AdminPagination.vue'
import AdminDelProduct from '@/components/AdminDelProduct.vue'
import AdminOrderModal from '@/components/AdminOrderModal.vue'

export default {
  data () {
    return {
      orders: {},
      pagination: {},
      currentPage: 1,
      tempOrder: {},
      isLoading: false,
      modal: {
        delModal: ''
      }
    }
  },
  components: {
    AdminPagination,
    AdminDelProduct,
    AdminOrderModal
  },
  methods: {
    getOrders (page = 1) {
      this.currentPage = page
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      this.$refs.orderModal.openModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      this.$refs.delModal.openModal()
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http
        .delete(url)
        .then((res) => {
          this.$statusMsg(res, '刪除', '刪除訂單成功')
          this.$refs.delModal.hideModal()
          this.getOrders(this.currentPage)
        }).catch(() => {
          this.$statusMsg(false, '刪除', '刪除訂單失敗')
        })
    },
    updatePaid (item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http
        .put(url, { data: paid })
        .then((res) => {
          this.$refs.orderModal.hideModal()
          this.getOrders(this.currentPage)
          this.$statusMsg(res, '更新', '已成功更新訂單')
        }).catch(() => {
          this.$statusMsg(false, '失敗', '更新訂單失敗')
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
