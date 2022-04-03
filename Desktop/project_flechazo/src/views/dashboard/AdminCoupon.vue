<template>
    <div class="container">
        <!-- 建立產品按鈕 -->
        <div class="text-end mt-4">
          <button
            type="button"
            class="btn btn-primary"
            @click="openCouponModal(true)"
          >
            建立新的優惠券
          </button>
        </div>
        <!-- 表單內容 -->
        <table class="table mt-4">
          <thead>
            <tr>
              <th>名稱</th>
              <th>折扣百分比</th>
              <th>到期日</th>
              <th>是否啟用</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in coupons" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.percent }}%</td>
              <td>{{ $filters.date(item.due_date) }}</td>
              <td>
                <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    @click="openCouponModal(false, item)"
                  >
                    編輯</button
                  ><button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    @click="openDelCouponModal(item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <AdminCouponModal
            :coupon="tempCoupon"
            ref="couponModal"
            :isNew="isNew"
            @update-coupon="updateCoupon">
        </AdminCouponModal>
        <AdminDelProduct :tempProduct="tempCoupon"
            ref="delModal"
            @del-item="delCoupon">
        </AdminDelProduct>
      </div>
</template>
<script>
import AdminCouponModal from '@/components/AdminCouponModal.vue'
import AdminDelProduct from '@/components/AdminDelProduct.vue'

export default {
  data () {
    return {
      coupons: {},
      tempCoupon: {},
      isNew: false,
      modal: {
        delModal: ''
      }
    }
  },
  components: {
    AdminCouponModal,
    AdminDelProduct
  },
  methods: {
    getCoupons () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http
        .get(url)
        .then((res) => {
          this.coupons = res.data.coupons
        }).catch((err) => {
          console.log(err)
        })
    },
    openCouponModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
        this.isNew = true
      } else {
        this.tempCoupon = { ...item }
        this.isNew = false
      }
      this.$refs.couponModal.openModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.delModal.openModal()
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message)
          this.$refs.delModal.hideModal()
          this.getCoupons()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateCoupon (item) {
      this.tempCoupon = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let http = 'post'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        http = 'put'
      }

      this.$http[http](api, { data: this.tempCoupon })
        .then((res) => {
          alert(res.data.message)
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        })
        .catch((err) => alert(err.response.data.message))
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
