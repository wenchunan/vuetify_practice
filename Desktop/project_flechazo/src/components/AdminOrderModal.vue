<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
     <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header">
            <h5 class="modal-title" id="productModalLabel">
              <span>訂單細節</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <div class="mb-2">
                     <h3 class="mb-3">用戶資料</h3>
                     <table class="table">
                        <tbody v-if="tempOrder.user">
                            <tr>
                                <th>姓名</th>
                                <td>{{ tempOrder.user.name }}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{{ tempOrder.user.email }}</td>
                            </tr>
                            <tr>
                                <th>電話</th>
                                <td>{{ tempOrder.user.tel }}</td>
                            </tr>
                            <tr>
                                <th>地址</th>
                                <td>{{ tempOrder.user.address }}</td>
                            </tr>
                        </tbody>
                     </table>
                </div>
              </div>
              <!-- 右邊資料區塊 -->
              <div class="col-md-8">
                <h3>訂單細節</h3>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>訂單編號</th>
                            <td>{{ tempOrder.id }}</td>
                        </tr>
                        <tr>
                            <th>下單時間</th>
                            <td>{{ $filters.date(tempOrder.create_at) }}</td>
                        </tr>
                        <tr>
                            <th>付款狀態</th>
                            <td>
                                <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                                <span v-else class="text-muted">尚未付款</span>
                            </td>
                        </tr>
                        <tr>
                            <th>總金額</th>
                            <td>{{ $filters.toThousands(tempOrder.total) }}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>選購商品</h3>
                <table class="table">
                    <tbody>
                        <tr v-for="item in tempOrder.products" :key="item.id">
                            <th>{{ item.product.title}}</th>
                            <td>{{ item.qty}} / {{ item.product.unit}}</td>
                            <td class="text-end">{{ $filters.toThousands(item.final_total) }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-end">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" v-model="tempOrder.is_paid">
                        <label class="form-check-label" for="invalidCheck2">
                            <span v-if="tempOrder.is_paid">已付款</span>
                            <span v-else>未付款</span>
                        </label>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="$emit('update-paid',tempOrder)">修改付款狀態</button>
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
      modal: '',
      tempOrder: {},
      isPaid: false
    }
  },
  props: {
    order: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mixins: [modalMixin],
  watch: {
    order () {
      this.tempOrder = this.order
      console.log(this.tempOrder)
    }
  }
}
</script>
