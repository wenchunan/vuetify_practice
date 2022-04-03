/* eslint-disable no-unexpected-multiline */
<template>
<div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
>
    <div class="modal-dialog">
       <div class="modal-content">
           <div class="modal-header">
               <h5 class="modal-title" id="couponModalLabel">
                   <span v-if="isNew">新增優惠券</span>
                   <span v-else>編輯優惠券</span>
               </h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input type="text" id="title" class="form-control" placeholder="請輸入標題" v-model="tempCoupon.title">
                </div>
                <div class="mb-3">
                  <label for="coupon_code" class="form-label">優惠碼</label>
                  <input type="text" id="coupon_code" class="form-control" placeholder="請輸入優惠碼" v-model="tempCoupon.code">
                </div>
                <div class="mb-3">
                    <label for="due_date">到期日</label>
                    <input type="date" class="form-control" id="due_date"
                        v-model="due_date">
                </div>
                <div class="mb-3">
                  <label for="price" class="form-label">折扣百分比</label>
                  <input type="number" id="price" class="form-control" min="0" placeholder="請輸入折扣百分比" v-model.number="tempCoupon.percent">
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input
                              type="checkbox"
                              id="is_enabled"
                              :true-value="1"
                              :false-value="0"
                              class="form-check-input"
                              placeholder="請輸入折扣百分比" v-model="tempCoupon.is_enabled"
                        >
                        <label for="is_enabled" class="form-check-label">是否啟用</label>
                    </div>
                </div>
           </div>
           <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="$emit('update-coupon',tempCoupon)">{{ isNew ? '新增優惠券' : '更新優惠券' }}</button>
           </div>
       </div>
    </div>
</div>
</template>
<script>
import modalMixin from '@/libs/modalMixin'

export default {
  data () {
    return {
      tempCoupon: {},
      modal: '',
      due_date: ''
    }
  },
  props: {
    coupon: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  mixins: [modalMixin],
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
      dateAndTime.toISOString().split('T')
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  }
}
</script>
